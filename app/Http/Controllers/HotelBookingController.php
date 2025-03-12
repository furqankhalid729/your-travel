<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Enums\InertiaViews;
use App\Models\Booking;

use Illuminate\Http\Request;

class HotelBookingController extends Controller
{
    public function index()
    {
        $latestBooking = Booking::where('status', 'active')
            ->join('booking_items', 'bookings.id', '=', 'booking_items.booking_id')
            ->where('booking_items.type', 'hotel')
            ->orderBy('bookings.created_at', 'desc')
            ->limit(10)
            ->get();

        return Inertia::render(InertiaViews::HotelBookingIndex->value, [
            'latestBooking' => $latestBooking
        ]);
    }

    public function allHotelBooking()
    {
        $allBooking = Booking::where('status', 'active')
            ->join('booking_items', 'bookings.id', '=', 'booking_items.booking_id')
            ->where('booking_items.type', 'hotel')
            ->get();
        return Inertia::render(InertiaViews::AllHotelBooking->value, [
            'allBooking' => $allBooking
        ]);
    }
}
