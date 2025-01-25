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
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
            'features' => 'nullable|array',
            'features.*.name' => 'required|string|max:255',
            'features.*.icon' => 'required|string|max:255',
            'car_images' => 'nullable|array',
            'car_images.*.file' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $carImages = [];
        if ($request->has('car_images') && !empty($request->input('car_images'))) {
            foreach ($request->file('car_images') as $carImage) {
                Log::info('File Uploaded:', ['file' => $carImage]);
                if (isset($carImage['file']) && $carImage['file'] instanceof \Illuminate\Http\UploadedFile) {
                    $path = $carImage['file']->store('images/Car');
                    $carImages[] = $path;
                } else {
                    Log::error('Not an instance of UploadedFile:', ['file' => $carImage['file']]);
                }
                $carImages[] = $path;
            }
        }
        Log::info('Car Images:', ['images' => $validatedData['features']]);
        $car = Car::create([
            ...$validatedData,
            'features' => $validatedData['features'] ?? [],
            'car_images' => json_encode($carImages),
        ]);

        return response()->json($car, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
