import React from 'react';
import { CiHeart } from 'react-icons/ci';
import { LuParkingMeter } from "react-icons/lu";

import { MdLocationPin } from "react-icons/md";
import { FaMapMarkerAlt, FaCity } from 'react-icons/fa';
import ImageGallery from '../Snippets/ImageGallery';
const RoomProfile = () => {
  const images = [
    "storage/images/hotel0.jpg",
    "storage/images/hotel2.jpg",
    "storage/images/hotels3.png",
    "storage/images/hotel4.png",
    "storage/images/hotel8.jpg",
    "storage/images/hotel7.jpg"
  ];
  return (
    <div className="">
      {/* Breadcrumb */}
      <nav className="text-sm text-red-500 mb-4">
        <a href="#" className="hover:text-red-800">Home</a> &gt;
        <a href="#" className="hover:text-red-800"> Hotels</a> &gt;
        <a href="#" className="hover:text-red-800"> Pakistan</a> &gt;
        <a href="#" className="hover:text-red-800"> Lahore</a> &gt;
        <span className="text-red-400"> Avari Hotel Lahore</span>
      </nav>

      {/* Title and Rating */}
      <div className='my-12'>
        <div className="md:flex items-center justify-between">
          <h1 className="max-[320px]:text-base text-lg md:text-3xl font-bold">Avari Hotel Lahore  <span className="text-xl text-yellow-500 ml-4">{'★'.repeat(5)}</span></h1>
          <div className="md:flex justify-between space-x-2  hidden">
            <span className='text-lg md:text-xl lg:text-4xl text-red-500 md:mt-4'><CiHeart /></span>
            <div className='flex flex-col'><p className='text-xs md:text-sm text-gray-500 text-right'>from</p> <p className="text-base md:text-2xl font-semibold text-gray-800">$200</p></div>

            <button className="px-2 lg:px-6 py-1 mt-1 lg:mt-0 lg:py-2  bg-red-500 text-white text-[10px] md:text-sm rounded-full">Book Now</button>
          </div>
        </div>
        <div>

          <div className="items-center mt-2 md:mt-0 space-x-2 mb-1">

            <span className=" bg-red-500 text-white text-[10px] md:text-sm px-2  rounded-lg">4.2</span>
            <span className='text-gray-600 text-[10px] md:text-sm'>Good</span>
            <span className="text-gray-500 text-[8px] md:text-sm">(2365 reviews) | #02 of 102 hotels in Lahore</span>
          </div>
          <div className="items-center space-x-2 mb-1">
            <span className='text-red-500 text-[10px] md:text-sm inline-block'><MdLocationPin /></span>
            <span className="text-gray-500 text-[8px] md:text-sm"> 87 - Shahrah-e-Quaid-e-Azam, 54000 Lahore, Pakistan</span>
          </div>
        </div>
      </div>


      <div className='flex gap-4 md:gap-8'>
        <div className='w-3/4'>
          <ImageGallery images={images} />
        </div>
        <div className='w-1/4'>
          <div className="h-44 lg:h-64 relative bg-gray-300 mb-4 rounded-md overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-md "
              style={{ backgroundImage: `url('storage/images/map.jpg')` }}
            >
              <span className="absolute inset-0 flex items-center justify-center text-white">
                <div className="py-1 px-2 bg-gray-500 opacity-50 rounded-xl text-[6px] sm:text-sm lg:text-lg">Show on map</div>
              </span>
            </div>
          </div>
          <div className='text-[8px] lg:text-sm' >
            <h2 className=" text-sm lg:text-lg font-bold my-2 lg:my-8">Property highlights</h2>

            {/* Perfect for stay */}
            <div className=" max-[320px]:mb-2 mb-8 text-gray-700">
              <h3 className="font-semibold text-base">Perfect for stay</h3>
              <p className="flex items-start max-[320px]:text-[6px] text-sm  mt-2 ">
                <FaMapMarkerAlt className="mr-2 mt-1" />
                Excellent location: Ranked well by recent visitors (4.2) Rooms with:
              </p>
            </div>

            {/* Faithful Clients */}
            <div className="max-[320px]:mb-2 mb-4 lg:mb-8 text-gray-700">
              <h3 className="font-semibold text-base">Faithful Clients</h3>
              <p className="flex items-start max-[320px]:text-[6px]  text-sm mt-2">
                <FaMapMarkerAlt className="mr-2 mt-1" />
                Excellent location: Ranked well by recent visitors (4.2) Rooms with:
              </p>
            </div>

            {/* Rooms with */}
            <div className='text-gray-700'>
              <h3 className="font-semibold text-base">Rooms with</h3>
              <ul className="mt-2 space-y-2 max-[320px]:text-[6px] text-sm">
                <li className="flex items-start text-sm">
                  <FaCity className="mr-2 mt-1" />
                  View of the city
                </li>
                <li className="flex items-start text-sm">
                  <LuParkingMeter className="mr-2 mt-1 " />
                  Free Parking in the Hotel
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Heart Icon, Price, and Book Now Button */}
      <div className="flex  justify-end items-center mt-6 space-x-2 md:hidden order-last md:order-none">
        <span className='text-lg md:text-xl lg:text-4xl text-red-500 md:mt-4'><CiHeart /></span>
        <div className='flex flex-col'>
          <p className='text-xs md:text-sm text-gray-500 text-right'>from</p>
          <p className="text-base md:text-2xl font-semibold text-gray-800">$200</p>
        </div>
        <button className="px-2 lg:px-6 py-1 mt-1 lg:mt-0 lg:py-2 bg-red-500 text-white text-[10px] md:text-sm rounded-full">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default RoomProfile;
