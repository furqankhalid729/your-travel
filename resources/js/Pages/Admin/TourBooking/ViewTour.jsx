import React from 'react';
import AdminLayout from "../../../Layout/AdminLayout";
import ViewTourCom from "../../../Components/Admin/TourBooking/ViewTour"

const ViewTour = ({tours}) => {
  return (
    <div>
      <ViewTourCom 
        tours={tours}
      />
    </div>
  )
}
ViewTour.layout = page => <AdminLayout children={page} title="All Tours" />
export default ViewTour;
