<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Car;
use App\Models\Car\CarBrand;
use App\Models\Car\CarModel;
use Inertia\Inertia;
use App\Enums\InertiaViews;
use Illuminate\Support\Facades\Log;

class CarFrontendController extends Controller
{
    public function frontendIndex(Request $request)
    {
        $modelsFilter = CarModel::all()->pluck('name');
        $brandFilter = CarBrand::all();
        $query = Car::query();

        if ($request->filled('price')) {
            $query->where('price', '<=', $request->price);
        }

        if ($request->filled('ratings')) {
            $ratings = is_array($request->ratings) ? $request->ratings : explode(',', $request->ratings);
            $query->whereIn('rating', $ratings);
        }

        if ($request->filled('brands')) {
            $brands = is_array($request->brands) ? $request->brands : explode(',', $request->brands);
            Log::info($brands);
            $query->whereIn('brand', $brands);
        }

        if ($request->filled('models')) {
            $models = is_array($request->models) ? $request->models : explode(',', $request->models);
            $query->whereIn('model', $models);
        }

        if ($request->filled('categories')) {
            $categories = is_array($request->categories) ? $request->categories : explode(',', $request->categories);
            $query->whereIn('category', $categories);
        }

        $cars = $query->get()->map(function ($car) {
            $car->car_images = json_decode($car->car_images, true);
            return $car;
        });
        Log::info($cars);

        return Inertia::render(InertiaViews::carIndex->value, [
            'cars' => $cars,
            'filters' => $request->all(),
            'modelsFilter' => $modelsFilter,
            'brandFilter' => $brandFilter,
        ]);
    }
}
