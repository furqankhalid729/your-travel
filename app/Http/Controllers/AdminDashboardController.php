<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Enums\InertiaViews;
use Carbon\Carbon;
use App\Models\Booking;

class AdminDashboardController extends Controller
{
    public function index(Request $request)
    {
        $currentYear = Carbon::now()->year;
        $currentMonth = Carbon::now()->month;
        $pastYear = Carbon::now()->subYear()->year;

        $totalValueYearly = Booking::whereYear('bookings.created_at', $currentYear) // Specify table
            ->join('booking_items', 'bookings.id', '=', 'booking_items.booking_id')
            ->sum('booking_items.price');

        $totalValueMonthly = Booking::whereYear('bookings.created_at', $currentYear) // Specify table
            ->whereMonth('bookings.created_at', $currentMonth) // Specify table
            ->join('booking_items', 'bookings.id', '=', 'booking_items.booking_id')
            ->sum('booking_items.price');

        $totalBookingsYearly = Booking::whereYear('created_at', $currentYear)->count();

        $activeBookingsTotal = Booking::where('status', 'active')
            ->join('booking_items', 'bookings.id', '=', 'booking_items.booking_id')
            ->sum('booking_items.price');
        $cancelBookingsTotal = Booking::where('status', 'cancel')
            ->join('booking_items', 'bookings.id', '=', 'booking_items.booking_id')
            ->sum('booking_items.price');

        return Inertia::render(InertiaViews::AdminDashboard->value, [
            'totalValueYearly' => $totalValueYearly,
            'totalValueMonthly' => $totalValueMonthly,
            'currentYear' => $currentYear,
            'pastYear' => $pastYear,
            'currentMonth' => $currentMonth,
            'totalBookingsYearly' => $totalBookingsYearly,
            'activeBookingsTotal' => $activeBookingsTotal,
            'cancelBookingsTotal' => $cancelBookingsTotal
        ]);
    }
}
