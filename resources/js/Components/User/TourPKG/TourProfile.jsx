import React from 'react';
import { useDispatch } from 'react-redux';
import { addBooking } from '../../../store/bookingSlice';
import { CiHeart } from 'react-icons/ci';
// import { LuParkingCircle } from "react-icons/lu";

import { MdLocationPin } from "react-icons/md";
import { FaMapMarkerAlt, FaCity } from 'react-icons/fa';
import ImageGallery from '../Snippets/ImageGallery';
import { Link } from '@inertiajs/react';
const TourProfile = () => {
  const dispatch = useDispatch();
  const images = [
    "storage/images/tour5.jpg",
    "storage/images/tour.jpeg",
    "storage/images/tour1.jpeg",
    "storage/images/tour2.jpeg",
    "storage/images/tour3.jpeg",
    "storage/images/tour4.jpeg"
  ];

  const handleBookNow = () => {
    const bookingData = {
      type: 'tour',
      id: '1', // Replace with actual tour ID
      name: 'Lake Lucerne: Bodies Of Water',
      price: '200',
      additional_info: {
        tour_location: 'Swetzerland',
      },
    };
    dispatch(addBooking(bookingData));
  };
  const tourData = [
    { label: "Duration", value: "6 Days" },
    { label: "Location", value: "Zurich" },
    { label: "Food", value: "2 times a day" },
    { label: "Tour type", value: "Family Tour" },
    { label: "Persons", value: "3 persons" },
    { label: "Price", value: "$200" },
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
          <h1 className="max-[320px]:text-base text-lg md:text-2xl lg:text-3xl font-bold">Lake Lucerne: Bodies Of Water </h1>
          <div className="flex items-center space-x-2 lg:space-x-6">
            <span className='text-lg md:text-xl lg:text-4xl text-red-500 md:mt-4'><CiHeart /></span>
            <div className='flex flex-col'><p className='text-xs md:text-sm text-gray-500 text-right'>from</p> <p className="text-base md:text-2xl font-semibold text-gray-800">$200</p></div>

            <Link href="/car-booking">
              <button onClick={handleBookNow} className="px-2 lg:px-6 py-1 mt-1 lg:mt-0 lg:py-2  bg-red-500 text-white text-[10px] md:text-sm rounded-full">Book Now</button>
            </Link>
          </div>
        </div>
        <div>

          <div className="items-center mt-2 md:mt-0 space-x-2 mb-1">

            <span className=" bg-red-500 text-white text-[10px] md:text-sm px-2  rounded-lg">4.2</span>
            <span className='text-gray-600 text-[10px] md:text-sm'>Good</span>
            <span className="text-gray-500 text-[8px] md:text-sm">(2365 reviews) </span>
          </div>
          <div className="items-center space-x-2 mb-1">
            <span className='text-red-500 text-[10px] md:text-sm inline-block'><MdLocationPin /></span>
            <span className="text-gray-500 text-[8px] md:text-sm">Zurich </span>
          </div>
        </div>
      </div>

      <div className='flex gap-4 md:gap-8'>
        <div className='w-3/4'>
          <ImageGallery images={images} />
        </div>
        <div className='w-1/4'>
          <div className="h-32 lg:h-72 relative bg-gray-300 mb-4 rounded-md overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-md"
              style={{ backgroundImage: `url('storage/images/map.jpg')` }}
            >
              <span className="absolute inset-0 flex items-center justify-center text-white">
                <div className="py-1 px-2 bg-gray-500 opacity-50 rounded-xl max-[320px]:text-[6px] text-[8px] md:text-lg">Show on map</div>
              </span>
            </div>
          </div>
          <div className='max-[320px]:text-[5px] text-[8px] lg:text-sm' >
            <h2 className="text-sm lg:text-lg font-semibold my-4 lg:my-8">Details</h2>


            {tourData.map((item, index) => (
              <div key={index} className="flex justify-between text-black">
                <div className="py-2 font-medium ">{item.label}</div>
                <div className="py-2">{item.value}</div>
              </div>
            ))}


          </div>
        </div>
      </div>
    </div>
  );
};

export default TourProfile;
