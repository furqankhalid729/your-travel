<?php
namespace App\Jobs;

use App\Models\TBOHotel;
use App\Services\TboService;
use Illuminate\Bus\Queueable;
use Illuminate\Support\Facades\Log;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class FetchHotelDataJob implements ShouldQueue
{
    use InteractsWithQueue, Queueable, SerializesModels;

    public $hotelCode;

    public function __construct($hotelCode)
    {
        $this->hotelCode = $hotelCode;
    }

    public function handle()
    {
        $data = TboService::getHotelDetails($this->hotelCode);
        if ($data) {
            TBOHotel::updateOrCreate(
                ['hotel_code' => $this->hotelCode],
                ['data' => json_encode($data), 'fetched_at' => now()]
            );
            Log::info("Hotel data fetched and stored for code: {$this->hotelCode}");
        } else {
            Log::warning("Hotel data fetch failed for code: {$this->hotelCode}");
        }
    }
}
