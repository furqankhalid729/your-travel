import React from 'react'
import HotelBookingFormCom from "../../../Components/Admin/HotelBooking/HotelBookingForm";
import AdminLayout from "../../../Layout/AdminLayout";
const HotelBookingForm = () => {
  return (
    <div>
      <HotelBookingFormCom />
    </div>
  )
}
HotelBookingForm.layout = page => <AdminLayout children={page} title=" Hotel Booking" />
export default HotelBookingForm
