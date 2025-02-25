import React from 'react';
import AdminLayout from "../../../Layout/AdminLayout";
import EditHotelBookingCom from "../../../Components/Admin/HotelBooking/EditHotelBooking";
const EditHotelBooking = ({ hotel, hotelRooms }) => {
    return (
        <div>
            <EditHotelBookingCom  hotel={hotel} hotelRooms={hotelRooms} />
        </div>
    )
}
EditHotelBooking.layout = page => <AdminLayout children={page} title="Edit Hotel booking" />
export default EditHotelBooking;
