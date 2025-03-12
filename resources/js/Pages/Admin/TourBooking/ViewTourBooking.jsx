import React from 'react';
import AdminLayout from "../../../Layout/AdminLayout";
import ViewTourBookingCom from "../../../Components/Admin/TourBooking/ViewTourBooking";

const ViewTourBooking = ({allBooking}) => {
  return (
    <div>
      <ViewTourBookingCom 
        allBooking={allBooking}
      />
    </div>
  )
}
ViewTourBooking.layout = page => <AdminLayout children={page} title="All Tour booking" />
export default ViewTourBooking
