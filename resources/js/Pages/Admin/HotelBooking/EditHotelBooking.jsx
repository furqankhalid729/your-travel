import React from 'react';
import AdminLayout from "../../../Layout/AdminLayout";
import EditHotelBookingCom from "../../../Components/Admin/HotelBooking/EditHotelBooking";
const EditHotelBooking = ({ hotelRoom }) => {
    return (
        <div>
            <EditHotelBookingCom  hotelRoom={hotelRoom}/>
        </div>
    )
}
EditHotelBooking.layout = page => <AdminLayout children={page} title="Edit Hotel booking" />
export default EditHotelBooking;
