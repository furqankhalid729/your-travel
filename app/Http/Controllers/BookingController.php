<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Enums\InertiaViews;
use App\Models\Booking;
use App\Models\BookingItem;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;

class BookingController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render(InertiaViews::Checkout->value);
    }
    public function booking(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'first_name'            => 'required|string|max:255',
            'last_name'             => 'required|string|max:255',
            'email'                 => 'required|email|max:255',
            'phone_number'          => 'nullable|string|max:255',
            'gender'                => 'required|in:male,female,other',
            'identification_number'             => 'nullable|string|max:255',
            'address'               => 'required|string|max:255',
            'city'                  => 'required|string|max:255',
            'postal_code'           => 'required|string|max:10',
            'country'               => 'required|string|max:255',
            'payment_id'            => 'required|string|max:255',
            'bookings'                 => 'required|array|min:1',
            'items.*.name'          => 'required|string|max:255',
            'items.*.price'         => 'required|numeric|min:0',
            'items.*.additional_info' => 'nullable|array',
        ]);

        // If validation fails, return errors
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation failed',
                'errors'  => $validator->errors(),
            ], 422);
        }

        // Create a new booking
        $booking = Booking::create([
            'first_name'            => $request->first_name,
            'last_name'             => $request->last_name,
            'email'                 => $request->email,
            'gender'                => $request->gender,
            'identification_number' => $request->identification_number,
            'address'               => $request->address,
            'city'                  => $request->city,
            'postal_code'           => $request->postal_code,
            'country'               => $request->country,
            'payment_id'            => $request->payment_id,
        ]);

        foreach ($request->bookings as $item) {
            BookingItem::create([
                'booking_id'      => $booking->id,
                'name'            => $item['name'],
                'price'           => $item['price'],
                'additional_info' => json_encode($item['additional_info'] ?? []),
            ]);
        }

        return response()->json([
            'message' => 'Booking created successfully',
            'booking' => $booking->load('items'),
        ], 201);
    }
}
