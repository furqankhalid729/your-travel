import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addBooking } from '../../../store/bookingSlice';
import { CiHeart } from 'react-icons/ci';
import { LuParkingMeter } from "react-icons/lu";
import { MdLocationPin } from "react-icons/md";
import { FaMapMarkerAlt, FaCity } from 'react-icons/fa';
import ImageGallery from '../snippets/ImageGallery';
import { Link, usePage, router } from '@inertiajs/react';
import Cookies from "js-cookie";
const RoomProfile = ({ hotel, hotelRooms }) => {
  console.log(hotel)
  const [bookingDate, setBookingDate] = useState("");
  const images = JSON.parse(hotel.images).map(image => '/storage/' + image);
  const { auth } = usePage().props;
  const dispatch = useDispatch();
  const [wishList, setWishList] = useState(false);

  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(Cookies.get("favorites") || "[]");
  });
  useEffect(() => {
    setWishList(favorites.some((fav) => fav.id === hotel.id));
  }, [favorites]);

  const handleBookNow = () => {
    if (!auth.user) {
      console.log(router)
      router.visit('/login');
      return;
    }
    const bookingData = {
      type: 'hotel',
      id: hotel.id,
      name: hotel.name,
      price: hotelRooms[0].price,
      additional_info: {
        hotel_location: hotel.location,
        room_id: hotelRooms[0].id
      },
    };
    dispatch(addBooking(bookingData));
    router.visit(route('checkout'));
  };

  const ScrollTo = () => {
    if (!auth.user) {
      console.log(router)
      router.visit('/login');
      return;
    }
    const section = document.getElementById("availablity");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFavorite = () => {
    const isFavorited = favorites.some((fav) => fav.id === hotel.id);
    let updatedFavorites = [...favorites];
    if (isFavorited) {
      updatedFavorites = updatedFavorites.filter((item) => item.id !== hotel.id);
    } else {
      updatedFavorites.push({ id: hotel.id, name: hotel.name, image: JSON.parse(hotel.images)[0], type: "hotel" });
    }
    Cookies.set("favorites", JSON.stringify(updatedFavorites), { expires: 30 });
    setFavorites(updatedFavorites);
  }

  const openInMaps = () => {
    const encodedLocation = encodeURIComponent(hotel.location);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;
    window.open(googleMapsUrl, "_blank");
  }


  return (
    <div className="">
      {/* Breadcrumb */}
      <nav className="text-sm text-red-500 mb-4">
        <Link href="/" className="hover:text-red-800">Home</Link> &gt;
        <Link href={route('hotel.frontendIndex')} className="hover:text-red-800"> Hotels</Link> &gt;
        <span className="text-red-400">{hotel.name}</span>
      </nav>

      {/* Title and Rating */}
      <div className='my-12'>
        <div className="md:flex items-center justify-between">
          <h1 className="max-[320px]:text-base text-lg md:text-3xl font-bold">{hotel.name}</h1>
          <div className="md:flex justify-between space-x-2  hidden">
            <span onClick={handleFavorite} className={`text-lg md:text-xl lg:text-4xl text-red-500 md:mt-4 ${wishList ? 'bg-red-500 text-white rounded-[50%]' : ''}`}><CiHeart /></span>
            <div className='flex flex-col'><p className='text-xs md:text-sm text-gray-500 text-right'>from</p> <p className="text-base md:text-2xl font-semibold text-gray-800">${hotelRooms[0].price || 200}</p></div>
            <button onClick={ScrollTo} className="px-2 lg:px-6 py-1 mt-1 lg:mt-0 lg:py-2  bg-red-500 text-white text-[10px] md:text-sm rounded-full">Book Now</button>
          </div>
        </div>
        <div>
          <div className="items-center space-x-2 mb-1">
            <span className='text-red-500 text-[14px] md:text-[10px] md:text-sm inline-block'><MdLocationPin /></span>
            <span className="text-gray-500 text-[14px] md:text-[10px] md:text-sm"> {hotel.location}</span>
          </div>
        </div>
      </div>


      <div className='flex flex-col md:flex-row gap-4 md:gap-8'>
        <div className='w-full md:w-3/4'>
          <ImageGallery images={images} />
        </div>
        <div className='w-full md:w-1/4'>
          <div className="h-44 lg:h-64 relative bg-gray-300 mb-4 rounded-md overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-md "
              style={{ backgroundImage: `url('/storage/images/map.jpg')` }}
            >
              <span className="absolute inset-0 flex items-center justify-center text-white">
                <button onClick={openInMaps} className="py-1 px-2 bg-gray-500 opacity-50 rounded-xl text-[6px] sm:text-sm lg:text-lg">Show on map</button>
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
        <button onClick={ScrollTo} className="px-2 lg:px-6 py-1 mt-1 lg:mt-0 lg:py-2 bg-red-500 text-white text-[10px] md:text-sm rounded-full">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default RoomProfile;
