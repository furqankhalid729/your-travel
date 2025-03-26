<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use App\Enums\InertiaViews;
use Carbon\Carbon;
use App\Models\Booking;
use App\Models\BookingItem;
use App\Models\User;
use Illuminate\Support\Facades\DB;


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


        $currentYear = Carbon::now()->year;
        $currentMonth = Carbon::now()->month;

        $salesReportData = collect(range(0, 11))->map(function ($i) {
            $date = Carbon::now()->subMonths($i);
            $monthName = $date->format('M');
            $year = $date->year;

            $totalSales = Booking::whereYear('bookings.created_at', $year)
                ->whereMonth('bookings.created_at', $date->month)
                ->join('booking_items', 'bookings.id', '=', 'booking_items.booking_id')
                ->sum('booking_items.price');

            $totalOrders = Booking::whereYear('created_at', $year)
                ->whereMonth('created_at', $date->month)
                ->count();

            $totalVisitors = 40;

            return [$monthName, $totalSales, $totalVisitors, $totalOrders];
        })->reverse()->toArray();
        array_unshift($salesReportData, ["Month", "Total Sales", "Total Visitors", "Total Orders"]);

        $userData = collect(range(0, 5))->map(function ($i) {
            $date = Carbon::now()->subMonths($i);
            $monthName = $date->format('M');
        
            $visitorCount = DB::table('users')
                ->whereYear('created_at', $date->year)
                ->whereMonth('created_at', $date->month)
                ->count();
        
            return [$monthName, $visitorCount];
        })->reverse()->toArray();

        array_unshift($userData, ["Month", "Customers"]);

        $customerData = [
            ["Customer Type", "Percentage"]
        ];
        
        // Count users who have exactly 1 booking using their email
        $singleOrderCustomers = DB::table('bookings')
            ->select('email') // Using email instead of customer_id
            ->groupBy('email')
            ->havingRaw('COUNT(id) = 1')
            ->count();
        
        // Count users who have more than 1 booking using their email
        $multipleOrderCustomers = DB::table('bookings')
            ->select('email') // Using email instead of customer_id
            ->groupBy('email')
            ->havingRaw('COUNT(id) > 1')
            ->count();
        
        // Total unique customers
        $totalCustomers = $singleOrderCustomers + $multipleOrderCustomers;
        
        // Avoid division by zero
        if ($totalCustomers > 0) {
            $customerData[] = ["Single Order", round(($singleOrderCustomers / $totalCustomers) * 100, 2)];
            $customerData[] = ["Multiple Orders", round(($multipleOrderCustomers / $totalCustomers) * 100, 2)];
        } else {
            $customerData[] = ["Single Order", 0];
            $customerData[] = ["Multiple Orders", 0];
        }

        return Inertia::render(InertiaViews::AdminDashboard->value, [
            'totalValueYearly' => $totalValueYearly,
            'totalValueMonthly' => $totalValueMonthly,
            'currentYear' => $currentYear,
            'pastYear' => $pastYear,
            'currentMonth' => $currentMonth,
            'totalBookingsYearly' => $totalBookingsYearly,
            'activeBookingsTotal' => $activeBookingsTotal,
            'cancelBookingsTotal' => $cancelBookingsTotal,
            'salesReportData' => $salesReportData,
            'userData' => $userData,
            'customerData' => $customerData
        ]);
    }

    public function customerIndex(Request $request)
    {
        //$customers = User::all();
        $customers = User::all()->map(function ($user) {
            $bookings = Booking::where('email', $user->email)->get();
            Log::info("Bookings for user: {$user->email}", $bookings->toArray());
            $totalSpending = $bookings->sum(function ($booking) {
                return BookingItem::where('booking_id', $booking->id)->sum('price');
            });

            return [
                'id'   => $user->id,
                'email' => $user->email,
                'name' => $user->name,
                'created_at' => $user->created_at,
                'role' => $user->role,
                'spending' => $totalSpending,
            ];
        });
        return Inertia::render(InertiaViews::AdminCustomer->value, [
            'customers' => $customers
        ]);
    }
    public function customerOrder($id){
        $user = User::where("id",$id)->first();
        $bookings = Booking::where("email",$user->email)->with("items")->get();
        Log::info("bookings", [$bookings]);
        return Inertia::render(InertiaViews::AdminCustomerOrder->value, [
            'bookings' => $bookings
        ]);
    }
}
