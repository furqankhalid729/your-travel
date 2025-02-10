import React from 'react';
import AdminLayout from "../../../Layout/AdminLayout";
import AddHotelRoomCom from "../../../Components/Admin/HotelBooking/AddHotelRoom";
const AddHotelRoom = () => {
  return (
    <div>
      <AddHotelRoomCom />
    </div>
  )
}
AddHotelRoom.layout = page => <AdminLayout children={page} title="All Hotel" />
export default AddHotelRoom
