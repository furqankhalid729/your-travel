<?php

namespace App\Enums;

enum InertiaViews: string
{
    case AddCar = 'Admin/CarBooking/AddCar';
    case CarIndex = 'Admin/CarBooking/CarBookDash';
    case EditCar = 'Admin/CarBooking/EditCar';

    case AddDriver = 'Admin/CarBooking/AddDriver';

    case HotelBookingIndex = 'Admin/HotelBooking/HotelBooking';

    case HotelCreate = 'Admin/HotelBooking/AddHotelRoom';
    case DriverIndex = 'Admin/CarBooking/DriverListing';
    case EditDriver = 'Admin/CarBooking/EditDriver';

    case AddHotelRoom = 'Admin/HotelBooking/AddHotelRoom';
    case RoomIndex = 'Admin/HotelBooking/AllHotels';
}
