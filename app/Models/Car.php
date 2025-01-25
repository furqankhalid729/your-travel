<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
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
        'features',
        'car_images',
    ];

    protected $casts = [
        'features' => 'json',
        'car_images' => 'json',
    ];
}