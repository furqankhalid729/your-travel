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
        
        'slots',
        'keywords',
        'transport_time',
        'transport_provider',
        'start_location',
        'end_location',
        'start_date',
        'end_date',
        'estimated_time',
        'adults',
        'adult_cost',
        'adult_margin',
        'adult_total_price',
        'children',
        'child_cost',
        'child_margin',
        'child_total_price',
    ];

    protected $casts = [
        'tour_images' => 'array',
        'facilities' => 'array',
        'includedExcludedTypes' => 'array',
        'tour_itinerary' => 'array',
    ];
}
