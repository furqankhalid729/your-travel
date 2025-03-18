<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Enums\InertiaViews;
use App\Models\Driver;
use App\Models\Car;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Response;

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
        $cars = Car::all();
        return Inertia::render(InertiaViews::AddDriver->value,[
            'cars' => $cars
        ]);
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
            'car_id' => 'nullable'
        ]);

        // Handle file upload
        if ($request->hasFile('profile_image.file')) {
            $file = $request->file('profile_image.file');
            $path = $file->store('profile_images', 'public');
            $validatedData['profile_image'] = $path;
        }
        Log::info($validatedData);

        $driver = Driver::create($validatedData);

        return response()->json([
            'message' => 'Driver added successfully!',
            'driver' => $driver,
        ], 201);
    }

    public function edit(string $id)
    {
        $driver = Driver::find($id);

        if (!$driver) {
            return redirect()->back()->withErrors(['error' => 'Car not found!']);
        }
        return Inertia::render(InertiaViews::EditDriver->value, [
            'driver' => $driver,
        ]);

    }

    public function update(Request $request, string $id)
    {
        // Find the driver by ID
        $driver = Driver::find($id);

        // Check if driver exists
        if (!$driver) {
            return redirect()->back()->withErrors(['error' => 'Driver not found!']);
        }

        // Validate incoming request data
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'identity_no' => 'required|string|max:255|unique:drivers,identity_no,' . $driver->id,
            'email' => 'required|email|unique:drivers,email,' . $driver->id,
            'gender' => 'required|in:male,female,other',
            'contact_no' => 'required|string|max:15',
            'license_no' => 'required|string|max:255',
            'license_category' => 'required|string|max:255',
            'experience' => 'required|string|max:255',
            'profile_image' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'status' => 'required|in:active,disabled',
        ]);

        // Handle profile image upload
        $profileImagePath = $driver->profile_image;
        if ($request->hasFile('profile_image')) {
            $file = $request->file('profile_image');
            $profileImagePath = $file->store('profile_images', 'public');
        }

        // Update the driver record
        $driver->update([
            'name' => $validatedData['name'],
            'identity_no' => $validatedData['identity_no'],
            'email' => $validatedData['email'],
            'gender' => $validatedData['gender'],
            'contact_no' => $validatedData['contact_no'],
            'license_no' => $validatedData['license_no'],
            'license_category' => $validatedData['license_category'],
            'experience' => $validatedData['experience'],
            'profile_image' => $profileImagePath,
            'status' => $validatedData['status'],
        ]);

        
        // Redirect with success message
        return redirect()->route('drivers.index')->with('success', 'Driver updated successfully!');
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $driver = Driver::find($id);
        if (!$driver) {
            return redirect()->back()->withErrors(['error' => 'Driver not found!']);
        }

        $driver->delete();
        return redirect()->route('drivers.index')->with('success', 'Driver deleted successfully!');
    }

    public function show($id){
        $driver = Driver::findOrFail($id);
        
        if (!$driver) {
            return response()->json(['error' => 'driver not found'], Response::HTTP_BAD_REQUEST);
        }
        $car = Car::where("id",$driver->car_id)->first();
        return Inertia::render(InertiaViews::ViewDriver->value, [
            'driver' => $driver,
            'car'    => $car
        ]);
    }
}
