import React from 'react';
import AdminLayout from "../../../Layout/AdminLayout";
import TourBookingProfileCom from "../../../Components/Admin/TourBooking/TourBookingProfile";

const TourBookingProfile = ({booking,tour}) => {
  return (
    <div>
      <TourBookingProfileCom 
        booking={booking}
        tour={tour}
      />
    </div>
  )
}
TourBookingProfile.layout = page => <AdminLayout children={page} title="Tour Booking Profile" />
export default TourBookingProfile;
