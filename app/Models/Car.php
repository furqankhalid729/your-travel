<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    protected $fillable = [
        'car_name',
        'brand',
        'model',
        'fuel',
        'car_number',
        'transmission',
        'capacity',
        'status',
        'price',
        'tags',
        'features',
        'car_images',

        'vehicle_id',
        'vehicle_type',
        'vehicle_category',
        'year_of_manufacture',
        'color',
        'chassis_number',
        'price_per_km',
        'owner',
        'trunk_size',
        'mileage',
        'allowed_for_rides',
        'last_use',
        'note_fuel',
    ];
    protected $casts = [
        'features' => 'array',
        'car_images' => 'array',
    ];
}
