<?php

namespace App\Http\Controllers;

use App\Models\Driver;
use Illuminate\Http\Request;

class DriverController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'identity_no' => 'required|string|max:255|unique:drivers',
            'email' => 'required|email|unique:drivers',
            'gender' => 'required|in:male,female,other',
            'contact_no' => 'required|string|max:15',
            'license_no' => 'required|string|max:255',
            'license_category' => 'required|string|max:255',
            'experience' => 'required|string|max:255',
            'profile_image.file' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        // Handle file upload
        if ($request->hasFile('profile_image.file')) {
            $file = $request->file('profile_image.file');
            $path = $file->store('profile_images', 'public'); // Store in 'storage/app/public/profile_images'
            $validatedData['profile_image'] = $path; // Save the file path in the database
        }

        // Save to database
        $driver = Driver::create($validatedData);

        return response()->json([
            'message' => 'Driver added successfully!',
            'driver' => $driver,
        ], 201);
    }
}
