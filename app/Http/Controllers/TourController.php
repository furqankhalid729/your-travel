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
        $allBooking = Booking::join('booking_items', 'bookings.id', '=', 'booking_items.booking_id')
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

    public function edit($id)
    {
        $tour = Tour::where("id", $id)->first();
        $cars = Car::all();
        return Inertia::render(InertiaViews::EditTour->value, [
            'tour' => $tour,
            'cars' => $cars,
        ]);
    }

    public function store(Request $request)
    {
        $facilities = json_decode($request->facilities, true);
        $includedExcludedTypes = json_decode($request->includedExcludedTypes, true);
        $tour_itinerary = json_decode($request->tour_itinerary, true);

        $request->merge([
            'facilities' => $facilities,
            'includedExcludedTypes' => $includedExcludedTypes,
            'tour_itinerary' => $tour_itinerary,
        ]);
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
            if ($request->hasFile("tour_itinerary_images.$index")) {
                $imagePath = $request->file("tour_itinerary_images.$index")->store('images/TourItinerary', 'public');
            }

            $tourItinerary[] = [
                'day' => $itinerary['day'],
                'location' => $itinerary['location'],
                'hotel' => $itinerary['hotel'],
                'arrivalTime' => $itinerary['arrivalTime'],
                'departureTime' => $itinerary['departureTime'],
                'description' => $itinerary['description'],
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

    public function update(Request $request, $id)
    {
        $tour = Tour::findOrFail($id);

        Log::info("Tour Update Request", [$request->all()]);

        $facilities = json_decode($request->facilities, true);
        $includedExcludedTypes = json_decode($request->includedExcludedTypes, true);
        $tour_itinerary = json_decode($request->tour_itinerary, true);

        $request->merge([
            'facilities' => $facilities,
            'includedExcludedTypes' => $includedExcludedTypes,
            'tour_itinerary' => $tour_itinerary,
        ]);

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

        // Handle tour_images
        $tourImages = [];
        if ($request->has('tour_images') && !empty($request->file('tour_images'))) {
            Log::error('Found images');
            foreach ($request->file('tour_images') as $tourImage) {
                if ($tourImage instanceof \Illuminate\Http\UploadedFile) {
                    $path = $tourImage->store('images/Tour');
                    $tourImages[] = $path;
                } else {
                    Log::error('Not an instance of UploadedFile:', ['file' => $tourImage['file']]);
                }
            }
        }

        // Handle tour_itinerary
        $tourItinerary = [];
        foreach ($request->tour_itinerary as $index => $itinerary) {
            $imagePath = $itinerary['image'] ?? null;

            // If new image uploaded
            if ($request->hasFile("tour_itinerary_images.$index")) {
                $imagePath = $request->file("tour_itinerary_images.$index")->store('images/TourItinerary', 'public');
            }

            $tourItinerary[] = [
                'day' => $itinerary['day'],
                'location' => $itinerary['location'],
                'hotel' => $itinerary['hotel'],
                'arrivalTime' => $itinerary['arrivalTime'],
                'departureTime' => $itinerary['departureTime'],
                'description' => $itinerary['description'],
                'image' => $imagePath,
            ];
        }

        // Update the tour
        $tour->update([
            ...$validated,
            'tour_images' => json_encode($tourImages),
            'tour_itinerary' => json_encode($tourItinerary),
        ]);

        return response()->json("Updated Successfully");
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
