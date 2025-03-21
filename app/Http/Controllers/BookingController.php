<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Enums\InertiaViews;
use App\Models\Booking;
use App\Models\BookingItem;
use App\Models\Payment;
use App\Models\Transaction;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

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

        DB::beginTransaction();

        try {
            // Create Booking
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

            $totalAmount = 0;

            foreach ($request->bookings as $item) {
                BookingItem::create([
                    'booking_id'      => $booking->id,
                    'name'            => $item['name'],
                    'price'           => $item['price'],
                    'type'            => $item['type'],
                    'additional_info' => json_encode($item['additional_info'] ?? []),
                ]);

                $totalAmount += $item['price']; // Calculate total price
            }

            $payment = Payment::create([
                'booking_id' => $booking->id,
                'amount'     => $totalAmount,
                'status'     => 'received',
                'note'       => ['payment_method' => $request->payment_method ?? 'unknown'],
            ]);

            Transaction::create([
                'payment_id' => $payment->id,
                'type'       => 'received',
                'amount'     => $totalAmount,
                'note'       => ['received_from' => $request->email],
            ]);

            DB::commit();

            return response()->json([
                'message'  => 'Booking successfully created.',
                'booking'  => $booking,
                'payment'  => $payment,
                'transactions' => $payment->transactions,
            ], 201);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return response()->json([
            'message' => 'Booking created successfully',
            'booking' => $booking->load('items'),
        ], 201);
    }
}
