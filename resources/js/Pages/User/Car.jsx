import React from 'react';
import CarBanner from '../../Components/User/Car/CarBanner';
import CarTab from '../../Components/User/Car/CarTab';
import UserLayout from "../../Layout/UserLayout";
const Car = () => {
  return (
    <div>
      <CarBanner/>
      <CarTab heading="Our Fleet"/>
    </div>
  )
}
Car.layout = page => <UserLayout children={page} title="Car Details" />
export default Car