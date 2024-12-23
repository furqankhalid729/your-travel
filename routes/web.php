<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia; 

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/test-1', function () {
    return Inertia::render('Test1');
});