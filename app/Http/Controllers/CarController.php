<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Enums\InertiaViews;
use Illuminate\Support\Facades\Log;
use App\Models\Car;
use App\Models\Driver;
use App\Models\Car\CarBrand;
use App\Models\Car\CarFeature;
use App\Models\Car\CarFuel;
use App\Models\Car\CarModel;
use App\Models\Car\CarTransmission;
use App\Models\Booking;
use App\Models\BookingItem;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Exception;

class CarController extends Controller
{

    /**
     * Display the specified resource.
     */

    public function show($id)
    {
        $car = Car::findOrFail($id);
        $car->car_images = json_decode($car->car_images, true);

        if (!$car) {
            return response()->json(['error' => 'Car not found'], Response::HTTP_BAD_REQUEST);
        }

        return Inertia::render(InertiaViews::CarDetail->value, [
            'car' => $car,
        ]);
    }

    public function filter(Request $request)
    {
        $query = Car::query();

        if ($request->has('topCars')) {
            $query->whereIn('name', $request->input('topCars'));
        }

        if ($request->has('types')) {
            $query->whereIn('type', $request->input('types'));
        }

        if ($request->has('categories')) {
            $query->whereIn('category', $request->input('categories'));
        }

        if ($request->has('ratings')) {
            $query->whereIn('rating', $request->input('ratings'));
        }

        if ($request->has('price')) {
            $query->where('price', '<=', $request->input('price'));
        }

        $cars = $query->get();

        return response()->json($cars);
    }

    public function featured(Request $request)
    {
        $limit = $request->input('limit', 4);
        $cars = Car::limit($limit)->get();
        return response()->json($cars);
    }

    public function view($id)
    {
        $car = Car::where("id", $id)->first();
        if (!$car) {
            return response()->json(['error' => 'Car not found'], Response::HTTP_BAD_REQUEST);
        }
        return Inertia::render(InertiaViews::AdminViewCar->value, [
            'car' => $car,
        ]);
    }

    public function assignRider($id)
    {
        $order = Booking::where("id", $id)->with("items")->first();
        $carItem = $order->items->firstWhere('type', 'car');
        $additionalInfo = json_decode($carItem->additional_info, true);
        $carId = $additionalInfo['car_id'] ?? null;

        if ($carId) {
            $carDetails = Car::find($carId);
        }
        $car = Car::where("id", $carId)->first();
        $drivers = Driver::where("car_id", $carId)->get();
        if (!$order) {
            abort(404);
        }
        return Inertia::render(InertiaViews::CarAssignRider->value, [
            "order" => $order,
            "car" => $car,
            "drivers" => $drivers
        ]);
    }

    public function saveRider(Request $request)
    {
        try {
            // Validate input
            $validatedData = $request->validate([
                'driver_id' => 'required|exists:drivers,id',
                'order_id' => 'required|exists:bookings,id',
            ]);

            DB::beginTransaction();
            $bookingItem = BookingItem::where('booking_id', $validatedData['order_id'])->first();
            if (!$bookingItem) {
                return response()->json(['error' => 'No booking item found for this order.'], 404);
            }
            $additionalInfo = json_decode($bookingItem->additional_info, true);
            $additionalInfo['driver_id'] = $validatedData['driver_id'];

            $bookingItem->additional_info = json_encode($additionalInfo);
            $bookingItem->save();
            $booking = Booking::findOrFail($validatedData['order_id']);
            $booking->status = "fulfilled";
            $booking->save();
            DB::commit();

            return response()->json(['message' => 'Driver assigned successfully!'], 200);
        } catch (Exception $e) {
            // Rollback in case of an error
            DB::rollBack();

            return response()->json([
                'error' => 'Something went wrong!',
                'details' => $e->getMessage()
            ], 500);
        }
    }

