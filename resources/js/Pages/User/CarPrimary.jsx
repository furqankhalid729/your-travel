import React from 'react'
import CarCatogory from '../../Components/User/Car/CarCategory'
import CarBanner from '../../Components/User/Car/CarBanner'
import CarTab from '../../Components/User/Car/CarTab'
const CarPrimary = () => {
  return (
    <>
      <CarBanner />
      <div className='flex flex-row justify-between mx-4 md:mx-16 '>
        <div className='hidden md:block md:w-[30%] lg:w-1/4 mt-24'>
          <CarCatogory />
        </div>
        <div className='w-full md:w-3/4 mt-24'>
          <CarTab heading="32 Cars Available" />
        </div>
      </div>
    </>
  )
}

export default CarPrimary