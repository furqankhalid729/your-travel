import React from 'react';
import AdminLayout from "../../../Layout/AdminLayout";
import HotelBookingCom from "../../../Components/Admin/HotelBooking/HotelBooking";

const HotelBooking = ({latestBooking, hotelRoomsCount, bookingCount}) => {
  return (
    <div>
      <HotelBookingCom
        latestBooking={latestBooking}
        hotelRoomsCount={hotelRoomsCount}
        bookingCount= {bookingCount}
      />
    </div>
  )
}
HotelBooking.layout = page => <AdminLayout children={page} title="Hotel Booking Index" />
export default HotelBooking
