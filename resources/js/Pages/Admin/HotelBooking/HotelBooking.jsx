import React from 'react';
import AdminLayout from "../../../Layout/AdminLayout";
import HotelBookingCom from "../../../Components/Admin/HotelBooking/HotelBooking";

const HotelBooking = ({latestBooking}) => {
  return (
    <div>
      <HotelBookingCom
        latestBooking={latestBooking}
      />
    </div>
  )
}
HotelBooking.layout = page => <AdminLayout children={page} title="Hotel Booking Index" />
export default HotelBooking
