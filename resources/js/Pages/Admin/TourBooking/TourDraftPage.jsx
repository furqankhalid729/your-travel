import React from 'react';
import AdminLayout from "../../../Layout/AdminLayout";
import TourDraftPageCom from "../../../Components/Admin/TourBooking/TourDraftPage";
const TourDraftPage = () => {
  return (
    <div>
      <TourDraftPageCom />
    </div>
  )
}
TourDraftPage.layout = page => <AdminLayout children={page} title="Tour Draft Booking" />
export default TourDraftPage;
