import React from 'react';
import AdminLayout from "../../../Layout/AdminLayout";
import BookCarAssignDriversCom from "../../../Components/Admin/CarBooking/BookCarAssignDrivers";
const BookCarAssignDrivers = () => {
    return (
        <div>
            <BookCarAssignDriversCom />
        </div>
    )
}
BookCarAssignDrivers.layout = page => <AdminLayout children={page} title="Assign Car Driver" />
export default BookCarAssignDrivers
