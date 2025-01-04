import React from 'react';
import AdminLayout from "../../../Layout/AdminLayout";
import BookRideAssignDriversCom from "../../../Components/Admin/CarBooking/BookRideAssignDrivers"
const BookRideAssignDrivers = () => {
    return (
        <div>
            <BookRideAssignDriversCom />
        </div>
    )
}
BookRideAssignDrivers.layout = page => <AdminLayout children={page} title="Book Rides" />
export default BookRideAssignDrivers
