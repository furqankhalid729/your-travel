<?php

namespace App\Enums;

enum InertiaViews: string
{
    case AddCar = 'Admin/CarBooking/AddCar';
    case CarIndex = 'Admin/CarBooking/CarBookDash';
    case EditCar = 'Admin/CarBooking/EditCar';

    case DriverIndex = 'Admin/CarBooking/DriverListing';
    case AddDriver = 'Admin/CarBooking/AddDriver';

    case HotelBookingIndex = 'Admin/HotelBooking/HotelBooking';
}
