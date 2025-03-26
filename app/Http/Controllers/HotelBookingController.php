<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Enums\InertiaViews;
use App\Models\Booking;
use App\Models\HotelRoom;
use App\Models\Hotel;
use Illuminate\Support\Facades\Log;

use Illuminate\Http\Request;

class HotelBookingController extends Controller
{
    public function index()
    {
        $latestBooking = Booking::join('booking_items', 'bookings.id', '=', 'booking_items.booking_id')
            ->where('booking_items.type', 'hotel')
            ->orderBy('bookings.created_at', 'desc')
            ->select('bookings.id as mainID', 'bookings.*', 'booking_items.*')
            ->limit(50)
            ->get();

        $hotelRoomsCount = HotelRoom::all()->count();
        $bookingCount = $latestBooking->count();
        return Inertia::render(InertiaViews::HotelBookingIndex->value, [
            'latestBooking' => $latestBooking,
            'hotelRoomsCount'    => $hotelRoomsCount,
            'bookingCount'   => $bookingCount,
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

    public function show($id)
    {
        $order = Booking::where("id", $id)->with("items")->first();
        $hotelItem = $order->items->firstWhere('type', 'hotel');
        $addtional_info = json_decode($hotelItem->additional_info, true);
        $hotelRoom = HotelRoom::where("id",$addtional_info['room_id'])->with("hotel")->first();
        Log::info("Hotel ITem",[$hotelRoom]);
        return Inertia::render(InertiaViews::ViewHotelBooking->value, [
            'booking' => $order,
            'hotelItem' => $hotelItem,
            'hotelRoom' => $hotelRoom
        ]);
    }
}
