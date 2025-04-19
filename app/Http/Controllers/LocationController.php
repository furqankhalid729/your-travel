<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;

class LocationController extends Controller
{
    public function getGoogleMapSuggestions(Request $request)
    {
        $request->validate([
            'q' => 'required|string|min:1|max:255'
        ]);
        $query = $request->query('q');
        $suggestions = Cache::remember("locations_suggestions_{$query}", 3600, function () use ($query) {
            $apiKey = env('GOOGLE_MAPS_API_KEY');
            $url = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';

            $response = Http::get($url, [
                'input' => $query,
                'key' => $apiKey,
                //'types' => 'geocode'
            ]);

            if ($response->successful()) {
                $data = $response->json();
                if (isset($data['predictions'])) {
                    $places = array_map(function ($prediction) {
                        return [
                            'description' => $prediction['description'],
                            'place_id' => $prediction['place_id'],
                        ];
                    }, $data['predictions']);

                    return response()->json(['places' => $places]);
                }
            }

            return [];
        });

        return response()->json($suggestions);
    }

    public function getLocationImages(Request $request)
    {
        $placeId = $request->query('placeId');

        if ($placeId == null) {
            return response()->json(['photos' => []]);
        }

        $apiKey = env('GOOGLE_MAPS_API_KEY');

        $response = Http::get("https://maps.googleapis.com/maps/api/place/details/json", [
            'placeid' => $placeId,
            'fields' => 'photos',
            'key' => $apiKey,
        ]);

        $data = $response->json();
        Log::info("Images", [$data, $placeId]);
        if (isset($data['result']['photos'])) {
            $photos = $data['result']['photos'];
            $photoUrls = array_map(function ($photo) use ($apiKey) {
                return "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference={$photo['photo_reference']}&key={$apiKey}";
            }, $photos);

            return response()->json(['photos' => $photoUrls]);
        }
        return response()->json(['photos' => []]);
    }

    public function getDistance(Request $request)
    {
        $origin = $request->input('origin', 'Lahore, Pakistan');
        $destination = $request->input('destination', 'Murree, Pakistan');
        $apiKey = env('GOOGLE_MAPS_API_KEY');

        $response = Http::get("https://maps.googleapis.com/maps/api/distancematrix/json", [
            'origins' => $origin,
            'destinations' => $destination,
            'key' => $apiKey,
        ]);

        return response()->json($response->json());
    }

    public function getCordinates(Request $request)
    {
        $address = $request->input('address');

        if (!$address) {
            return response()->json(['error' => 'Address is required'], 400);
        }
        $apiKey = env('GOOGLE_MAPS_API_KEY');
        $response = Http::get("https://maps.googleapis.com/maps/api/geocode/json", [
            'address' => $address,
            'key' => $apiKey,
        ]);

        $data = $response->json();
        Log::info("Cordinates", [$data]);
        if (!isset($data['results'][0])) {
            return response()->json(['error' => 'Location not found'], 404);
        }
        $location = $data['results'][0]['geometry']['location'];
        return response()->json([
            'lat' => $location['lat'],
            'lng' => $location['lng'],
        ]);
    }
}
