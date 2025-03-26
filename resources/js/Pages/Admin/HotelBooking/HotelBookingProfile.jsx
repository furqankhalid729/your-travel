import React from 'react';
import AdminLayout from "../../../Layout/AdminLayout";
import HotelBookingProfileCom from "../../../Components/Admin/HotelBooking/HotelBookingProfile";
const HotelBookingProfile = ({booking, hotelItem, hotelRoom}) => {
  return (
    <div>
      <HotelBookingProfileCom 
        booking={booking}
        hotelItem = {hotelItem}
        hotelRoom = {hotelRoom}
      />
    </div>
  )
}
HotelBookingProfile.layout = page => <AdminLayout children={page} title="Hotel Booking Detail" />
export default HotelBookingProfile
