<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Enums\InertiaViews;


use Illuminate\Http\Request;

class HotelBookingController extends Controller
{
    public function index()
    {
        return Inertia::render(InertiaViews::HotelBookingIndex->value);
    }


    public function store(Request $request) {
        $validated = $request->validate([
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|email',
            'phone_no' => 'required|string',
            'identity_no' => 'required|string',
            'gender' => 'required|in:Male,Female,Other',
            'from_date' => 'required|date',
            'to_date' => 'required|date|after_or_equal:from_date',
            'duration' => 'required|string',
            'tour_location' => 'required|string',
            'no_of_member' => 'required|integer',
            'price' => 'required|numeric',
        ]);

        $booking = HotelBooking::create($validated);
        return response()->json(['message' => 'Booking created!', 'data' => $booking], 201);
    }

    public function show($id) {
        $booking = HotelBooking::find($id);
        if (!$booking) {
            return response()->json(['message' => 'Booking not found'], 404);
        }
        return response()->json($booking);
    }

    public function update(Request $request, $id) {
        $booking = HotelBooking::find($id);
        if (!$booking) {
            return response()->json(['message' => 'Booking not found'], 404);
        }

        $validated = $request->validate([
            'first_name' => 'sometimes|string',
            'last_name' => 'sometimes|string',
            'email' => 'sometimes|email',
            'phone_no' => 'sometimes|string',
            'identity_no' => 'sometimes|string',
            'gender' => 'sometimes|in:Male,Female,Other',
            'from_date' => 'sometimes|date',
            'to_date' => 'sometimes|date|after_or_equal:from_date',
            'duration' => 'sometimes|string',
            'tour_location' => 'sometimes|string',
            'no_of_member' => 'sometimes|integer',
            'price' => 'sometimes|numeric',
        ]);

        $booking->update($validated);
        return response()->json(['message' => 'Booking updated!', 'data' => $booking]);
    }

    public function destroy($id) {
        $booking = HotelBooking::find($id);
        if (!$booking) {
            return response()->json(['message' => 'Booking not found'], 404);
        }
        $booking->delete();
        return response()->json(['message' => 'Booking deleted!']);
    }
}
