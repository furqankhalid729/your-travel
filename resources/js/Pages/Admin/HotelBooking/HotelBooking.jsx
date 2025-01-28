import React from 'react';
import AdminLayout from "../../../Layout/AdminLayout";
import HotelBookingCom from "../../../Components/Admin/HotelBooking/HotelBooking";

const HotelBooking = () => {
  return (
    <div>
      <HotelBookingCom />
    </div>
  )
}
HotelBooking.layout = page => <AdminLayout children={page} title="Hotel Booking Index" />
export default HotelBooking
