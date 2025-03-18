import React from 'react';
import AdminLayout from "../../../Layout/AdminLayout";
import BookCarAssignDriversCom from "../../../Components/Admin/CarBooking/BookCarAssignDrivers";
const BookCarAssignDrivers = ({order, car,drivers}) => {
    return (
        <div>
            <BookCarAssignDriversCom 
                order = {order}
                car = {car}
                drivers = {drivers}
            />
        </div>
    )
}
BookCarAssignDrivers.layout = page => <AdminLayout children={page} title="Assign Car Driver" />
export default BookCarAssignDrivers
