<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\BrevoService;
use Illuminate\Support\Facades\Log;
use App\Models\Booking;
use App\Models\BookingItem;

class EmailController extends Controller
{
    protected $brevoService;

    public function __construct(BrevoService $brevoService)
    {
        $this->brevoService = $brevoService;
    }

    public function sendOrderConformationMail($booking)
    {
        $booking = Booking::with('items')->findOrFail($booking->id);
        Log::info($booking);
        $to = $booking->email;
        $templateId = 1;
        $hotelDisplay = 'none!important';
        $carDisplay = 'none!important';
        $tourDisplay = 'none!important';

        $hotelName = $checkinDate = $checkoutDate = $guests = $amount = '';
        $carModel = $pickupDate = $dropoffDate = $pickupLocation = $carAmount = '';
        $tourName = $tourDate = $tourDuration = $people = $tourAmount = '';

        foreach ($booking->items as $item) {
            $additionalInfo = json_decode($item->additional_info, true);
            if ($item->type === 'hotel') {
                $hotelDisplay = 'block!important';
                $hotelName = $item->name;
                $checkinDate = $additionalInfo['checkin_date'] ?? '';
                $checkoutDate = $additionalInfo['checkout_date'] ?? '';
                $guests = $additionalInfo['guests'] ?? '';
                $amount = $item->price;
            } elseif ($item->type === 'car') {
                $carDisplay = 'block!important';
                $carModel = $item->name;
                $pickupDate = $additionalInfo['pickup_date'] ?? '';
                $dropoffDate = $additionalInfo['dropoff_date'] ?? '';
                $pickupLocation = $additionalInfo['pickup_location'] ?? '';
                $carAmount = $item->price;
            } elseif ($item->type === 'tour') {
                $tourDisplay = 'block!important';
                $tourName = $item->name;
                $tourDate = $additionalInfo['tour_date'] ?? '';
                $tourDuration = $additionalInfo['duration'] ?? '';
                $people = $additionalInfo['people'] ?? '';
                $tourAmount = $item->price;
            }
        }

        $params = [
            'customer_name' => $booking->first_name,
            'customer_email' => $booking->email,
            'customer_phone' => $booking->identification_number,
            'billing_address' => $booking->address,

            // Hotel details
            'hotel_display' => $hotelDisplay,
            'hotel_name' => $hotelName,
            'checkin_date' => $checkinDate,
            'checkout_date' => $checkoutDate,
            'guests' => $guests,
            'amount' => $amount,

            // Car details
            'car_display' => $carDisplay,
            'car_model' => $carModel,
            'pickup_date' => $pickupDate,
            'dropoff_date' => $dropoffDate,
            'pickup_location' => $pickupLocation,
            'car_amount' => $carAmount,

            // Tour details
            'tour_display' => $tourDisplay,
            'tour_name' => $tourName,
            'tour_date' => $tourDate,
            'tour_duration' => $tourDuration,
            'people' => $people,
            'tour_amount' => $tourAmount
        ];

        $response = $this->brevoService->sendEmail($to, $templateId, $params);
        Log::info("Email Response", [$response]);
        return response()->json($response);
    }
}
