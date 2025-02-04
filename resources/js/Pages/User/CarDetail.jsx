import React, { useEffect, useState } from 'react';
import { usePage } from '@inertiajs/react';
import CarProfile from '../../Components/User/CarDetails/CarProfile';
import Summary from '../../Components/User/CarDetails/Summary';
import CarAvability from '../../Components/User/CarDetails/CarAvability';
import GuestReviews from '../../Components/User/CarDetails/GuestReviews';
import UserLayout from "../../Layout/UserLayout";

const CarDetail = ({ car }) => {
  return (
    <div className='mt-4 mx-8 md:mx-20'>
      <CarProfile car={car} />
      <Summary car={car} />
      <CarAvability car={car} />
      <GuestReviews car={car} />
    </div>
  );
};

CarDetail.layout = page => <UserLayout children={page} title="Car Detail" />;
export default CarDetail;