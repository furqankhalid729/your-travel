import React from 'react';
import AdminLayout from "../../../Layout/AdminLayout";
import AddTourCom from "../../../Components/Admin/TourBooking/AddTour";

const AddTour = () => {
  return (
    <div>
      <AddTourCom />
    </div>
  )
}
AddTour.layout = page => <AdminLayout children={page} title="Add Tour" />
export default AddTour;
