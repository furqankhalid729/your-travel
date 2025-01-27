<?php

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
    Route::post('/car/add-car', [CarController::class, 'store']);
});


Route::post('/hotel/hotel-booking-form', [HotelController::class, 'store']);

Route::post('/hotel/add-hotel-room', [HotelRoomController::class, 'store']);

Route::post('/tour/add-tour', [TourController::class, 'store']);
