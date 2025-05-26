<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Hotel;
use App\Models\TBOHotel;
use Inertia\Inertia;
use App\Enums\InertiaViews;
use Illuminate\Support\Facades\Log;

class HotelFrontendController extends Controller
{
    public function frontendIndex(Request $request)
    {
        $query = Hotel::query();
        if ($request->filled('location')) {
            $query->where('location', 'LIKE', '%' . $request->location . '%');
        }
        $hotels = $query->with('rooms')->get();

        $TBO_Hotel = TBOHotel::paginate(25);

        return Inertia::render(InertiaViews::HotelIndex->value, [
            'hotels' => $hotels,
            'TBO_Hotel' => $TBO_Hotel,
        ]);
    }
    public function featured(Request $request)
    {
        $limit = $request->input('limit', 4);
        $hotels = Hotel::with('rooms')->limit($limit)->get();
        return response()->json($hotels);
    }

    public function getRooms(Request $request)
    {
        $hotelId = $request->input('hotel_id');
        $rooms = Hotel::findOrFail($hotelId)->rooms;

        return response()->json($rooms);
    }
}
