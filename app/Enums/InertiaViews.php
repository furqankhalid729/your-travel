<?php

namespace App\Enums;

enum InertiaViews: string
{
    // cars
    case AddCar = 'Admin/CarBooking/AddCar';
    case CarIndex = 'Admin/CarBooking/CarBookDash';
    case EditCar = 'Admin/CarBooking/EditCar';

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

    //Tour Index
    case TourIndex = 'Admin/TourBooking/ViewTour';


    // Frontend
    // cars
    case carIndex = 'User/Car';
    case CarDetail = 'User/CarDetail';
    case HotelIndex = 'User/Hotel';
    case HotelDetail = 'User/HotelRoom';
    case TourDetail = 'User/TourPKG';
    case TourIndexFrontend = 'User/Tour';

}
