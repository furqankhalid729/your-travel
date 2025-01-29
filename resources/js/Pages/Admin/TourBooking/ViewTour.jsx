import React from 'react';
import AdminLayout from "../../../Layout/AdminLayout";
import ViewTourCom from "../../../Components/Admin/TourBooking/ViewTour"

const ViewTour = () => {
  return (
    <div>
      <ViewTourCom />
    </div>
  )
}
ViewTour.layout = page => <AdminLayout children={page} title="All Tours" />
export default ViewTour;
