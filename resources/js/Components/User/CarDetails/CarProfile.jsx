import React from 'react';
import { CiHeart } from 'react-icons/ci';
import { CgProfile } from "react-icons/cg";
import { GrStatusGood } from "react-icons/gr";
import { MdLocationPin } from "react-icons/md";
import ImageGallery from '../Snippets/ImageGallery';
import { RiArrowRightSLine } from 'react-icons/ri';
import { Link } from '@inertiajs/react';

const CarProfile = () => {
  const images = [
    "/carde.png",
    "/carde1.png",
    "/carde2.png",
    "/carde3.png",
    "/carde4.png",
    "/carde5.png"
  ];

  return (
    <>
      {/* Breadcrumb */}
      <nav className="text-sm text-red-500 mb-4 flex flex-wrap gap-1">
        <a href="#" className="hover:text-red-800">Home</a> &gt;
        <a href="#" className="hover:text-red-800"> Cars</a> &gt;
        <a href="#" className="hover:text-red-800"> Pakistan</a> &gt;
        <a href="#" className="hover:text-red-800"> Lahore</a> &gt;
        <span className="text-red-400"> Audi A4 2022</span>
      </nav>

      {/* Title and Rating */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between my-6 space-y-4 md:space-y-0">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Audi A4 2022</h1>
          <div className="flex items-center space-x-2 mb-2">
            <span className="bg-red-500 text-white text-xs sm:text-sm px-2 rounded-lg">4.2</span>
            <span className="text-gray-600 text-xs sm:text-sm">Good</span>
            <span className="text-gray-500 text-xs sm:text-sm">(2365 reviews)</span>
          </div>
          <div className="flex items-center text-gray-500 text-xs sm:text-sm">
            <MdLocationPin className="text-red-500 text-xl" />
            <p>Lahore, Punjab, Pakistan</p>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-3 justify-between">
          <CiHeart className="text-3xl sm:text-4xl text-red-500" />
          <div className="text-center sm:text-right">
            <p className="text-[8px] sm:text-sm text-gray-500">from</p>
            <p className="text-sm sm:text-2xl font-semibold text-gray-800">$200/day</p>
          </div>

<Link to='/car-booking'>
       
          <button className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">

            Book Now
          </button>
          </Link>
    
        </div>
      </div>

      <div className="flex gap-3 md:gap-6">
        {/* Left Section: Image Gallery */}
        <div className='w-full'>
   <ImageGallery images={images} />
   </div>

        {/* Right Section: Map & Profile */}
        <div className='w-1/4 hidden'>
<div className="h-20 lg:h-44 relative bg-gray-300 mb-4 rounded-md overflow-hidden ">
  <div
    className="absolute inset-0 bg-cover bg-center rounded-md"
    style={{ backgroundImage: `url('/map.jpg')` }}
  >
    <span className="absolute inset-0 flex items-center justify-center text-white">
      <div className="py-1 px-2 bg-gray-500 opacity-50 rounded-xl max-[320px]:text-[6px] text-[8px] md:text-lg">Show on map</div>
    </span>
  </div>
</div>
<div className='max-[320px]:text-[5px] text-[8px] lg:text-sm ' >
            {/* Driver Info */}
            <div className="flex items-center space-x-1 md:space-x-4">
              <img
                src="/avatardriver.png"
                alt="Driver"
                className="w-4 h-4 xs:w-8 lg:w-16 xs:h-8 lg:h-16 rounded-full object-cover"
              />
              <div className="flex items-center text-[8px] md:text-sm lg:text-lg font-medium text-gray-800">
                Muhammad Ahmed <GrStatusGood className="md:ml-2 text-gray-400" />
              </div>
            </div>

            <hr className="border-gray-300 my-2" />

            {/* Vendor Info */}
            <div className="space-y-1">
              <div className="flex items-center text-gray-600">
                <CgProfile className="mr-2 text-xl text-red-500" />
                <span>Vendor</span>
              </div>
              <div className="flex items-center text-gray-600">
                <GrStatusGood className="mr-2" />
                <span>110 Reviews</span>
              </div>
            </div>

            <hr className="border-gray-300 my-2" />

            {/* Contact Info */}
            <div className="space-y-2">
              <div>
                <div className="flex items-center text-gray-600">
                  <RiArrowRightSLine className="sm:mr-2 text-sm" />
                  <span>Email</span>
                </div>
                <h3 className="text-[6px] md:text-xs lg:text-sm flex flex-wrap text-gray-400 ml-2 sm:ml-6 break-all whitespace-normal">
  muhammadahmed12@gmail.com
</h3>


              </div>
              <div>
                <div className="flex items-center text-gray-600">
                  <RiArrowRightSLine className="sm:mr-2 text-sm" />
                  <span>Phone Number</span>
                </div>
                <h3 className="text-[8px] md:text-xs lg:text-sm text-gray-400 ml-2 sm:ml-6">+923076859695</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarProfile;
