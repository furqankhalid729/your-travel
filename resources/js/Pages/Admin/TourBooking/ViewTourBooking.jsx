import React from 'react';
import AdminLayout from "../../../Layout/AdminLayout";
import ViewTourBookingCom from "../../../Components/Admin/TourBooking/ViewTourBooking";

const ViewTourBooking = () => {
  return (
    <div>
      <ViewTourBookingCom />
    </div>
  )
}
ViewTourBooking.layout = page => <AdminLayout children={page} title="All Tour booking" />
export default ViewTourBooking
