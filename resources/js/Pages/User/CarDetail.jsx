import React from 'react'
import CarProfile from '../../Components/User/CarDetails/CarProfile';
import Summary from '../../Components/User/CarDetails/Summary';
import CarAvability from '../../Components/User/CarDetails/CarAvability';
import GuestReviews from '../../Components/User/CarDetails/GuestReviews';
const CarDetail = () => {
  return (
    <div className=' mt-4 mx-8 md:mx-20'>
      <CarProfile/>
      <Summary/>
      <CarAvability/>
      <GuestReviews/>
      </div>
  )
}

export default CarDetail