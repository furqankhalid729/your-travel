<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia; 

Route::get('/', function () {
    return Inertia::render('User/Home');
});

Route::get('/about', function () {
    return Inertia::render('User/About');
});

Route::get('/carprimary', function () {
    return Inertia::render('User/CarPrimary');
});

Route::get('/signup', function () {
    return Inertia::render('User/SignUp');
});

Route::get('/blog', function () {
    return Inertia::render('User/Blog');
});

Route::get('/blog/:id', function () {
    return Inertia::render('User/BlogDetail');
});

Route::get('/contact', function () {
    return Inertia::render('User/Contact');
});

Route::get('/hotel', function () {
    return Inertia::render('User/Hotel');
});

Route::get('/room', function () {
    return Inertia::render('User/HotelRoom');
});

Route::get('/career', function () {
    return Inertia::render('User/Career');
});

Route::get('/profile', function () {
    return Inertia::render('User/Profile');
});

Route::get('/tour', function () {
    return Inertia::render('User/Tour');
});

Route::get('/car', function () {
    return Inertia::render('User/Car');
});

Route::get('/car-detail', function () {
    return Inertia::render('User/CarDetail');
});

Route::get('/car-booking', function () {
    return Inertia::render('User/CarBook');
});

Route::get('/tour-pkg', function () {
    return Inertia::render('User/TourPKG');
});

Route::get('/test-1', function () {
    return Inertia::render('Test1');
});