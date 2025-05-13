<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class TboService
{
    public static function getHotelDetails($code)
    {
        $response = Http::withBasicAuth(
            env('TBO_USER_NAME'),
            env('TBO_USER_PASSWORD')
        )->post(env("TBO_BASE_URL") . '/HotelDetails', [
            'Hotelcodes' => $code,
            "Language" => "EN"
        ]);

        if ($response->successful()) {
            return $response->json();
        }

        return null;
    }
    public static function getAllHotelCodes()
    {
        $response = Http::withBasicAuth(
            env('TBO_USER_NAME'),
            env('TBO_USER_PASSWORD')
        )->get(env("TBO_BASE_URL") . '/hotelcodelist');

        if ($response->successful()) {
            $data = $response->json();
            return $data['HotelCodes'] ?? [];
        }

        \Log::error("Failed to fetch hotel codes: " . $response->body());
        return [];
    }
}
