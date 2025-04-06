<?php

namespace App\Http\Controllers;

use App\Models\Tour;
use App\Enums\InertiaViews;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Models\Booking;
use App\Models\Car;

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
            ->select('bookings.id as MainID', 'bookings.*', 'booking_items.*')
            ->get();
        return Inertia::render(InertiaViews::TourDashboard->value, [
            'allBooking' => $allBooking
        ]);
    }

    public function create()
    {
        $cars = Car::all();
        return Inertia::render(InertiaViews::AddTour->value, [
            'cars' => $cars,
        ]);
    }

    public function store(Request $request)
    {
        Log::info("Tour Request", [$request->all()]);
        $facilities = json_decode($request->facilities, true);
        $request->merge(['facilities' => $facilities]);

        // $tourImages = json_decode($request->tour_images, true);
        // $request->merge(['tour_images' => $tourImages]);

        $tour_itinerary = json_decode($request->tour_itinerary, true);
        $request->merge(['tour_itinerary' => $tour_itinerary]);
        $validated = $request->validate([
            'name' => 'required|string',
            'duration' => 'required|string',
            'location' => 'nullable|string',
            'food' => 'nullable|string',
            'tour_type' => 'nullable|string',
            'persons' => 'required|integer',
            'price' => 'required|numeric',

            'tour_images' => 'required|array',
            'tour_images.*.file' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',

            'summary' => 'required|string',
            'facilities' => 'required|array',
            'includedExcludedTypes' => 'required',
            'condition' => 'required|string',
            'tour_itinerary' => 'required|array',
            'tour_itinerary.*.file' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',

            'slots' => 'nullable|string',
            'keywords' => 'nullable|string',
            'transport_time' => 'nullable|string',
            'transport_provider' => 'nullable|string',
            'start_location' => 'nullable|string',
            'end_location' => 'nullable|string',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date',
            'estimated_time' => 'nullable|string',

            'adults' => 'nullable|integer',
            'adult_cost' => 'nullable|numeric',
            'adult_margin' => 'nullable|numeric',
            'adult_total_price' => 'nullable|numeric',

            'children' => 'nullable|integer',
            'child_cost' => 'nullable|numeric',
            'child_margin' => 'nullable|numeric',
            'child_total_price' => 'nullable|numeric',
        ]);

        $tourImages = [];
        if ($request->has('tour_images') && !empty($request->file('tour_images'))) {
            foreach ($request->file('tour_images') as $tourImage) {
                if ($tourImage instanceof \Illuminate\Http\UploadedFile) {
                    $path = $tourImage->store('images/Tour');
                    $tourImages[] = $path;
                } else {
                    Log::error('Not an instance of UploadedFile:', ['file' => $tourImage['file']]);
                }
            }
        }

        $tourItinerary = [];
        foreach ($request->tour_itinerary as $index => $itinerary) {
            $imagePath = null;
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

    public function tourBooking(Request $request, $id)
    {
        $booking = Booking::where("id", $id)
            ->with("items")

            ->first();

        if (!$booking)
            return;

        $tour_id = 0;
        foreach ($booking->items as $item) {
            $note = json_decode($item->additional_info, true);

            if ($item->type == "tour")
                if (isset($note['tour_id'])) {
                    $tour_id = $note['tour_id'];
                }
        }
        Log::info("tour_id", [$tour_id]);
        $tour = Tour::where("id", $tour_id)->first();
        if (!$tour)
            return;

        return Inertia::render(InertiaViews::TourBookingDetail->value, [
            'booking' => $booking,
            'tour' => $tour
        ]);
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
