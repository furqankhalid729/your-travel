import React from 'react';
import AdminLayout from "../../../Layout/AdminLayout";
import TourBookingProfileCom from "../../../Components/Admin/TourBooking/TourBookingProfile";

const TourBookingProfile = () => {
  return (
    <div>
      <TourBookingProfileCom />
    </div>
  )
}
TourBookingProfile.layout = page => <AdminLayout children={page} title="Tour Booking Profile" />
export default TourBookingProfile;
