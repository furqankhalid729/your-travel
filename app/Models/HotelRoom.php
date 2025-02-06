<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HotelRoom extends Model
{
    protected $fillable = [
        'duration',
        'location',
        'food',
        'tour_type',
        'persons',
        'price',
        'tour_images',
        'summary',
        'facilities',
        'types',
        'rooms'
    ];

    protected $casts = [
        'tour_images' => 'array',
        'facilities' => 'array',
        'types' => 'array',
        'rooms' => 'array'
    ];
}
