<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Car;
use Inertia\Inertia;
use App\Enums\InertiaViews;
use Illuminate\Support\Facades\Log;
class CarFrontendController extends Controller
{
    public function frontendIndex()
    {
        $cars = Car::all();
        $cars = Car::all()->map(function ($car) {
            $car->car_images = json_decode($car->car_images, true);
            return $car;
        });
        return Inertia::render(InertiaViews::carIndex->value, [
            'cars' => $cars,
        ]);
    }
}
