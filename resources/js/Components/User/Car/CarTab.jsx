import React from 'react';
import { FaCarSide, FaChevronDown, FaLanguage, FaSnowflake, FaUser } from 'react-icons/fa';
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "@inertiajs/react";
const iconMapping = {
  FaSnowflake: <FaSnowflake />,
  FaCarSide: <FaCarSide />,
  FaLanguage: <FaLanguage />,
  FaUser: <FaUser />,
};

const CarTab = ({ cars }) => {
  console.log(cars);
  return (
    <div className=''>
      <div className="flex justify-between items-center p-4 ">
        <h2 className="text-sm md:text-xl font-semibold">{cars.length} Cars Available</h2>
        <div className="flex items-center space-x-1 text-gray-700 text-[8px] md:text-sm cursor-pointer">
          <span>Sort By:</span>
          <span className="font-semibold">Best Matches</span>
          <FaChevronDown className="text-gray-700" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 py-8">
        {cars.map((car) => (
          <div key={car.id} className="bg-white shadow-md rounded-lg overflow-hidden w-full flex flex-col lg:flex-row p-4">
            {/* car image */}
            <div className="relative w-full lg:w-56 md:h-56">
              <img src={`/storage/${car.car_images[0]}`} alt={car.car_name} className="w-full h-full object-cover rounded-lg" />
              <div className="absolute top-2 right-2 bg-red-500 rounded-full p-1 cursor-pointer">
                <AiOutlineHeart className="text-white text-xl" />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-1 lg:w-[50%] px-4 flex flex-col mt-4 lg:mt-0 gap-2">
              <div>
                <h3 className="text-xl font-semibold">{car.car_name}</h3>
                <p className="text-gray-600 flex items-center mt-1">{car.brand}</p>
                <p className="text-gray-500 mt-1">{car.model}</p>
              </div>
              <div className="flex items-center text-gray-700">
                <button className="rounded w-6 h-6 bg-red-500 text-white text-xs flex items-center justify-center mb-4">4.2</button>
                <span className="text-xs ml-2 mb-4">good review (2043)</span>
              </div>
              <div className="grid sm:grid-cols-3 gap-2 w-[300px]">
                {car.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <span className="bg-red-500 text-white px-1 py-1 rounded-md">
                      {iconMapping[feature.icon]}
                    </span>
                    <p className="text-xs ml-2">{feature.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="sm:border-dotted sm:border-gray-300 p-4">
              <div className="mt-4">
                <div className="grid grid-cols-3 lg:grid-cols-2 gap-3">
                  <button className="w-full sm:w-[60px] justify-center h-8 text-[10px] text-red-500 border border-red-500 rounded-[50px] px-2 py-[2px] flex items-center hover:bg-red-500 hover:text-white transition">Sedan</button>
                  <button className="w-full sm:w-[60px] justify-center h-8 text-[10px] text-red-500 border border-red-500 rounded-[50px] px-2 py-[2px] flex items-center hover:bg-red-500 hover:text-white transition">Hatchback</button>
                  <button className="w-full sm:w-[60px] justify-center h-8 text-[10px] text-red-500 border border-red-500 rounded-[50px] px-2 py-[2px] flex items-center hover:bg-red-500 hover:text-white transition">Minivan</button>
                </div>
                <div className="flex flex-row lg:flex-col gap-6 mt-5">
                  <p className="text-xl font-bold text-gray-800 text-right">
                    <span className="text-gray-700 text-xs">from</span> ${car.price}
                  </p>
                  <Link href={route('cars.show', { id: car.id })}>
                    <button className="w-32 h-10 bg-red-500 text-white rounded-[50px]">See Details</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarTab;