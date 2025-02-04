import React from 'react';
import CarBanner from '../../Components/User/Car/CarBanner';
import CarTab from '../../Components/User/Car/CarTab';
import UserLayout from "../../Layout/UserLayout";
import CarCategory from '../../Components/User/Car/CarCategory';
const CarPrimary = () => {
  return (
    <>
      <CarBanner />
      <div className='flex flex-row justify-between mx-4 md:mx-16 '>
        <div className='hidden md:block md:w-[30%] lg:w-1/4 mt-24'>
          <CarCategory />
        </div>
        <div className='w-full md:w-3/4 mt-24'>
          <CarTab heading="32 Cars Available" />
        </div>
      </div>
    </>
  )
}
CarPrimary.layout = page => <UserLayout children={page} title="Car Primary" />
export default CarPrimary