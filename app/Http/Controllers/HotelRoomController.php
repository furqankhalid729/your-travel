<?php

namespace App\Http\Controllers;

use App\Models\HotelRoom;
use Illuminate\Http\Request;

class HotelRoomController extends Controller
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
            'types' => 'required|array',
        ]);

        $hotelRoom = HotelRoom::create($validated);

        return response()->json([
            'message' => 'Hotel room added successfully!',
            'hotel_room' => $hotelRoom,
        ], 201);
    }
}
