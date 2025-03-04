<?php

use App\Http\Controllers\CarController;
use App\Http\Controllers\DriverController;
use App\Http\Controllers\HotelRoomController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\HotelBookingController;
use App\Http\Controllers\HotelController;
use App\Http\Controllers\CarFrontendController;
use App\Http\Controllers\HotelFrontendController;
use App\Http\Controllers\TourFrontendController;
use App\Http\Controllers\TourController;
use App\Models\Car\CarBrand;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// User Routes

Route::get('/', function () {
    return Inertia::render('User/Home');
});
Route::get('/car', [CarFrontendController::class, 'frontendIndex'])->name('car.frontendIndex');
Route::get('/hotel', [HotelFrontendController::class, 'frontendIndex'])->name('hotel.frontendIndex');
Route::get('/tour', [TourFrontendController::class, 'frontendIndex'])->name('tour.frontendIndex');

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


// Route::get('/room', function () {
//     return Inertia::render('User/HotelRoom');
// });
Route::get('/hotel/hotel-details/{id}', [HotelRoomController::class, 'show'])->name('hotel.show');


Route::get('/career', function () {
    return Inertia::render('User/Career');
});

Route::get('/profile', function () {
    return Inertia::render('User/Profile');
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

// Route::get('/login', function () {
//     return Inertia::render('Admin/Login');
// });

Route::middleware('auth')->group(function () {
    Route::get('/dashboard/car-booking', [CarController::class, 'index']);
    Route::get('/dashboard/car-booking/add-car', [CarController::class, 'create']);
    Route::get('/dashboard/car/edit/{id}', [CarController::class, 'edit'])->name('car.edit');

    Route::get('/dashboard/car-booking/driver-listing', [DriverController::class, 'index'])->name('driver.index');
    Route::get('/dashboard/car-booking/add-driver', [DriverController::class, 'create'])->name('driver.create');
    
    Route::get('/dashboard/car-booking/driver/edit/{id}', [DriverController::class, 'edit'])->name('driver.edit');
    Route::put('/dashboard/car-booking/driver/update/{id}', [DriverController::class, 'update'])->name('driver.update');
    
    Route::get('/dashboard/hotel-booking', [HotelBookingController::class, 'index'])->name('hotelbooking.index');

    Route::get('/dashboard/hotel/add-hotel', [HotelRoomController::class, 'create'])->name('hotel.create');
    Route::get('/dashboard/hotel/all-hotels', [HotelRoomController::class, 'index'])->name('hotel.index');
    Route::get('/dashboard/hotel/edit/{id}', [HotelRoomController::class, 'edit'])->name('hotel.edit');
    Route::put('/dashboard/hotel/update/{id}', [HotelRoomController::class, 'update'])->name('hotel.update');

    Route::get('/dashboard/tour-booking/view-tour', [TourController::class, 'index'])->name('tour.index');
    Route::get('/dashboard/tour-booking/add-tour', function () {
        return Inertia::render('Admin/TourBooking/AddTour');
    })->name("tour.create");
});

Route::get('/dashlayout', function () {
    return Inertia::render('Admin/DashLayout');
});

Route::get('/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
});


// Car booking

Route::get('/dashboard/car-booking/orders', function () {
    return Inertia::render('Admin/CarBooking/Orders');
});

Route::get('/dashboard/car-booking/special-offers', function () {
    return Inertia::render('Admin/CarBooking/Specialoffers');
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
// Tour Booking
Route::get('/dashboard/tour-booking', function () {
    return Inertia::render('Admin/TourBooking/ViewTourBooking');
});

Route::get('/dashboard/tour-booking/view-location', function () {
    return Inertia::render('Admin/TourBooking/TourViewLocation');
});

Route::get('/dashboard/tour-booking/add-tour-booking', function () {
    return Inertia::render('Admin/TourBooking/AddTourBooking');
});

Route::get('/dashboard/tour-booking/profile', function () {
    return Inertia::render('Admin/TourBooking/TourBookingProfile');
});

Route::get('/dashboard/tour-booking/tour-draft', function () {
    return Inertia::renader('Admin/TourBooking/TourDraftPage');
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

// User Routes

Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has(name: 'register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render(component: 'Admin/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

//Resource Admin
Route::resource('cars', CarController::class);
require __DIR__ . '/auth.php';
