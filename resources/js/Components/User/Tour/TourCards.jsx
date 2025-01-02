import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { CiHeart } from 'react-icons/ci';
import { Link } from '@inertiajs/react';



function TourCards() {
  const tours = [
    {
      id: 1,
      image: "storage/images/tour.jpeg",
      name: "Lake Lucerne : Bodies of water",
      location: "Zurich",
      duration: "4 days, 3 nights",
      Recomendation: 100,
      description: "Charming old town by a stunning lake with medieval streets, mountain views, and diverse shops and eateries. Scenic boat rides connect to mountain adventures.",
      rating: 4.2,
      reviews: 236,
      price: 700,

    },
    {
      id: 2,
      image: "storage/images/tour4.jpeg",
      name: "Lake Lucerne : Bodies of water",
      location: "Zurich",
      duration: "4 days, 3 nights",
      Recomendation: 100,
      description: "Charming old town by a stunning lake with medieval streets, mountain views, and diverse shops and eateries. Scenic boat rides connect to mountain adventures.",
      rating: 4.2,
      reviews: 236,
      price: 700,

    },
    {
      id: 3,
      image: "storage/images/tour1.jpeg",
      name: "Lake Lucerne : Bodies of water",
      location: "Zurich",
      duration: "4 days, 3 nights",
      Recomendation: 100,
      description: "Charming old town by a stunning lake with medieval streets, mountain views, and diverse shops and eateries. Scenic boat rides connect to mountain adventures.",
      rating: 4.2,
      reviews: 236,
      price: 700,

    },
    {
      id: 4,
      image: "storage/images/tour2.jpeg",
      name: "Lake Lucerne : Bodies of water",
      location: "Zurich",
      duration: "4 days, 3 nights",
      Recomendation: 100,
      description: "Charming old town by a stunning lake with medieval streets, mountain views, and diverse shops and eateries. Scenic boat rides connect to mountain adventures.",
      rating: 4.2,
      reviews: 236,
      price: 700,

    },
    {
      id: 5,
      image: "storage/images/tour4.jpeg",
      name: "Lake Lucerne : Bodies of water",
      location: "Zurich",
      duration: "4 days, 3 nights",
      Recomendation: 100,
      description: "Charming old town by a stunning lake with medieval streets, mountain views, and diverse shops and eateries. Scenic boat rides connect to mountain adventures.",
      rating: 4.2,
      reviews: 236,
      price: 700,
    },
    {
      id: 6,
      image: "storage/images/tour3.jpeg",
      name: "Lake Lucerne : Bodies of water",
      location: "Zurich",
      duration: "4 days, 3 nights",
      Recomendation: 100,
      description: "Charming old town by a stunning lake with medieval streets, mountain views, and diverse shops and eateries. Scenic boat rides connect to mountain adventures.",
      rating: 4.2,
      reviews: 236,
      price: 700,

    },
  ];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  return (
    <div className=''>
      <div className="flex justify-between py-6">
        <h2 className="text-[8px] sm:text-xl font-semibold text-black ">32 Tour available</h2>
        <div className="relative flex gap-2 text-gray-900 text-[8px] md:text-sm">
          <span className="font-semibold">Sort by:</span>
          <button
            onClick={toggleDropdown}
            className="flex text-gray-900 focus:outline-none"
          >
            Services <IoIosArrowDown className="mt-1" />
          </button>
          {isDropdownOpen && (
            <ul className="absolute top-4 bg-white text-black mt-2 rounded-md shadow-lg w-[4.5rem] md:w-32 z-10">
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

      {/* tour Cards */}
      <div>
        {tours.map((tour) => (
          <div key={tour.id} className="flex flex-col md:flex-row gap-6 bg-white shadow-md rounded-lg p-2 border md:border-gray-200 mt-6">

            <div className='w-full md:w-[33.33%]'>
              {/* Left - tour Image and Favorite Icon */}
              <div className="relative  md:block">
                <img src={tour.image} className="w-full md:h-full rounded-lg" />
                <div className="absolute top-2 right-2 bg-red-500 p-2 rounded-full shadow-md">
                  <CiHeart className="text-2xl text-white" />
                </div>
              </div>
            </div>
            <div className='flex flex-col md:flex-row w-full md:w-[77%]'>
              {/* Middle - tour Information */}
              <div className="flex flex-col w-full md:w-8/12">
                <h2 className="text-lg ms:text-xl font-semibold text-gray-900">{tour.name}</h2>
                <p className="text-gray-600 text-xs sm:text-sm">
                  {tour.location}

                </p>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">{tour.duration}</p>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">{tour.Recomendation} % Recommended</p>
                <p className="text-gray-500 text-xs sm:text-sm mt-2">{tour.description}</p>


              </div>
              {/* Right Side - Price and Action */}
              <div className="flex flex-col items-end w-full md:w-4/12 p-2">

                <div className='flex w-full justify-between items-center mt-3 md:mt-0 md:w-auto flex-row md:flex-col'>
                  <div>
                    <div className='flex gap-x-2'>
                      <p className=" text-gray-600 text-xs sm:text-sm">{tour.rating >= 4 ? "Good" : "Average"}</p>
                      <span className="bg-red-500 text-white  px-2 text-xs sm:text-sm  rounded-xl ">{tour.rating}</span>
                    </div>
                    <p className="text-gray-500 text-[12px]">({tour.reviews} reviews)</p>
                  </div>

                  <div className='mt-0 md:mt-6 text-right'>
                    <p className="text-gray-500 text-[12px] text-end">From</p>
                    <p className="text-black text-lg sm:text-xl">$ {tour.price}</p>
                  </div>
                </div>
                {/* Details Button */}

                <Link to="/tour-pkg"  className="mt-4 px-4 lg:px-8 py-2 bg-red-500 text-white f rounded-full hover:bg-red-600 text-xs sm:text-sm ">
                  See Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TourCards;