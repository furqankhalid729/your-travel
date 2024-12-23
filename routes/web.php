<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia; 

Route::get('/', function () {
    return Inertia::render('User/Home');
});

Route::get('/about', function () {
    return Inertia::render('User/About');
});

Route::get('/car', function () {
    return Inertia::render('User/CarPrimary');
});

Route::get('/test-1', function () {
    return Inertia::render('Test1');
});