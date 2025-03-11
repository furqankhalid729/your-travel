<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TourBooking;
use App\Models\Tour;
use Inertia\Inertia;

class TourBookingController extends Controller
{
    // List all tour bookings
    public function index()
    {
        $bookings = TourBooking::with('tour')->get();
        return Inertia::render('TourBookings/Index', [
            'bookings' => $bookings,
        ]);
    }

    public function show($id)
    {
        $booking = TourBooking::with('tour')->find($id);
        if (!$booking) {
            return response()->json(['message' => 'Booking not found.'], 404);
        }
        return Inertia::render('TourBookings/Show', [
            'booking' => $booking,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'tour_id' => 'required|exists:tours,id',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'contact' => 'required|string|max:20',
            'type' => 'required|string',
            'members' => 'required|integer|min:1',
            'price' => 'required|numeric|min:0',
            'status' => 'required|string|in:pending,confirmed,canceled',
        ]);

        $booking = TourBooking::create($validated);
        return redirect()->route('tour_bookings.index')->with('success', 'Booking created successfully.');
    }

    public function update(Request $request, $id)
    {
        $booking = TourBooking::find($id);
        if (!$booking) {
            return response()->json(['message' => 'Booking not found.'], 404);
        }

        $validated = $request->validate([
            'tour_id' => 'required|exists:tours,id',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'contact' => 'required|string|max:20',
            'type' => 'required|string',
            'members' => 'required|integer|min:1',
            'price' => 'required|numeric|min:0',
            'status' => 'required|string|in:pending,confirmed,canceled',
        ]);

        $booking->update($validated);
        return redirect()->route('tour_bookings.index')->with('success', 'Booking updated successfully.');
    }

    public function destroy($id)
    {
        $booking = TourBooking::find($id);
        if (!$booking) {
            return response()->json(['message' => 'Booking not found.'], 404);
        }
        $booking->delete();
        return response()->json(['message' => 'Booking deleted successfully.'], 200);
    }
}
