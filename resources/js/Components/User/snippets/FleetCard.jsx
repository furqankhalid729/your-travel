import React from "react";
import { CiHeart } from "react-icons/ci";

const FleetCard = ({ imageSrc, car_name, brand, model }) => {
  return (
    <div className="relative w-full max-w-xl rounded-lg overflow-hidden bg-[#F4F4F4] py-3">
      <img src={`/storage/${imageSrc}`} alt={car_name} className="w-full  object-cover h-[215px]" />

      <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
        <CiHeart className=" text-xl" />
      </div>

      <div className="p-4">
        <h2 className="font-semibold text-lg mb-1">{car_name}</h2>
        <p className="text-gray-600 text-sm">{brand}, {model}, {car_name}</p>
      </div>
    </div>
  );
};

export default FleetCard;
