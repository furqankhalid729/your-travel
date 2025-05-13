<?php
namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Jobs\FetchHotelDataJob;
use App\Services\TboService;
use Illuminate\Support\Facades\Log;

class SyncTboHotels extends Command
{
    protected $signature = 'tbo:sync-hotels';
    protected $description = 'Sync all hotels from TBO API and store details';

    public function handle()
    {
        $this->info("Fetching hotel codes from TBO...");

        $hotelCodes = TboService::getAllHotelCodes(); // This method must be implemented

        if (!$hotelCodes || !is_array($hotelCodes)) {
            $this->error("Failed to fetch hotel codes.");
            return;
        }

        $this->info("Found " . count($hotelCodes) . " hotel codes. Dispatching jobs...");

        foreach ($hotelCodes as $code) {
            //FetchHotelDataJob::dispatch($code);
            Log::info("Dispatching job for hotel code: {$code}");
            dispatch(new FetchHotelDataJob($code));
        }

        $this->info("All jobs dispatched.");
    }
}
