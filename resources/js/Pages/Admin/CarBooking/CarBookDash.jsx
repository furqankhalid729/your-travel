import React from 'react';
import AdminLayout from "../../../Layout/AdminLayout";
import CarDash from "../../../Components/Admin/CarBooking/CarDash";
import CarsListing from '../../../Components/Admin/CarBooking/CarsListing';

const CarBookDash = ({ cars, carCount, driverCount, activeBookingsTotal }) => {
    return (
        <div>
            <CarDash
                carCount={carCount} 
                driverCount={driverCount} 
                activeBookingsTotal = {activeBookingsTotal}
            />
            <CarsListing
                cars={cars}
            />
        </div>
    )
}
CarBookDash.layout = page => <AdminLayout children={page} title="Car Dash" />
export default CarBookDash;
