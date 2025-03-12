import React from 'react';
import { useDispatch } from 'react-redux';
import { addBooking } from '../../../store/bookingSlice';
import { CiHeart } from 'react-icons/ci';
import { MdLocationPin } from "react-icons/md";
import ImageGallery from '../snippets/ImageGallery';
import { Link, usePage, router } from '@inertiajs/react';

const CarProfile = (car) => {
  const { auth } = usePage().props;
  console.log("CarProfile :", auth);
  const images = car.car.car_images.map(image => 'http://127.0.0.1:8000/storage/' + image);
  const dispatch = useDispatch();
  const handleBookNow = () => {
    if (!auth.user) {
      console.log(router)
      router.visit('/login');
      return;
    }
    const bookingData = {
      type: 'car',
      id: car.car.id,
      name: car.car.car_name,
      price: car.car.price,
      additional_info: {
        pickup_location: 'Lahore, Punjab, Pakistan',
        dropout_location: "Islamabad, Pakistan",
        pickup_date: '02-02-2024',
        dropout_date: '03-03-2024',
      },
    };
    dispatch(addBooking(bookingData));
    router.visit("/car-booking");
  };

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
            <p className="text-sm sm:text-2xl font-semibold text-gray-800">${car.car.price}</p>
          </div>
          <button onClick={handleBookNow} className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">
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
