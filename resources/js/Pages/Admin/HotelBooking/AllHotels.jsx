import React from 'react';
import AdminLayout from "../../../Layout/AdminLayout";
import AllHotelsCom from "../../../Components/Admin/HotelBooking/AllHotels";

const AllHotels = ({ hotels }) => {
  return (
    <div className='p-2 md:p-4 m-2 md:m-6 bg-white'>
      <AllHotelsCom
        hotels={hotels} />
    </div>
  )
}
AllHotels.layout = page => <AdminLayout children={page} title="All Hotel" />
export default AllHotels;
