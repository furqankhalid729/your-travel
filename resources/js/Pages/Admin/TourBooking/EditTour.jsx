import React from 'react';
import AdminLayout from "../../../Layout/AdminLayout";
// import AddTourCom from "../../../Components/Admin/TourBooking/AddTour";
import TabsTour from '../../../Components/Admin/TourBooking/EditTourTabs';

const AddTour = ({tour,cars}) => {
  return (
    <div>
      {/* <AddTourCom /> */}
      <TabsTour tour={tour} cars={cars}/>
    </div>
  )
}
AddTour.layout = page => <AdminLayout children={page} title="Add Tour" />
export default AddTour;
