<?php

namespace App\Http\Controllers;

use App\Enums\InertiaViews;
use App\Models\HotelRoom;
use App\Models\Hotel;
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
        $hotels = Hotel::all();
        return Inertia::render(InertiaViews::RoomIndex->value, [
            'hotels' => $hotels,
        ]);
    }

    /**
     * Show the form for creating a new hotel room.
     */
    public function show(string $id)
    {
        $hotel = Hotel::find($id);

        if (!$hotel) {
            return redirect()->back()->withErrors(['error' => 'Hotel room not found!']);
        }

        $hotelRooms = HotelRoom::where('hotel_id', $hotel->id)->get();
        $hotel->facilities = json_decode($hotel->facilities, true);
        $hotel->types = json_decode($hotel->types, true);
        $hotel->tour_images = json_decode($hotel->tour_images, true);

        return Inertia::render(InertiaViews::HotelDetail->value, [
            'hotel' => $hotel,
            'hotelRooms' => $hotelRooms
        ]);
    }

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
            'name' => 'required | string',
            'description' => 'required | string',
            'location' => 'required | string',
            'food' => 'required | string',

            'facilities' => 'nullable|array',
            'facilities.*.name' => 'required|string|max:255',
            'facilities.*.icon' => 'required|string|max:255',

            'types' => 'nullable|array',
            'types.*.name' => 'required|string|max:255',
            'types.*.icon' => 'required|string|max:255',

            'tour_images' => 'nullable|array',
            'tour_images.*.file' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',

            'rooms' => 'required|array',
            'rooms.*.room_id' => 'required|string|max:255',
            'rooms.*.room_type' => 'required|string|max:255',
            'rooms.*.status' => 'required|string|max:255',
            'rooms.*.price' => 'required|numeric',
        ]);

        // Handle tour_images upload
        $tourImages = [];
        if ($request->has('tour_images') && !empty($request->file('tour_images'))) {
            foreach ($request->file('tour_images') as $tourImage) {
                if (isset($tourImage['file']) && $tourImage['file'] instanceof \Illuminate\Http\UploadedFile) {
                    $path = $tourImage['file']->store('images/Hotel');
                    $tourImages[] = $path;
                } else {
                    Log::error('Not an instance of UploadedFile:', ['file' => $tourImage['file']]);
                }
            }
        }

        $hotel = Hotel::create([
            ...$validatedData,
            'facilities' => json_encode($validatedData['facilities'] ?? []),
            'types' => json_encode($validatedData['types'] ?? []),
            'images' => json_encode($tourImages),
        ]);

        foreach ($validatedData['rooms'] as $roomData) {
            HotelRoom::create([
                'hotel_id' => $hotel->id,
                'room_id' => $roomData['room_id'],
                'room_type' => $roomData['room_type'],
                'status' => $roomData['status'],
                'price' => $roomData['price'],
            ]);
        }

        return redirect()->route('hotel.index')->with('success', 'Hotel Added successfully');
    }

    /**
     * Show the form for editing the specified hotel room.
     */
    public function edit(string $id)
    {
        $hotel = Hotel::find($id);

        if (!$hotel) {
            return redirect()->back()->withErrors(['error' => 'Hotel room not found!']);
        }
        $hotelRooms = HotelRoom::where('hotel_id', $hotel->id)->get();
        // Decode the JSON fields
        $hotel->facilities = json_decode($hotel->facilities, true);
        $hotel->types = json_decode($hotel->types, true);
        $hotel->tour_images = json_decode($hotel->tour_images, true);
        $hotel->rooms = json_decode($hotel->rooms, true);

        return Inertia::render(InertiaViews::EditHotel->value, [
            'hotel' => $hotel,
            'hotelRooms' => $hotelRooms
        ]);
    }

    /**
     * Update the specified hotel room.
     */
    public function update(Request $request, string $id)
    {
        $hotel = Hotel::find($id);

        if (!$hotel) {
            return redirect()->back()->withErrors(['error' => 'Hotel room not found!']);
        }

        $validatedData = $request->validate([
            'name' => 'required | string',
            'description' => 'required | string',
            'location' => 'required | string',
            'food' => 'required | string',

            'facilities' => 'nullable|array',
            'facilities.*.name' => 'required|string|max:255',
            'facilities.*.icon' => 'required|string|max:255',

            'types' => 'nullable|array',
            'types.*.name' => 'required|string|max:255',
            'types.*.icon' => 'required|string|max:255',

            'tour_images' => 'nullable|array',
            'tour_images.*.file' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',

            'rooms' => 'required|array',
            'rooms.*.room_id' => 'required|string|max:255',
            'rooms.*.room_type' => 'required|string|max:255',
            'rooms.*.status' => 'required|string|max:255',
            'rooms.*.price' => 'required|numeric',
        ]);

        $tourImages = json_decode($hotel->tour_images, true) ?? [];
        if ($request->has('tour_images') && !empty($request->file('tour_images'))) {
            foreach ($request->file('tour_images') as $tourImage) {
                if (isset($tourImage['file']) && $tourImage['file'] instanceof \Illuminate\Http\UploadedFile) {
                    $path = $tourImage['file']->store('images/Hotel');
                    $tourImages[] = $path;
                } else {
                    Log::error('Not an instance of UploadedFile:', ['file' => $tourImage['file']]);
                }
            }
        }

        $hotel->update([
            ...$validatedData,
            'facilities' => json_encode($validatedData['facilities'] ?? []),
            'types' => json_encode($validatedData['types'] ?? []),
            'images' => json_encode($tourImages ?? []),
        ]);

        // Retrieve existing rooms from the database
        $existingRooms = HotelRoom::where('hotel_id', $hotel->id)->get();

        // Extract room IDs from the validated data
        $submittedRoomIds = array_column($validatedData['rooms'], 'id');
        Log::info($submittedRoomIds);
        // Step 1: Detect and delete removed rooms
        foreach ($existingRooms as $existingRoom) {
            if (!in_array($existingRoom->room_id, $submittedRoomIds)) {
                Log::info("ID match");
                $existingRoom->delete();
            }
        }

        // Step 2: Add new or update existing rooms
        foreach ($validatedData['rooms'] as $roomData) {
            $existingRoom = HotelRoom::where('hotel_id', $hotel->id)
                ->where('room_id', $roomData['room_id'])
                ->first();

            if ($existingRoom) {
                // Update existing room
                $existingRoom->update([
                    'room_type' => $roomData['room_type'],
                    'status' => $roomData['status'],
                    'price' => $roomData['price'],
                ]);
            } else {
                // Create new room
                HotelRoom::create([
                    'hotel_id' => $hotel->id,
                    'room_id' => $roomData['room_id'],
                    'room_type' => $roomData['room_type'],
                    'status' => $roomData['status'],
                    'price' => $roomData['price'],
                ]);
            }
        }


        return redirect()->route('hotel.index')->with('success', 'Hotel room updated successfully');
    }

    /**
     * Remove the specified hotel room.
     */
    public function destroy(string $id)
    {
        $hotel = Hotel::find($id);
        if (!$hotel) {
            return response()->json(['message' => 'Hotel room not found.'], 404);
        }
        $hotel->delete();
        return response()->json(['message' => 'Hotel room deleted successfully.'], 200);
    }
}
