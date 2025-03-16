import React, {useState} from "react";
import { AiFillStar } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { Link } from '@inertiajs/react';
import Cookies from "js-cookie";

const FeatureCard = ({ id,image, name, rating, reviews, price }) => {
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
        updatedFavorites.push({ id, name:name, image:image, type:"hotel" });
      }
      Cookies.set("favorites", JSON.stringify(updatedFavorites), { expires: 30 });
      setFavorites(updatedFavorites);
    };
  return (
    <Link href={`/hotel/hotel-details/${id}`}>
      <div className="relative w-full max-w-xl rounded-lg  overflow-hidden bg-[#F4F4F4] mx-auto shadow-md">
        <img
          src={`/storage/${image}`}
          alt={name}
          className="w-full h-[300px] sm:h-[260px] xl:h-[325px] object-cover"
        />
        <button onClick={handleFavorite} className={`absolute top-2 right-2 rounded-full p-1 shadow cursor-pointer transition ${isFavorited ? "bg-red-500 text-white" : "bg-white text-gray-500"
          }`}>
          <CiHeart className="text-xl" />
        </button>
        <div className="p-4  xl:mt-3">
          <h3 className="font-semibold text-lg mb-1">{name}</h3>

          <div className="flex items-center text-yellow-500 mb-2">
            <AiFillStar className="text-lg" />
            <span className="ml-1 text-gray-800">{rating}</span>
            <span className="ml-1 text-gray-500">| {reviews} Reviews</span>
          </div>

          <p className="text-gray-700">
            Starting From{" "}
            <span className="text-red-500 font-semibold">${price}</span> / Night
          </p>
        </div>
      </div>
    </Link>
  );
};

export default FeatureCard;