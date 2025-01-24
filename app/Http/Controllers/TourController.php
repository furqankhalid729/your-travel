<?php

namespace App\Http\Controllers;

use App\Models\Tour;
use Illuminate\Http\Request;

class TourController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'duration' => 'required|string',
            'location' => 'required|string',
            'food' => 'required|string',
            'tour_type' => 'required|string',
            'persons' => 'required|integer',
            'price' => 'required|numeric',
            'tour_images' => 'required|array',
            'summary' => 'required|string',
            'facilities' => 'required|array',
            'includedExcludedTypes' => 'required|array',
            'condition' => 'required|string',
            'tour_itinerary' => 'required|array',
        ]);

        $tour = Tour::create($validated);

        return response()->json([
            'message' => 'Tour added successfully!',
            'tour' => $tour,
        ], 201);
    }
}