    // Admin

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $cars = Car::all();
        $cars = Car::all()->map(function ($car) {
            $car->car_images = json_decode($car->car_images, true);
            return $car;
        });
        $carCount = Car::count();
        $driverCount = Driver::count();
        $activeBookingsTotal = Booking::where('status', 'active')
            ->whereHas('items', function ($query) {
                $query->where('type', 'car');
            })
            ->count();
        return Inertia::render(InertiaViews::CarIndex->value, [
            'cars' => $cars,
            'carCount' => $carCount,
            'driverCount' => $driverCount,
            'activeBookingsTotal' => $activeBookingsTotal
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $models = CarModel::all();
        $fuels = CarFuel::all();
        $transmissions = CarTransmission::all();
        $brands = CarBrand::all();
        return Inertia::render(InertiaViews::AddCar->value, [
            'brands' => $brands,
            'models' => $models,
            'fuels' => $fuels,
            'transmissions' => $transmissions,
        ]);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Log::info($request->all());
        $validatedData = $request->validate([
            'car_name' => 'required|string|max:255',
            'brand' => 'required|string|max:255',
            'model' => 'required|string|max:255',
            'fuel' => 'required|string',
            'car_number' => 'required|string|max:255|unique:cars',
            'transmission' => 'required|string',
            'capacity' => 'required|integer',
            'status' => 'required|string',
            'price' => 'required|numeric',
            'tags' => 'required|string|max:255',
            'features' => 'nullable|array',
            'features.*.name' => 'required|string|max:255',
            'features.*.icon' => 'required|string|max:255',
            'car_images' => 'nullable|array',
            'car_images.*.file' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $carImages = [];
        if ($request->has('car_images') && !empty($request->input('car_images'))) {
            foreach ($request->file('car_images') as $carImage) {
                if (isset($carImage['file']) && $carImage['file'] instanceof \Illuminate\Http\UploadedFile) {
                    $path = $carImage['file']->store('images/Car');
                    $carImages[] = $path;
                } else {
                    Log::error('Not an instance of UploadedFile:', ['file' => $carImage['file']]);
                }
            }
        }
        $car = Car::create([
            ...$validatedData,
            'features' => $validatedData['features'] ?? [],
            'car_images' => json_encode($carImages),
        ]);

        return response()->json($car, 201);
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $car = Car::find($id);

        if (!$car) {
            return redirect()->back()->withErrors(['error' => 'Car not found!']);
        }

        $models = CarModel::all();
        $fuels = CarFuel::all();
        $transmissions = CarTransmission::all();
        $brands = CarBrand::all();

        return Inertia::render(InertiaViews::EditCar->value, [
            'car' => $car,
            'brands' => $brands,
            'models' => $models,
            'fuels' => $fuels,
            'transmissions' => $transmissions,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $car = Car::find($id);

        if (!$car) {
            return redirect()->back()->withErrors(['error' => 'Car not found!']);
        }

        $validatedData = $request->validate([
            'car_name' => 'required|string|max:255',
            'brand' => 'required|string|max:255',
            'model' => 'required|string|max:255',
            'fuel' => 'required|string',
            'car_number' => 'required|string|max:255|unique:cars,car_number,' . $car->id,
            'transmission' => 'required|string',
            'capacity' => 'required|integer',
            'status' => 'required|string',
            'price' => 'required|numeric',
            'tags' => 'required|string|max:255',
            'features' => 'nullable|array',
            'features.*.name' => 'required|string|max:255',
            'features.*.icon' => 'required|string|max:255',
            'car_images' => 'nullable|array',
            'car_images.*.file' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        // Handle features
        $features = $validatedData['features'] ?? [];

        // Handle car_images
        $carImages = json_decode($car->car_images, true) ?? [];
        if ($request->has('car_images') && !empty($request->file('car_images'))) {
            foreach ($request->file('car_images') as $carImage) {
                if (isset($carImage['file']) && $carImage['file'] instanceof \Illuminate\Http\UploadedFile) {
                    $path = $carImage['file']->store('images/Car');
                    $carImages[] = $path;
                } else {
                    Log::error('Not an instance of UploadedFile:', ['file' => $carImage['file']]);
                }
            }
        }

        // Update the car record
        $car->update([
            'car_name' => $validatedData['car_name'],
            'brand' => $validatedData['brand'],
            'model' => $validatedData['model'],
            'fuel' => $validatedData['fuel'],
            'car_number' => $validatedData['car_number'],
            'transmission' => $validatedData['transmission'],
            'capacity' => $validatedData['capacity'],
            'status' => $validatedData['status'],
            'price' => $validatedData['price'],
            'tags' => $validatedData['tags'],
            'features' => $features,
            'car_images' => json_encode($carImages),
        ]);

        return redirect()->route('cars.index')->with('success', 'Car updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $car = Car::find($id);
        if (!$car) {
            return response()->json(['message' => 'Car not found.'], 404);
        }
        $car->delete();
        return response()->json(['message' => 'Car deleted successfully.'], 200);
    }

    public function carBooking(Request $request)
    {
        $activeBookingsTotal = Booking::where('status', 'active')
            ->join('booking_items', 'bookings.id', '=', 'booking_items.booking_id')
            ->where('booking_items.type', 'car')
            ->select('bookings.id as mainID', 'bookings.*', 'booking_items.*')
            ->get();

        return Inertia::render(InertiaViews::CarBooking->value, [
            'activeBooking' => $activeBookingsTotal
        ]);
    }
}
