import React, { useState } from 'react';
import { FaCarSide, FaChevronDown, FaLanguage, FaSnowflake, FaUser } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import { Link } from "@inertiajs/react";
import Cookies from "js-cookie";

const iconMapping = {
  FaSnowflake: <FaSnowflake />,
  FaCarSide: <FaCarSide />,
  FaLanguage: <FaLanguage />,
  FaUser: <FaUser />,
};

const CarTab = ({ cars }) => {
  const [sortOption, setSortOption] = useState('Best Matches');

  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(Cookies.get("favorites") || "[]");
  });

  const handleFavorite = (id, name, image) => {
    const isFavorited = favorites.some((fav) => fav.id === id);
    let updatedFavorites = [...favorites];
    if (isFavorited) {
      updatedFavorites = updatedFavorites.filter((car) => car.id !== id);
    } else {
      updatedFavorites.push({ id, name: name, image: image, type:"car" });
    }
    Cookies.set("favorites", JSON.stringify(updatedFavorites), { expires: 30 });
    setFavorites(updatedFavorites);
  };

  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    setSortOption(selectedOption);

    // Update URL parameters
    const params = new URLSearchParams(window.location.search);
    params.set('sort', selectedOption);
    window.history.pushState({}, '', `${window.location.pathname}?${params.toString()}`);
  };

  return (
    <div className=''>
      <div className="flex justify-between items-center p-4 ">
        <h2 className="text-[12px] md:text-xl font-semibold">{cars.length} Cars Available</h2>
        <div className="flex items-center space-x-1 text-gray-700 text-[12px] md:text-xl cursor-pointer">
          <span>Sort By:</span>
          <select
            value={sortOption}
            onChange={handleSortChange}
            className="font-semibold bg-transparent border-none outline-none cursor-pointer text-[12px] md:text-xl"
          >
            <option value="Best Matches">Best Matches</option>
            <option value="Price: Low to High">Price: Low to High</option>
            <option value="Price: High to Low">Price: High to Low</option>
            <option value="Rating">Rating</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 py-8">
        {cars.map((car) => {
          const isFavorited = favorites.some((fav) => fav.id === car.id);
          return (
            <div key={car.id} className="bg-white shadow-md rounded-lg overflow-hidden w-full flex flex-col lg:flex-row p-4">
              {/* car image */}
              <div className="relative w-full lg:w-56 md:h-56">
                <img src={`/storage/${car.car_images[0]}`} alt={car.car_name} className="w-full h-full object-cover rounded-lg" />
                <div onClick={() => handleFavorite(car.id, car.name, car.car_images[0])} className={`absolute top-2 right-2 rounded-full p-1 shadow cursor-pointer transition ${isFavorited ? "bg-red-500 text-white" : "bg-white text-gray-500"
                  }`}>
                  <CiHeart className="text-[8px] md:text-2xl" />
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
                    {car.tags?.split(',').map((tag, index) => (
                      <button key={index} className="w-full sm:w-[60px] justify-center h-8 text-[10px] text-red-500 border border-red-500 rounded-[50px] px-2 py-[2px] flex items-center hover:bg-red-500 hover:text-white transition">
                        {tag.trim()}
                      </button>
                    ))}
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
          )
        })}
      </div>
    </div>
  );
};

export default CarTab;