<?php

namespace App\Enums;

enum InertiaViews: string
{
    case AddCar = 'Admin/CarBooking/AddCar';
    case CarIndex = 'Admin/CarBooking/CarBookDash';
    case EditCar = 'Admin/CarBooking/EditCar';
}
