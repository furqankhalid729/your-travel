import React from 'react';
import AdminLayout from "../../../Layout/AdminLayout";
import CarDash from "../../../Components/Admin/CarBooking/CarDash";
import DriverListingCom from "../../../Components/Admin/CarBooking/DriverListing";
const DriverListing = ({drivers, carCount, driverCount, activeBookingsTotal}) => {
    return (
        <div>
            <CarDash 
                carCount={carCount} 
                driverCount={driverCount} 
                activeBookingsTotal = {activeBookingsTotal}
            />
            <DriverListingCom 
                drivers={drivers}
            />
        </div>
    )
}
DriverListing.layout = page => <AdminLayout children={page} title="Add Car" />
export default DriverListing
