import React from 'react';
import AdminLayout from "../../../Layout/AdminLayout";
import DriverListingCom from "../../../Components/Admin/CarBooking/DriverListing";
const DriverListing = () => {
    return (
        <div>
            <DriverListingCom />
        </div>
    )
}
DriverListing.layout = page => <AdminLayout children={page} title="Add Car" />
export default DriverListing
