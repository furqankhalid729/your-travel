import React from 'react'
import TourProfile from '../../Components/User/TourPKG/TourProfile';
import TourSummary from '../../Components/User/TourPKG/TourSummary';
import TouristReview from '../../Components/User/TourPKG/TouristReview';
import TourItinerary from '../../Components/User/TourPKG/TourIterinary';

const TourPKG = () => {
  return (
    <div className='p-4 md:p-8 mx-4 md:mx-16'>
      <TourProfile/>
      <TourSummary/>
      <TourItinerary/>
      <TouristReview/>
    </div>
  )
}

export default TourPKG
