import React, { useState, useEffect } from 'react';
import { CiHeart } from 'react-icons/ci';
import { MdLocationPin } from "react-icons/md";
import ImageGallery from '../snippets/ImageGallery';
import { Link, usePage, router } from '@inertiajs/react';
import Cookies from "js-cookie";

const CarProfile = (car) => {
  const { auth } = usePage().props;
  const [wishList, setWishList] = useState(false);
  const images = car.car.car_images.map(image => '/storage/' + image);
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(Cookies.get("favorites") || "[]");
  });
  useEffect(() => {
    setWishList(favorites.some((fav) => fav.id === car.car.id));
  }, [favorites]);
  const ScrollTo = () => {
    if (!auth.user) {
      console.log(router)
      router.visit('/login');
      return;
    }
    const section = document.getElementById("car-availablity");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  const handleFavorite = () => {
    const isFavorited = favorites.some((fav) => fav.id === car.car.id );
    let updatedFavorites = [...favorites];
    if (isFavorited) {
      updatedFavorites = updatedFavorites.filter((item) => item.id !== car.car.id);
    } else {
      updatedFavorites.push({ id:car.car.id, name: car.car.car_name, image: car.car.car_images[0], type: "car" });
    }
    Cookies.set("favorites", JSON.stringify(updatedFavorites), { expires: 30 });
    setFavorites(updatedFavorites);
  }

  return (
    <>
      {/* Breadcrumb */}
      <nav className="text-sm text-red-500 mb-4 flex flex-wrap gap-1">
        <Link href="/" className="hover:text-red-800">Home</Link> &gt;
        <Link href="/car" className="hover:text-red-800"> Cars</Link> &gt;
        <span className="text-red-400"> {car.car.car_name}</span>
      </nav>

      {/* Title and Rating */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between my-6 space-y-4 md:space-y-0">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold"> {car.car.car_name}</h1>
          <div className="flex items-center text-gray-500 text-xs sm:text-sm">
            <MdLocationPin className="text-red-500 text-xl" />
            <p>Lahore, Punjab, Pakistan</p>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-3 justify-between">
          <CiHeart onClick={handleFavorite} className={`text-3xl sm:text-4xl text-red-500 ${wishList ? 'bg-red-500 text-white rounded-[50%]' : ''}`} />
          <div className="text-center sm:text-right">
            <p className="text-[8px] sm:text-sm text-gray-500">from</p>
            <p className="text-sm sm:text-2xl font-semibold text-gray-800">${car.car.price}</p>
          </div>
          <button onClick={ScrollTo} className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">
            Book Now
          </button>

        </div>
      </div>

      <div className="flex gap-3 md:gap-6">
        {/* Left Section: Image Gallery */}
        <div className='w-full'>
          <ImageGallery images={images} />
        </div>
      </div>
    </>
  );
};

export default CarProfile;
