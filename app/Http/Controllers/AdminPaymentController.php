<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Enums\InertiaViews;
use Illuminate\Http\Request;
use App\Models\Payment;
use App\Models\Booking;
use Carbon\Carbon;

class AdminPaymentController extends Controller
{
    public function index()
    {
        $payments = Payment::with('booking')->get();

        $currentMonth = Carbon::now()->format('Y-m');
        $previousMonth = Carbon::now()->subMonth()->format('Y-m');

        $currentMonthTotal = Payment::whereYear('created_at', Carbon::now()->year)
            ->whereMonth('created_at', Carbon::now()->month)
            ->sum('amount');

        $previousMonthTotal = Payment::whereYear('created_at', Carbon::now()->subMonth()->year)
            ->whereMonth('created_at', Carbon::now()->subMonth()->month)
            ->sum('amount');

        if ($previousMonthTotal > 0) {
            $percentageChange = (($currentMonthTotal - $previousMonthTotal) / $previousMonthTotal) * 100;
        } else {
            $percentageChange = $currentMonthTotal > 0 ? 100 : 0;
        }

        return Inertia::render(InertiaViews::AdminPayment->value, [
            'payments' => $payments,
            'current_month' => $currentMonthTotal,
            'previous_month' => $previousMonthTotal,
            'percentage_change' => round($percentageChange, 2) . '%'
        ]);
    }
}
