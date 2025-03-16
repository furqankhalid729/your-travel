<?php

namespace App\Enums;

enum InertiaViews: string
{
    case AdminDashboard = 'Admin/Dashboard';
    // cars
    case AddCar = 'Admin/CarBooking/AddCar';
    case CarIndex = 'Admin/CarBooking/CarBookDash';
    case EditCar = 'Admin/CarBooking/EditCar';
    case CarBooking = 'Admin/CarBooking/Orders';

    // drivers
    case AddDriver = 'Admin/CarBooking/AddDriver';
    case HotelBookingIndex = 'Admin/HotelBooking/HotelBooking';

    //case HotelCreate = 'Admin/HotelBooking/AddHotelRoom';
    case DriverIndex = 'Admin/CarBooking/DriverListing';
    case EditDriver = 'Admin/CarBooking/EditDriver';

    // hotel booking
    case AddHotelRoom = 'Admin/HotelBooking/AddHotelRoom';
    case RoomIndex = 'Admin/HotelBooking/AllHotels';
    case EditHotel = 'Admin/HotelBooking/EditHotelBooking';
    case AllHotelBooking = 'Admin/HotelBooking/AllHotelBooking';

    //Tour Index
    case TourIndex = 'Admin/TourBooking/ViewTour';
    case TourDashboard = 'Admin/TourBooking/ViewTourBooking';

    case AdminPayment = 'Admin/Payments';

    case AdminEnquiry = 'Admin/Enquiries';
    case AdminEnquiryDetail = 'Admin/EnquiriesDetails';

    // Frontend
    // cars
    case carIndex = 'User/Car';
    case CarDetail = 'User/CarDetail';
    case HotelIndex = 'User/Hotel';
    case HotelDetail = 'User/HotelRoom';
    case TourDetail = 'User/TourPKG';
    case TourIndexFrontend = 'User/Tour';
    case Checkout = 'User/CarBook';

}
