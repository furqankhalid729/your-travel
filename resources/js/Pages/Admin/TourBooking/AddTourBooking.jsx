import React from 'react';
import AdminLayout from "../../../Layout/AdminLayout";
import AddTourBookingCom from "../../../Components/Admin/TourBooking/AddTourBooking";
const AddTourBooking = () => {
  return (
    <div>
      <AddTourBookingCom />
    </div>
  )
}
AddTourBooking.layout = page => <AdminLayout children={page} title="All Tour booking" />
export default AddTourBooking;
