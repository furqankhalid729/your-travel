import React from 'react';
import AdminLayout from "../../../Layout/AdminLayout";
import CarDash from "../../../Components/Admin/CarBooking/CarDash";
import CarsListing from '../../../Components/Admin/CarBooking/CarsListing';

const CarBookDash = () => {
    return (
        <div>
            <CarDash />
            <CarsListing />
        </div>
    )
}
CarBookDash.layout = page => <AdminLayout children={page} title="Car Dash" />
export default CarBookDash
