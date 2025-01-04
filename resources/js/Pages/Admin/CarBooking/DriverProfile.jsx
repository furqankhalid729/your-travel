import React from 'react';
import AdminLayout from "../../../Layout/AdminLayout";
import DriverProfieCom from "../../../Components/Admin/CarBooking/DriverProfile";

const DriverProfile = () => {
    return (
        <div>
            <DriverProfieCom />
        </div>
    )
}
DriverProfile.layout = page => <AdminLayout children={page} title="Add Car" />
export default DriverProfile
