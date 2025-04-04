import React from 'react';
import AdminLayout from "../../../Layout/AdminLayout";
// import AddTourCom from "../../../Components/Admin/TourBooking/AddTour";
import TabsTour from '../../../Components/Admin/TourBooking/TabsTours';

const AddTour = () => {
  return (
    <div>
      {/* <AddTourCom /> */}
      <TabsTour />
    </div>
  )
}
AddTour.layout = page => <AdminLayout children={page} title="Add Tour" />
export default AddTour;
