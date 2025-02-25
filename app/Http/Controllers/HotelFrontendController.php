<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Hotel;
use Inertia\Inertia;
use App\Enums\InertiaViews;
use Illuminate\Support\Facades\Log;

class HotelFrontendController extends Controller
{
    public function frontendIndex()
    {
        $hotels = Hotel::with('rooms')->get();
        return Inertia::render(InertiaViews::HotelIndex->value, [
            'hotels' => $hotels,
        ]);
    }
    public function featured(Request $request)
    {
        $limit = $request->input('limit', 4);
        $hotels = Hotel::with('rooms')->limit($limit)->get();
        return response()->json($hotels);
    }
}
