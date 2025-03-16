<?php

namespace App\Http\Controllers;

use App\Models\Tour;
use App\Enums\InertiaViews;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Models\Booking;

class TourController extends Controller
{
    public function index()
    {
        $tours = Tour::all();
        return Inertia::render(InertiaViews::TourIndex->value, [
            'tours' => $tours,
        ]);
    }

    public function tourDashboard()
    {
        $allBooking = Booking::where('status', 'active')
            ->join('booking_items', 'bookings.id', '=', 'booking_items.booking_id')
            ->where('booking_items.type', 'tour')
            ->get();
        return Inertia::render(InertiaViews::TourDashboard->value, [
            'allBooking' => $allBooking
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'duration' => 'required|string',
            'location' => 'required|string',
            'food' => 'required|string',
            'tour_type' => 'required|string',
            'persons' => 'required|integer',
            'price' => 'required|numeric',

            'tour_images' => 'required|array',
            'tour_images.*.file' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',

            'summary' => 'required|string',
            'facilities' => 'required|array',
            'includedExcludedTypes' => 'required|array',
            'condition' => 'required|string',
            'tour_itinerary' => 'required|array',
            'tour_itinerary.*.file' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $tourImages = [];
        if ($request->has('tour_images') && !empty($request->file('tour_images'))) {
            foreach ($request->file('tour_images') as $tourImage) {
                if (isset($tourImage['file']) && $tourImage['file'] instanceof \Illuminate\Http\UploadedFile) {
                    $path = $tourImage['file']->store('images/Tour');
                    $tourImages[] = $path;
                } else {
                    Log::error('Not an instance of UploadedFile:', ['file' => $tourImage['file']]);
                }
            }
        }

        $tourItinerary = [];
        foreach ($request->tour_itinerary as $index => $itinerary) {
            $imagePath = null;
            Log::info("image check",[$itinerary]);
            if ($request->hasFile("tour_itinerary.$index.image")) {
                $imagePath = $request->file("tour_itinerary.$index.image")->store('images/TourItinerary');
            }

            $tourItinerary[] = [
                'day' => $itinerary['day'],
                'image' => $imagePath,
            ];
        }


        $tour = Tour::create([
            ...$validated,
            'tour_images' => json_encode($tourImages),
            'tour_itinerary' => json_encode($tourItinerary),
        ]);
        return response()->json("Success");
        //return redirect()->route('tour.index')->with('success', 'Tour Added successfully');
    }

    public function destroy(string $id)
    {
        $tour = Tour::find($id);
        if (!$tour) {
            return response()->json(['message' => 'Tour room not found.'], 404);
        }
        $tour->delete();
        return response()->json(['message' => 'Tour room deleted successfully.'], 200);
    }
}
