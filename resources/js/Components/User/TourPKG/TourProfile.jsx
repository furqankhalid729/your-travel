import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addBooking } from '../../../store/bookingSlice';
import { CiHeart } from 'react-icons/ci';
import { MdLocationPin } from "react-icons/md";
import ImageGallery from '../snippets/ImageGallery';
import { Link, usePage, router } from '@inertiajs/react';
import Cookies from "js-cookie";
const TourProfile = ({ tour }) => {
  console.log(tour)
  const images = JSON.parse(tour.tour_images).map(image => '/storage/' + image);
  const { auth } = usePage().props;
  const dispatch = useDispatch();
  const [wishList, setWishList] = useState(false);
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(Cookies.get("favorites") || "[]");
  });
  useEffect(() => {
    setWishList(favorites.some((fav) => fav.id === tour.id));
  }, [favorites]);
  const handleBookNow = () => {
    if (!auth.user) {
      console.log(router)
      router.visit('/login');
      return;
    }
    const bookingData = {
      type: 'tour',
      id: tour.id,
      name: tour.name,
      price: tour.price,
      additional_info: {
        tour_location: tour.location,
        tour_id: tour.id
      },
    };
    dispatch(addBooking(bookingData));
    router.visit(route('checkout'));
  };
  const tourData = [
    { label: "Duration", value: tour.duration },
    { label: "Location", value: tour.location },
    { label: "Food", value: tour.food },
    { label: "Tour type", value: tour.tour_type },
    { label: "Persons", value: `${tour.persons} persons` },
    { label: "Price", value: `$${tour.price}` },
  ];
  const openInMaps = () => {
    const encodedLocation = encodeURIComponent(tour.location);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;
    window.open(googleMapsUrl, "_blank");
  }
  const handleFavorite = () => {
    const isFavorited = favorites.some((fav) => fav.id === tour.id);
    let updatedFavorites = [...favorites];
    if (isFavorited) {
      updatedFavorites = updatedFavorites.filter((item) => item.id !== tour.id);
    } else {
      updatedFavorites.push({ id: tour.id, name: tour.name, image: JSON.parse(tour.tour_images)[0], type: "tour" });
    }
    Cookies.set("favorites", JSON.stringify(updatedFavorites), { expires: 30 });
    setFavorites(updatedFavorites);
  }
  return (
    <div className="">
      {/* Breadcrumb */}
      <nav className="text-sm text-red-500 mb-4">
        <a href="#" className="hover:text-red-800">Home</a> &gt;
        <Link href={route('tour.frontendIndex')} className="hover:text-red-800"> Tours</Link> &gt;
        <a href="#" className="hover:text-red-800"> {tour.location}</a> &gt;
        <span className="text-red-400">{tour.name}</span>
      </nav>

      {/* Title and Rating */}
      <div className='my-12'>
        <div className="md:flex items-center justify-between">
          <h1 className="max-[320px]:text-base text-lg md:text-2xl lg:text-3xl font-bold">{tour.name}</h1>
          <div className="flex items-center space-x-2 lg:space-x-6">
            <span onClick={handleFavorite} className={`text-lg md:text-xl lg:text-4xl text-red-500 md:mt-4 ${wishList ? 'bg-red-500 text-white rounded-[50%]' : ''}`}><CiHeart /></span>
            <div className='flex flex-col'><p className='text-xs md:text-sm text-gray-500 text-right'>from</p> <p className="text-base md:text-2xl font-semibold text-gray-800">${tour.price}</p></div>
            <button onClick={handleBookNow} className="px-2 lg:px-6 py-1 mt-1 lg:mt-0 lg:py-2  bg-red-500 text-white text-[12px] md:text-sm rounded-full">Book Now</button>
          </div>
        </div>
        <div>
          <div className="items-center space-x-2 mb-1">
            <span className='text-red-500 text-[10px] md:text-sm inline-block'><MdLocationPin /></span>
            <span className="text-gray-500 text-[8px] md:text-sm">{tour.location}</span>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-4 md:gap-8'>
        <div className='w-full md:w-3/4'>
          <ImageGallery images={images} />
        </div>
        <div className='w-full md:w-1/4'>
          <div className="h-32 lg:h-72 relative bg-gray-300 mb-4 rounded-md overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-md"
              style={{ backgroundImage: `url('/storage/images/map.jpg')` }}
            >
              <span className="absolute inset-0 flex items-center justify-center text-white">
                <button onClick={openInMaps} className="py-1 px-2 bg-gray-500 opacity-50 rounded-xl text-[14px] md:text-[12px]">Show on map</button>
              </span>
            </div>
          </div>
          <div className='text-[14px]' >
            <h2 className="text-[14px] md:text-[12px] font-semibold my-4 lg:my-8">Details</h2>
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
