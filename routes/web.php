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

Route::get('/test-1', function () {
    return Inertia::render('Test1');
});