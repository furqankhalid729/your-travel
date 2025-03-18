<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Illuminate\Support\Facades\Auth;
use App\Models\Booking;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
                'orders' => Auth::check()
                    ? Booking::where('email', Auth::user()->email)
                    ->with('items') // Load booking items
                    ->get()
                    ->map(function ($order) {
                        $order->total_price = $order->items->sum('price');
                        $order->related_object = null;
                        $order->first_image = null;

                        if ($order->type == 'car') {
                            $order->related_object = \App\Models\Car::find($order->booking_id);
                        } elseif ($order->type == 'tour') {
                            $order->related_object = \App\Models\Tour::find($order->booking_id);
                        } elseif ($order->type == 'hotel') {
                            $order->related_object = \App\Models\Hotel::find($order->booking_id);
                        }

                        return $order;
                    })
                    : [],
            ],
            'flash' => [
                'success' => session('success'),
                'error' => session('error'),
            ],
        ];
    }
}
