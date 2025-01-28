import React from 'react';
import AdminLayout from "../../../Layout/AdminLayout";
import CarDash from "../../../Components/Admin/CarBooking/CarDash";
import DriverListingCom from "../../../Components/Admin/CarBooking/DriverListing";
const DriverListing = ({drivers}) => {
    return (
        <div>
            <CarDash />
            <DriverListingCom 
                drivers={drivers}
            />
        </div>
    )
}
DriverListing.layout = page => <AdminLayout children={page} title="Add Car" />
export default DriverListing
