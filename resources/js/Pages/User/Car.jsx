import React, { useState, useEffect } from 'react';
import CarBanner from '../../Components/User/Car/CarBanner';
import CarTab from '../../Components/User/Car/CarTab';
import UserLayout from "../../Layout/UserLayout";
import CarCategory from '@/Components/User/Car/CarCategory';

const Car = ({ cars, filters, modelsFilter, brandFilter }) => {
  const [filteredCars, setFilteredCars] = useState(cars);

  const handleFilter = (filteredCars) => {
    setFilteredCars(filteredCars);
  };

  useEffect(() =>{
    setFilteredCars(cars);
  }, [cars])

  return (
    <div>
      <CarBanner />
      <div className='flex flex-row justify-between mx-4 md:mx-16 '>
        <div className='hidden md:block md:w-[30%] lg:w-1/4 mt-24'>
          <CarCategory onFilter={handleFilter} filters={filters} modelsFilter={modelsFilter} brandFilter={brandFilter}/>
        </div>
        <div className='w-full md:w-3/4 mt-24'>
          <CarTab  cars={filteredCars} />
        </div>
      </div>
    </div>
  );
};

Car.layout = page => <UserLayout children={page} title="Car Details" />;
export default Car;