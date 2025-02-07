import React from 'react';
import AdminLayout from "../../../Layout/AdminLayout";
import AllHotelsCom from "../../../Components/Admin/HotelBooking/AllHotels";
const AllHotels = ({ hotelRooms }) => {
  return (
    <div>
      <AllHotelsCom
        hotelRooms={hotelRooms} />
    </div>
  )
}
AllHotels.layout = page => <AdminLayout children={page} title="All Hotel" />
export default AllHotels;
