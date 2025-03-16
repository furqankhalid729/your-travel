import React, { useState } from "react";
import { Link } from '@inertiajs/react';
import { CiHeart } from "react-icons/ci";
import Cookies from "js-cookie";


const FleetCard = ({ id, imageSrc, car_name, brand, model }) => {
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(Cookies.get("favorites") || "[]");
  });
  const isFavorited = favorites.some((car) => car.id === id);
  const handleFavorite = (e) => {
    e.preventDefault();
    let updatedFavorites = [...favorites];
    if (isFavorited) {
      updatedFavorites = updatedFavorites.filter((car) => car.id !== id);
    } else {
      updatedFavorites.push({ id, name:car_name, image:imageSrc, type:"car" });
    }
    Cookies.set("favorites", JSON.stringify(updatedFavorites), { expires: 30 });
    setFavorites(updatedFavorites);
  };
  return (
    <Link href={`/cars/${id}`}>
      <div className="relative w-full max-w-xl rounded-lg overflow-hidden bg-[#F4F4F4] py-3">
        <img src={`/storage/${imageSrc}`} alt={car_name} className="w-full  object-cover h-[215px]" />

        <div onClick={handleFavorite} className={`absolute top-2 right-2 rounded-full p-1 shadow cursor-pointer transition ${isFavorited ? "bg-red-500 text-white" : "bg-white text-gray-500"
          }`}>
          <CiHeart className=" text-xl" />
        </div>

        <div className="p-4">
          <h2 className="font-semibold text-lg mb-1">{car_name}</h2>
          <p className="text-gray-600 text-sm">{brand}, {model}, {car_name}</p>
        </div>
      </div>
    </Link>
  );
};

export default FleetCard;
