<?php

use App\Http\Controllers\DriverController;
use App\Http\Controllers\HotelRoomController;
use App\Http\Controllers\TourController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CarController;
use App\Http\Controllers\HotelController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\HotelFrontendController;
use App\Http\Controllers\TourFrontendController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\EnquiryController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::middleware('auth')->group(function () {
    Route::post('/car/add-car', [CarController::class, 'store'])->name('car.add');
    Route::delete('/car/delete/{id}', [CarController::class, 'destroy'])->name('car.delete');
    Route::post('/driver/add-driver', [DriverController::class, 'store'])->name('driver.store');
    Route::post('/driver/assign-driver', [CarController::class, 'saveRider'])->name('driver.assign');
    Route::delete('/driver/delete/{id}', [DriverController::class, 'destroy'])->name('driver.delete');
    Route::post('/hotel/add-hotel-room', [HotelRoomController::class, 'store'])->name('hotelRoom.store');
    Route::delete('/hotel/delete/{id}', [HotelRoomController::class, 'destroy'])->name('hotelRoom.delete');
    Route::post('/tour/add-tour', [TourController::class, 'store']);
    Route::delete('/tour/delete/{id}', [TourController::class, 'destroy'])->name('tour.delete');
});
Route::get('/locations', [LocationController::class, 'getGoogleMapSuggestions']);
Route::get('/location-images', [LocationController::class, 'getLocationImages']);
Route::post('/hotel/hotel-booking-form', [HotelController::class, 'store'])->name('hotel.store');
Route::get('/cars/home/featured', [CarController::class, 'featured'])->name('cars.featured');
Route::get('/cars/filter', [CarController::class, 'filter'])->name('cars.filter');
Route::get('/cars/car-details/{id}', [CarController::class, 'show'])->name('cars.show');
Route::get('/hotel/home/featured', [HotelFrontendController::class, 'featured'])->name('hotel.featured');
Route::get('/tour/home/featured', [TourFrontendController::class, 'featured'])->name('tour.featured');
Route::post('/add/booking', [BookingController::class, 'booking'])->name('booking');
Route::post('/contact', [EnquiryController::class , 'store'])->name('contact.store');
