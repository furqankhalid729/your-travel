<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\SuperchatService;
use App\Models\Driver;
use App\Models\BookingItem;
use Illuminate\Support\Facades\Log;

class WhatsAppController extends Controller
{
    protected $superchatService;

    public function __construct(SuperchatService $superchatService)
    {
        $this->superchatService = $superchatService;
    }

    public function sendRiderMessage($booking, $driverID, $price)
    {
        $driver = Driver::where("id", $driverID)->first();
        if (!$driver) {
            return;
        }
        $bookingItem = BookingItem::where('booking_id', $booking->id)
            ->where('type', 'car')
            ->first();
        
        if(!$bookingItem){
            return;
        }
        $additionalInfo = json_decode($bookingItem->additional_info, true);
        $phoneNumber = $driver->contact_no;
        $templateId = 'tn_6CtZc3mihxwCPSQ3YRhHd';
        $variables = [$booking->first_name, $booking->last_name, $additionalInfo['pickup_location'], $additionalInfo['dropout_location'], $additionalInfo['pickup_date'], 'Test', $price, 'Test'];

        $response = $this->superchatService->sendWhatsAppMessage($phoneNumber, $templateId, $variables);
        Log::info("WhatsAPP Response", [$response]);
        return response()->json($response);
    }
}
