<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Enums\InertiaViews;
use App\Models\Driver;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class DriverController extends Controller
{
    public function index(Request $request)
    {
        $drivers = Driver::all();
        return Inertia::render(InertiaViews::DriverIndex->value, [
            'drivers' => $drivers,
        ]);
    }

    public function create(Request $request)
    {
        return Inertia::render(InertiaViews::AddDriver->value);
    }

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
            'status' => 'required|in:active,disabled',
        ]);

        // Handle file upload
        if ($request->hasFile('profile_image.file')) {
            $file = $request->file('profile_image.file');
            $path = $file->store('profile_images', 'public');
            $validatedData['profile_image'] = $path;
        }
        Log::info($validatedData);
        // Save to database
        $driver = Driver::create($validatedData);

        return response()->json([
            'message' => 'Driver added successfully!',
            'driver' => $driver,
        ], 201);
    }

    public function destroy(string $id)
    {
        $driver = Driver::find($id);
        if (!$driver) {
            return response()->json(['message' => 'Driver not found.'], 404);
        }
        $driver->delete();
        return response()->json(['message' => 'Driver deleted successfully.'], 200);
    }
}
