<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tour;
use Inertia\Inertia;
use App\Enums\InertiaViews;
use Illuminate\Support\Facades\Log;

class TourFrontendController extends Controller
{
    public function frontendIndex()
    {
        $tours = Tour::all();
        return Inertia::render(InertiaViews::TourIndexFrontend->value, [
            'tours' => $tours,
        ]);
    }
    public function featured(Request $request)
    {
        $limit = $request->input('limit', 4);
        $tours = Tour::limit($limit)->get();
        return response()->json($tours);
    }
    public function show($id)
    {
        $tour = Tour::findOrFail($id);
        return Inertia::render(InertiaViews::TourDetail->value, [
            'tour' => $tour,
        ]);
    }
}
