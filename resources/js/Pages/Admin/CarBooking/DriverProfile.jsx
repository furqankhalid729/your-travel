import React from 'react';
import AdminLayout from "../../../Layout/AdminLayout";
import DriverProfieCom from "../../../Components/Admin/CarBooking/DriverProfile";


const DriverProfile = ({driver, car, transactions}) => {
    return (
        <div>
            <DriverProfieCom driver={driver} car={car} transactions={transactions} />
        </div>
    )
}
DriverProfile.layout = page => <AdminLayout children={page} title="Driver Listing" />
export default DriverProfile
