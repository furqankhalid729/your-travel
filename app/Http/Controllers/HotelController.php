<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Enums\InertiaViews;
use Illuminate\Http\Request;
use App\Models\Hotel;

class HotelController extends Controller
{
    public function create(Request $request)
    {
        return Inertia::render(InertiaViews::HotelCreate->value);
    }
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'email_verified' => 'required|boolean',
            'phone_no' => 'required|string|max:20',
            'phone_no_verified' => 'required|boolean',
            'identity_no' => 'required|string|max:50',
            'gender' => 'required|in:Male,Female,Other',
            'from_date' => 'required|date',
            'to_date' => 'required|date|after:from_date',
            'duration' => 'required|string|max:50',
            'tour_location' => 'required|string|max:255',
            'no_of_member' => 'required|integer',
            'price' => 'required|numeric|min:0',
        ]);

        Hotel::create([
            'first_name' => $validatedData['first_name'],
            'last_name' => $validatedData['last_name'],
            'email' => $validatedData['email'],
            'email_verified' => $validatedData['email_verified'],
            'phone_no' => $validatedData['phone_no'],
            'phone_no_verified' => $validatedData['phone_no_verified'],
            'identity_no' => $validatedData['identity_no'],
            'gender' => $validatedData['gender'],
            'from_date' => $validatedData['from_date'],
            'to_date' => $validatedData['to_date'],
            'duration' => $validatedData['duration'],
            'tour_location' => $validatedData['tour_location'],
            'no_of_member' => $validatedData['no_of_member'],
            'price' => $validatedData['price'],
        ]);

        return redirect()->route('hotel.index')->with('success', 'Booking created successfully!');
    }
}
