<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia; 

// User Routes

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



// Admin Routes

Route::get('/login', function () {
    return Inertia::render('Admin/Login');
});

Route::get('/dashlayout', function () {
    return Inertia::render('Admin/DashLayout');
});

Route::get('/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
});


// Car booking

Route::get('/dashboard/car-booking', function () {
    return Inertia::render('Admin/CarBooking/CarBookDash');
});

Route::get('/dashboard/car-booking/driver-listing', function () {
    return Inertia::render('Admin/CarBooking/DriverListing');
});

Route::get('/dashboard/car-booking/orders', function () {
    return Inertia::render('Admin/CarBooking/Orders');
});

Route::get('/dashboard/car-booking/special-offers', function () {
    return Inertia::render('Admin/CarBooking/Specialoffers');
});

Route::get('/dashboard/car-booking/add-car', function () {
    return Inertia::render('Admin/CarBooking/AddCar');
});

Route::get('/dashboard/car-booking/view-car', function () {
    return Inertia::render('Admin/CarBooking/ViewCar');
});

Route::get('/dashboard/car-booking/cars-collection', function () {
    return Inertia::render('Admin/CarBooking/CarsCollection');
});

Route::get('/dashboard/car-booking/driver-profile', function () {
    return Inertia::render('Admin/CarBooking/DriverProfile');
});

Route::get('/dashboard/car-booking/assign-drivers', function () {
    return Inertia::render('Admin/CarBooking/AssignDrivers');
});

Route::get('/dashboard/car-booking/book-ride-assign-drivers', function () {
    return Inertia::render('Admin/CarBooking/BookRideAssignDrivers');
});

Route::get('/dashboard/car-booking/book-car-assign-drivers', function () {
    return Inertia::render('Admin/CarBooking/BookCarAssignDrivers');
});

// hotel booking

Route::get('/dashboard/hotel-booking', function () {
    return Inertia::render('Admin/HotelBooking/HotelBooking');
});

Route::get('/dashboard/hotel-booking/all-hotels', function () {
    return Inertia::render('Admin/HotelBooking/AllHotels');
});

Route::get('/dashboard/hotel-booking/hotel-booking-form', function () {
    return Inertia::render('Admin/HotelBooking/HotelBookingForm');
});

Route::get('/dashboard/hotel-booking/hotel-booking-profile', function () {
    return Inertia::render('Admin/HotelBooking/HotelBookingProfile');
});

Route::get('/dashboard/hotel-booking/all-hotel-booking', function () {
    return Inertia::render('Admin/HotelBooking/AllHotelBooking');
});

// rooms
Route::get('/dashboard/hotel-booking/view-rooms', function () {
    return Inertia::render('Admin/HotelBooking/ViewRooms');
});

Route::get('/dashboard/hotel-booking/add-hotel-room', function () {
    return Inertia::render('Admin/HotelBooking/AddHotelRoom');
});


// Tour Booking


Route::get('/dashboard/tour-booking', function () {
    return Inertia::render('Admin/TourBooking/ViewTourBooking');
});

Route::get('/dashboard/tour-booking/view-location', function () {
    return Inertia::render('Admin/TourBooking/TourViewLocation');
});

Route::get('/dashboard/tour-booking/view-tour', function () {
    return Inertia::render('Admin/TourBooking/ViewTour');
});

Route::get('/dashboard/tour-booking/add-tour-booking', function () {
    return Inertia::render('Admin/TourBooking/AddTourBooking');
});

Route::get('/dashboard/tour-booking/profile', function () {
    return Inertia::render('Admin/TourBooking/TourBookingProfile');
});

Route::get('/dashboard/tour-booking/add-tour', function () {
    return Inertia::render('Admin/TourBooking/AddTour');
});

Route::get('/dashboard/tour-booking/tour-draft', function () {
    return Inertia::render('Admin/TourBooking/TourDraftPage');
});

// steps

Route::get('/dashboard/tour-booking/steps', function () {
    return Inertia::render('Admin/TourBooking/TourBookingSteps');
});

Route::get('/dashboard/tour-booking/steps/tour-book-details', function () {
    return Inertia::render('Admin/TourBooking/TourBookingDetails');
});

Route::get('/dashboard/tour-booking/steps/planner', function () {
    return Inertia::render('Admin/TourBooking/TourBookingPlanner');
});

Route::get('/dashboard/tour-booking/steps/timeline', function () {
    return Inertia::render('Admin/TourBooking/TourBookingTimeline');
});

Route::get('/dashboard/tour-booking/steps/pricing', function () {
    return Inertia::render('Admin/TourBooking/TourBookingPricing');
});


// dashboard/pages

Route::get('/dashboard/drafts', function () {
    return Inertia::render('Admin/Drafts');
});

Route::get('/dashboard/customers', function () {
    return Inertia::render('Admin/Customers');
});

Route::get('/dashboard/enquiries', function () {
    return Inertia::render('Admin/Enquiries');
});

Route::get('/dashboard/enquiries/details', function () {
    return Inertia::render('Admin/EnquiriesDetails');
});

Route::get('/dashboard/payments', function () {
    return Inertia::render('Admin/Payments');
});

Route::get('/dashboard/transaction', function () {
    return Inertia::render('Admin/Transaction');
});


Route::get('/dashboard/reports', function () {
    return Inertia::render('Admin/Reports');
});

// Settings

Route::get('/dashboard/settings', function () {
    return Inertia::render('Admin/Settings/Settings');
});

Route::get('/dashboard/settings/general', function () {
    return Inertia::render('Admin/Settings/General');
});

Route::get('/dashboard/settings/security', function () {
    return Inertia::render('Admin/Settings/Security');
});

