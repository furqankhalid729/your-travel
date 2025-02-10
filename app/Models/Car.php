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
    ];
    protected $casts = [
        'features' => 'array',
        'car_images' => 'array',
    ];
}
