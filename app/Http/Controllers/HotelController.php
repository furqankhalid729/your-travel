<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Hotel;

class HotelController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'email_verified' => 'required|boolean',
            'phoneNo' => 'required|string|max:20',
            'phoneNo_verified' => 'required|boolean',
            'identityNo' => 'required|string|max:50',
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
            'phone_no' => $validatedData['phoneNo'],
            'phone_no_verified' => $validatedData['phoneNo_verified'],
            'identity_no' => $validatedData['identityNo'],
            'gender' => $validatedData['gender'],
            'from_date' => $validatedData['from_date'],
            'to_date' => $validatedData['to_date'],
            'duration' => $validatedData['duration'],
            'tour_location' => $validatedData['tour_location'],
            'no_of_member' => $validatedData['no_of_member'],
            'price' => $validatedData['price'],
        ]);

        return response()->json(['message' => 'Hotel booking saved successfully'], 201);
    }
}
