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
use App\Http\Controllers\BookingController;
use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\EnquiryController;
use App\Http\Controllers\AdminPaymentController;
use App\Http\Controllers\AdminTransactionController;
use App\Models\Car\CarBrand;
use App\Http\Controllers\EmailController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


// User Routes
Route::get('/', function () {
    return Inertia::render('User/Home');
})->name('home');
Route::get('/car', [CarFrontendController::class, 'frontendIndex'])->name('car.frontendIndex');
Route::get('/cars/{car}', [CarController::class, 'show'])->name('cars.show');
Route::get('/hotel', [HotelFrontendController::class, 'frontendIndex'])->name('hotel.frontendIndex');
Route::get('/hotel/hotel-details/{id}', [HotelRoomController::class, 'show'])->name('hotel.show');
Route::get('/tour', [TourFrontendController::class, 'frontendIndex'])->name('tour.frontendIndex');
Route::get('/checkout', [BookingController::class, 'index'])->name('checkout');
Route::get('/hotel/hotel-details/{id}', [HotelRoomController::class, 'show'])->name('hotel.show');
Route::get('/tour/tour-details/{id}', [TourFrontendController::class, 'show'])->name('tour.show');

Route::get('/privacy-policy', function () {
    return Inertia::render('User/PrivacyPolicy');
});

Route::get('/contact', function () {
    return Inertia::render('User/Contact');
});
Route::get('/legal-notice', function () {
    return Inertia::render('User/LegalNotice');
});
Route::get('/terms-condition', function () {
    return Inertia::render('User/TermsAndCondition');
});

Route::middleware(['auth'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'show'])->name('user.profile');
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
Route::get('/career', function () {
    return Inertia::render('User/Career');
});
Route::get('/car-booking', function () {
    return Inertia::render('User/CarBook');
});
Route::get('/tour-pkg', function () {
    return Inertia::render('User/TourPKG');
});

// Admin Routes
Route::middleware(['auth', 'role'])->group(function () {
    Route::get('/dashboard', [AdminDashboardController::class, 'index'])->name('dashboard');
    Route::get('/dashboard/car-booking', [CarController::class, 'index'])->name('car.index');
    Route::get('/dashboard/car-booking/add-car', [CarController::class, 'create']);
    Route::get('/dashboard/car/edit/{id}', [CarController::class, 'edit'])->name('car.edit');
    Route::get('/dashboard/car/view/{id}', [CarController::class, 'view'])->name('car.view');
    Route::post('/cars/{car}', [CarController::class, 'update'])->name('cars.update');
    Route::delete('/cars/{car}', [CarController::class, 'destroy'])->name('cars.destroy');
    Route::get('/dashboard/car-booking/orders', [CarController::class, 'carBooking'])->name('car.booking');
    Route::get('/dashboard/car-booking/book-car-assign-drivers/{id}', [CarController::class, 'assignRider'])->name("order.assignrider");
    Route::get('/dashboard/car-booking/driver-listing', [DriverController::class, 'index'])->name('driver.index');
    Route::get('/dashboard/car-booking/add-driver', [DriverController::class, 'create'])->name('driver.create');
    Route::get('/dashboard/car-booking/driver/edit/{id}', [DriverController::class, 'edit'])->name('driver.edit');
    Route::post('/dashboard/car-booking/driver/update/{id}', [DriverController::class, 'update'])->name('driver.update');
    Route::get('/dashboard/car-booking/driver/{id}', [DriverController::class, 'show'])->name('driver.show');
    Route::get('/dashboard/hotel-booking', [HotelBookingController::class, 'index'])->name('hotelbooking.index');
    Route::get('/dashboard/hotel-booking/all-hotel-booking', [HotelBookingController::class, 'allHotelBooking'])->name('hotelbooking.all');
    Route::get('/dashboard/hotel/add-hotel', [HotelRoomController::class, 'create'])->name('hotel.create');
    Route::get('/dashboard/hotel/all-hotels', [HotelRoomController::class, 'index'])->name('hotel.index');
    Route::get('/dashboard/hotel/edit/{id}', [HotelRoomController::class, 'edit'])->name('hotel.edit');
    Route::put('/dashboard/hotel/update/{id}', [HotelRoomController::class, 'update'])->name('hotel.update');
    Route::get('/dashboard/hotel-booking/hotel-booking-profile/{id}', [HotelBookingController::class, 'show'])->name('hotelbooking.show');
    Route::get('/dashboard/tour-booking/view-tour', [TourController::class, 'index'])->name('tour.index');
    Route::get('/dashboard/tour-booking', [TourController::class, 'tourDashboard'])->name('tour.dashboard');
    Route::get('/dashboard/tour-booking/profile/{id}',[TourController::class, 'tourBooking'])->name('tour.booking.show');
    Route::get('/dashboard/tour-booking/add-tour', [TourController::class, 'create'])->name("tour.create");
    Route::get('/dashboard/tour-booking/edit/{id}', [TourController::class, 'edit'])->name("tour.edit");
    Route::get('/dashboard/enquiries', [EnquiryController::class, 'index'])->name('enquiry.index');
    Route::get('/dashboard/enquiries/details/{id}', [EnquiryController::class, 'show'])->name('enquiry.detail');
    Route::get('/dashboard/customers', [AdminDashboardController::class, 'customerIndex'])->name('customer.index');
    Route::get('/dashboard/customers/orders/{id}', [AdminDashboardController::class, 'customerOrder'])->name('customer.order.index');

    Route::get('/dashboard/payments', [AdminPaymentController::class, 'index'])->name('payment.index');
    Route::get('/dashboard/transaction', [AdminTransactionController::class, 'index'])->name('transaction.index');

    Route::get('/dashboard/settings/general', function () {
        return Inertia::render('Admin/Settings/General');
    })->name('settings.general');

    Route::get('/dashboard/settings/security', function () {
        return Inertia::render('Admin/Settings/Security');
    })->name('settings.security');
});

Route::get('/dashlayout', function () {
    return Inertia::render('Admin/DashLayout');
});


// Car booking
Route::get('/dashboard/car-booking/special-offers', function () {
    return Inertia::render('Admin/CarBooking/Specialoffers');
});
Route::get('/dashboard/car-booking/cars-collection', function () {
    return Inertia::render('Admin/CarBooking/CarsCollection');
});

Route::get('/dashboard/car-booking/assign-drivers', function () {
    return Inertia::render('Admin/CarBooking/AssignDrivers');
});

Route::get('/dashboard/car-booking/book-ride-assign-drivers', function () {
    return Inertia::render('Admin/CarBooking/BookRideAssignDrivers');
});

// hotel booking

Route::get('/dashboard/hotel-booking/hotel-booking-form', function () {
    return Inertia::render('Admin/HotelBooking/HotelBookingForm');
});


// rooms
Route::get('/dashboard/hotel-booking/view-rooms', function () {
    return Inertia::render('Admin/HotelBooking/ViewRooms');
});
// Tour Booking
Route::get('/dashboard/tour-booking/view-location', function () {
    return Inertia::render('Admin/TourBooking/TourViewLocation');
});

Route::get('/dashboard/tour-booking/add-tour-booking', function () {
    return Inertia::render('Admin/TourBooking/AddTourBooking');
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

Route::get('/dashboard/reports', function () {
    return Inertia::render('Admin/Reports');
});

Route::get('/send-test-email', [EmailController::class, 'sendOrderConformationMail']);
// Settings

// User Routes

Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has(name: 'register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
require __DIR__ . '/auth.php';
