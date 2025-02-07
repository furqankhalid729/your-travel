<?php

namespace App\Http\Controllers;

use App\Enums\InertiaViews;
use App\Models\HotelRoom;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class HotelRoomController extends Controller
{
    /**
     * Display a listing of the hotel rooms.
     */
    public function index()
    {
        $hotelRooms = HotelRoom::all();
        $hotelRooms = HotelRoom::all()->map(function ($room) {
            $room->facilities = json_decode($room->facilities, true);
            $room->types = json_decode($room->types, true);
            $room->tour_images = json_decode($room->tour_images, true);
            $room->rooms = json_decode($room->rooms, true);
            return $room;
        });

        return Inertia::render(InertiaViews::RoomIndex->value, [
            'hotelRooms' => $hotelRooms,
        ]);
    }

    /**
     * Show the form for creating a new hotel room.
     */
    public function create()
    {
        return Inertia::render(InertiaViews::AddHotelRoom->value);
    }

    /**
     * Store a newly created hotel room.
     */
    public function store(Request $request)
    {
        Log::info($request->all());

        $validatedData = $request->validate([
            'duration' => 'required|string',
            'location' => 'required|string',
            'food' => 'required|string',
            'tour_type' => 'required|string',
            'persons' => 'required|integer',
            'price' => 'required|numeric',
            'summary' => 'required|string',
            'facilities' => 'nullable|array',
            'facilities.*.name' => 'required|string|max:255',
            'facilities.*.icon' => 'required|string|max:255',
            'types' => 'nullable|array',
            'types.*.name' => 'required|string|max:255',
            'types.*.icon' => 'required|string|max:255',
            'tour_images' => 'nullable|array',
            'tour_images.*.file' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'rooms' => 'required|array', // Validate rooms as an array
            'rooms.*.room_id' => 'required|string|max:255',
            'rooms.*.room_type' => 'required|string|max:255',
            'rooms.*.available_rooms' => 'required|string|max:255',
            'rooms.*.price' => 'required|numeric',
        ]);

        // Handle tour_images upload
        $tourImages = [];
        if ($request->has('tour_images') && !empty($request->file('tour_images'))) {
            foreach ($request->file('tour_images') as $tourImage) {
                if (isset($tourImage['file']) && $tourImage['file'] instanceof \Illuminate\Http\UploadedFile) {
                    $path = $tourImage['file']->store('images/hotel_rooms');
                    $tourImages[] = $path;
                } else {
                    Log::error('Not an instance of UploadedFile:', ['file' => $tourImage['file']]);
                }
            }
        }

        $hotelRoom = HotelRoom::create([
            ...$validatedData,
            'facilities' => json_encode($validatedData['facilities'] ?? []),
            'types' => json_encode($validatedData['types'] ?? []),
            'tour_images' => json_encode($tourImages),
            'rooms' => json_encode($validatedData['rooms']),
        ]);

        return response()->json($hotelRoom, 201);
    }

    /**
     * Show the form for editing the specified hotel room.
     */
    public function edit(string $id)
    {
        $hotelRoom = HotelRoom::find($id);

        if (!$hotelRoom) {
            return redirect()->back()->withErrors(['error' => 'Hotel room not found!']);
        }

        return Inertia::render('HotelRoom/EditHotelRoom', [
            'hotelRoom' => $hotelRoom,
        ]);
    }

    /**
     * Update the specified hotel room.
     */
    public function update(Request $request, string $id)
    {
        $hotelRoom = HotelRoom::find($id);

        if (!$hotelRoom) {
            return redirect()->back()->withErrors(['error' => 'Hotel room not found!']);
        }

        $validatedData = $request->validate([
            'duration' => 'required|string',
            'location' => 'required|string',
            'food' => 'required|string',
            'tour_type' => 'required|string',
            'persons' => 'required|integer',
            'price' => 'required|numeric',
            'summary' => 'required|string',
            'facilities' => 'nullable|array',
            'facilities.*.name' => 'required|string|max:255',
            'facilities.*.icon' => 'required|string|max:255',
            'types' => 'nullable|array',
            'types.*.name' => 'required|string|max:255',
            'tour_images' => 'nullable|array',
            'tour_images.*.file' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'rooms' => 'nullable|array',
        ]);

        // Handle tour_images upload
        $tourImages = json_decode($hotelRoom->tour_images, true) ?? [];
        if ($request->has('tour_images') && !empty($request->file('tour_images'))) {
            foreach ($request->file('tour_images') as $tourImage) {
                if (isset($tourImage['file']) && $tourImage['file'] instanceof \Illuminate\Http\UploadedFile) {
                    $path = $tourImage['file']->store('images/hotel_rooms');
                    $tourImages[] = $path;
                } else {
                    Log::error('Not an instance of UploadedFile:', ['file' => $tourImage['file']]);
                }
            }
        }

        $hotelRoom->update([
            'duration' => $validatedData['duration'],
            'location' => $validatedData['location'],
            'food' => $validatedData['food'],
            'tour_type' => $validatedData['tour_type'],
            'persons' => $validatedData['persons'],
            'price' => $validatedData['price'],
            'summary' => $validatedData['summary'],
            'facilities' => json_encode($validatedData['facilities'] ?? []),
            'types' => json_encode($validatedData['types'] ?? []),
            'tour_images' => json_encode($tourImages),
            'rooms' => json_encode($validatedData['rooms']),
        ]);

        return redirect()->route('hotelRooms.index')->with('success', 'Hotel room updated successfully');
    }

    /**
     * Remove the specified hotel room.
     */
    public function destroy(string $id)
    {
        $hotelRoom = HotelRoom::find($id);
        if (!$hotelRoom) {
            return response()->json(['message' => 'Hotel room not found.'], 404);
        }
        $hotelRoom->delete();
        return response()->json(['message' => 'Hotel room deleted successfully.'], 200);
    }
}