import React from 'react';
import AdminLayout from "../../../Layout/AdminLayout";
import AllHotelBookingCom from "../../../Components/Admin/HotelBooking/AllHotelBooking";
const AllHotelBooking = ({allBooking}) => {
  return (
    <div>
      <AllHotelBookingCom 
        allBooking={allBooking}
      />
    </div>
  )
}
AllHotelBooking.layout = page => <AdminLayout children={page} title="All Hotel Booking" />
export default AllHotelBooking
