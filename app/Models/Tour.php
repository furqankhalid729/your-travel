<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tour extends Model
{

    protected $fillable = [
        'name',
        'duration',
        'location',
        'food',
        'tour_type',
        'persons',
        'price',
        'tour_images',
        'summary',
        'facilities',
        'includedExcludedTypes',
        'condition',
        'tour_itinerary',
    ];

    protected $casts = [
        'tour_images' => 'array',
        'facilities' => 'array',
        'includedExcludedTypes' => 'array',
        'tour_itinerary' => 'array',
    ];
}
