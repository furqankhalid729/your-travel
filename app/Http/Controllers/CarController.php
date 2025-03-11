<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Enums\InertiaViews;
use Illuminate\Support\Facades\Log;
use App\Models\Car;
use App\Models\Car\CarBrand;
use App\Models\Car\CarFeature;
use App\Models\Car\CarFuel;
use App\Models\Car\CarModel;
use App\Models\Car\CarTransmission;


class CarController extends Controller
{

    /**
     * Display the specified resource.
     */

    public function show($id)
    {
        $car = Car::findOrFail($id);
        $car->car_images = json_decode($car->car_images, true);

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
        return Inertia::render(InertiaViews::CarIndex->value, [
            'cars' => $cars,
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
        if ($request->header('X-Inertia')) {
            return redirect()->route('cars.index')->with('success', 'Car added successfully!');
        }
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
}
