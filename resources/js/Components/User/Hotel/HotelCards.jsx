import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { CiHeart } from 'react-icons/ci';
import { FiWifi, FiTv, FiCoffee } from 'react-icons/fi';
import { IoIosSnow } from "react-icons/io";
import { BiFridge } from "react-icons/bi";
import { Link } from '@inertiajs/react';
import Cookies from "js-cookie";

function HotelCards({ hotels, TBO_Hotel }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(Cookies.get("favorites") || "[]");
  });

  const handleFavorite = (id, name, image) => {
    const isFavorited = favorites.some((fav) => fav.id === id);
    let updatedFavorites = [...favorites];
    if (isFavorited) {
      updatedFavorites = updatedFavorites.filter((car) => car.id !== id);
    } else {
      updatedFavorites.push({ id, name: name, image: image, type: "hotel" });
    }
    Cookies.set("favorites", JSON.stringify(updatedFavorites), { expires: 30 });
    setFavorites(updatedFavorites);
  };

  return (
    <div className=''>
      <div className="flex justify-between py-6">
        <h2 className="text-[13px] sm:text-xl font-semibold text-black ">{hotels.length} Hotel available</h2>
        <div className="relative flex gap-2 text-gray-900 text-[13px] sm:text-xl">
          <span className="font-semibold">Sort by:</span>
          <button
            onClick={toggleDropdown}
            className="flex text-gray-900 focus:outline-none"
          >
            Services <IoIosArrowDown className="mt-1" />
          </button>
          {isDropdownOpen && (
            <ul className="text-[13px] sm:text-xl absolute top-4 bg-white text-black mt-2 rounded-md shadow-lg w-[4.5rem] md:w-32 z-10">
              <li>
                <a
                  href="/hotel"
                  className="block px-2 py-2 hover:bg-red-500 hover:text-white text-left"
                >
                  Low to High
                </a>
              </li>
              <li>
                <a
                  href="#service2"
                  className="block px-2 py-2 hover:bg-red-500 hover:text-white text-left"
                >
                  High to Low
                </a>
              </li>
              <li>
                <a
                  href="#service3"
                  className="block px-2 py-2 hover:bg-red-500 hover:text-white text-left"
                >
                  Top Rated
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
      {/* Hotel Cards */}
      <div>
        {TBO_Hotel.data.map((hotel) => {
          const isFavorited = favorites.some((fav) => fav.id === hotel.id);
          const data = JSON.parse(hotel.data).HotelDetails[0];
          console.log(JSON.parse(hotel.data).HotelDetails)
          return (
            <div key={hotel.id} className="flex flex-col lg:flex-row gap-6 bg-white shadow-md rounded-lg p-2 border md:border-gray-200 mt-6">

              {/* Left - Hotel Image and Favorite Icon */}
              <div className="object-cover relative w-full h-auto md:block md:max-w-[33%] md:min-h-[250px]">
                <img
                  src={data?.images?.length > 0 ? data.images[0] : '/storage/images/dummy.png'}
                  alt=""
                  className="object-cover w-full md:h-full rounded-lg"
                />

                <div className={`absolute top-2 right-2 rounded-full p-1 shadow cursor-pointer transition ${isFavorited ? "bg-red-500 text-white" : "bg-white text-gray-500"
                  }`}>
                  <CiHeart className="text-[8px] md:text-2xl" />
                </div>
              </div>
              <div className='block md:flex md:gap-5 md:py-4 flex-1'>
                {/* Middle - Hotel Information */}
                <div className="flex flex-col w-full md:w-6/12 lg:w-8/12">
                  <h2 className="text-xl font-semibold text-gray-900">{data.HotelName}</h2>

                  <p className="text-gray-500 text-sm mt-1">{hotel.distance}</p>

                  {/* Rating */}
                  <div className="flex items-center mt-2">
                    <span className="bg-red-500 text-white font-semibold px-2 md:py-1 rounded-xl ">{data.HotelRating}</span>
                    <p className="ml-2 text-gray-600 text-sm">{data.HotelRating >= 4 ? "Good" : "Average"}</p>
                    <p className="ml-2 text-gray-500 text-[10px] md:text-sm">({hotel.reviews} reviews)</p>
                  </div>

                  {/* Icons for amenities */}
                  <div className="flex flex-wrap md:flex-nowrap gap-2 mt-4 text-red-500  md:text-xl">
                    <ul className="space-y-2">
                      {data.HotelFacilities.slice(0, 5).map((facility, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="text-sm text-gray-700">{facility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Right Side - Price and Action */}
                <div className="flex flex-col items-center space-y-4 border border-dotted md:border-l-gray-500 w-full md:w-6/12 lg:w-4/12 p-2">
                  {/* Room Types */}
                  <div className="mt-4 grid grid-cols-4 md:grid-cols-2 gap-4 text-red-500">
                    {/* {JSON.parse(hotel.types).map((type, index) => (
                    <button
                      key={index}
                      className="px-1 py-1 border border-red-500 rounded-full text-[10px] md:text-sm w-16 md:w-24 hover:bg-red-500 hover:text-white"
                    >
                      {type.name}
                    </button>
                  ))} */}
                  </div>
                  {/* Details Button */}
                  <Link href={route('hotel.show', { id: hotel.id })} className="mt-4 px-4 py-3 md:px-8 md:py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 text-sm md:text-lg">
                    See Details
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default HotelCards;