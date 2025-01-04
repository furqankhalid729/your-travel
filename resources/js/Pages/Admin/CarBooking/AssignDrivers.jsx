import React from 'react';
import AdminLayout from "../../../Layout/AdminLayout";
import AssignDriversCom from "../../../Components/Admin/CarBooking/AssignDrivers";
const AssignDrivers = () => {
    return (
        <div>
            <AssignDriversCom />
        </div>
    )
}
AssignDrivers.layout = page => <AdminLayout children={page} title="Assign Car Driver" />
export default AssignDrivers
