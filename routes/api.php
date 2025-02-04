<?php

use App\Http\Controllers\DriverController;
use App\Http\Controllers\HotelRoomController;
use App\Http\Controllers\TourController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CarController;
use App\Http\Controllers\HotelController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::middleware('auth')->group(function () {
    Route::post('/car/add-car', [CarController::class, 'store'])->name('car.add');
    Route::delete('/car/delete/{id}', [CarController::class, 'destroy'])->name('car.delete');
    Route::post('/driver/add-driver', [DriverController::class, 'store'])->name('driver.store');
    Route::delete('/driver/delete/{id}', [DriverController::class, 'destroy'])->name('driver.delete');
    // Route::put('/driver/update/{driver}', [DriverController::class, 'update'])->name('driver.update');
    Route::post('/hotel/add-hotel-room', [HotelRoomController::class, 'store'])->name('hotelRoom.store');
});

Route::post('/hotel/hotel-booking-form', [HotelController::class, 'store'])->name('hotel.store');
Route::post('/tour/add-tour', [TourController::class, 'store']);

