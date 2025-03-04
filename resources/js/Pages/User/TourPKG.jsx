import React from 'react'
import TourProfile from '../../Components/User/TourPKG/TourProfile';
import TourSummary from '../../Components/User/TourPKG/TourSummary';
import TouristReview from '../../Components/User/TourPKG/TouristReview';
import TourItinerary from '../../Components/User/TourPKG/TourIterinary';
import UserLayout from "../../Layout/UserLayout";
const TourPKG = ({ tour }) => {
  console.log(tour);

  return (
    <div className='p-4 md:p-8 mx-4 md:mx-16'>
      <TourProfile tour={tour} />
      <TourSummary tour={tour} />
      <TourItinerary tour={tour} />
      <TouristReview tour={tour} />
    </div>
  )
}
TourPKG.layout = page => <UserLayout children={page} title="TourPKG" />
export default TourPKG
