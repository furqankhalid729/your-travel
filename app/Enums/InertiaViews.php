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
    case DriverIndex = 'Admin/CarBooking/DriverListing';
    case EditDriver = 'Admin/CarBooking/EditDriver';

    // hotel booking
    case AddHotelRoom = 'Admin/HotelBooking/AddHotelRoom';
    case RoomIndex = 'Admin/HotelBooking/AllHotels';
    case EditHotelBooking = 'Admin/HotelBooking/EditHotelBooking';



    // Frontend
    // cars
    case frontendIndex = 'User/Car';
    case CarDetail = 'User/CarDetail';

}
