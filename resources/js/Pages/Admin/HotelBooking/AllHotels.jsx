import React from 'react';
import AdminLayout from "../../../Layout/AdminLayout";
import AllHotelsCom from "../../../Components/Admin/HotelBooking/AllHotels";
const AllHotels = () => {
  return (
    <div>
      <AllHotelsCom />
    </div>
  )
}
AllHotels.layout = page => <AdminLayout children={page} title="All Hotel" />
export default AllHotels;
