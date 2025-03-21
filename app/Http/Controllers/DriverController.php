<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Enums\InertiaViews;
use App\Models\Driver;
use App\Models\Car;
use App\Models\Booking;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Response;

class DriverController extends Controller
{
    public function index(Request $request)
    {
        $carCount = Car::count();
        $driverCount = Driver::count();
        $activeBookingsTotal = Booking::where('status', 'active')
            ->whereHas('items', function ($query) {
                $query->where('type', 'car');
            })
            ->count();
        $drivers = Driver::all();
        return Inertia::render(InertiaViews::DriverIndex->value, [
            'drivers' => $drivers,
            'carCount' => $carCount,
            'driverCount' => $driverCount,
            'activeBookingsTotal' => $activeBookingsTotal
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
        return redirect()->route('driver.index')
        ->with('success', 'Driver added successfully!');
    }

    public function edit(string $id)
    {
        $driver = Driver::find($id);

        if (!$driver) {
            return redirect()->back()->withErrors(['error' => 'Driver not found!']);
        }
        $cars = Car::all();
        return Inertia::render(InertiaViews::EditDriver->value, [
            'driver' => $driver,
            'cars' => $cars
        ]);

    }

    public function update(Request $request, string $id)
    {
        Log::info($request->all());
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
            'profile_image.file' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'status' => 'required|in:active,disabled',
            'car_id' => 'nullable'
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
            'car_id' => $validatedData['car_id'],
        ]);

        
        // Redirect with success message
        return redirect()->route('driver.index')->with('success', 'Driver updated successfully!');
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
