import React, { useState, useEffect } from 'react'
import { FaCalendarAlt, FaUser, FaWifi, FaTv, FaSwimmer, FaUtensils, FaSpa, FaSwimmingPool, FaParking, FaTimes } from 'react-icons/fa';
import { FaCheck } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { addBooking } from '../../../store/bookingSlice';
import { Link, usePage, router } from '@inertiajs/react';
import Cookies from "js-cookie";
const iconMapping = {
  FaWifi: <FaWifi />,
  FaUtensils: <FaUtensils />,
  FaSpa: <FaSpa />,
  FaSwimmingPool: <FaSwimmingPool />,
  FaParking: <FaParking />,
};

const TypeIconMapping = {
  FaCheck: <FaCheck />,
  FaTimes: <FaTimes />,
};

const AvailableRoom = ({ hotel }) => {
  console.log(hotel)
  const date = new Date();
  date.setDate(date.getDate() + 2);
  const [hotelRooms, setHotelRooms] = useState([]);
  const [checkInDate, setCheckInDate] = useState( new Date().toISOString().split("T")[0]);
  const [checkOutDate, setCheckOutDate] = useState(date.toISOString().split("T")[0]);
  const [selectedPeople, setSelectedPeople] = useState("2 persons");
  const { auth } = usePage().props;
  const dispatch = useDispatch();
  const options = { day: "numeric", month: "long", year: "numeric" };
  const newDateString = date.toLocaleDateString("en-US", options);

  const handleBookNow = (id, price) => {
    if (!auth.user) {
      console.log(router)
      router.visit('/login');
      return;
    }
    const bookingData = {
      type: 'hotel',
      id: hotel.id,
      name: hotel.name,
      price: price,
      additional_info: {
        hotel_location: hotel.location,
        room_id: id,
        checkInDate:checkInDate,
        checkOutDate:checkOutDate
      },
    };
    dispatch(addBooking(bookingData));
    router.visit(route('checkout'));
  };
  const defaultImage = '/storage/images/hotel.jpg';

  return (
    <div id="availablity">
      <div className="max-w-4xl  my-8 ">
        <h2 className="text-2xl font-bold mb-4">Availability</h2>
        <div className="flex flex-col md:flex-row rounded-lg overflow-hidden border border-red-500 text-[8px] md:text-lg">
          {/* Date Picker Section */}
          <div className="flex items-center px-4 py-3  flex-grow ">
            <div className='flex items-center'>
              <FaCalendarAlt className="text-gray-500 mr-2 text-[15px]" />
              <input
                type="date"
                className="text-gray-400 text-sm border-0 p-2 rounded"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
              />
            </div>
            
          </div>

           <div className="flex items-center px-4 py-3  flex-grow border border-l-red-600 ">
            <div className='flex items-center'>
              <FaCalendarAlt className="text-gray-500 mr-2 text-[15px]" />
              <input
                type="date"
                className="text-gray-400 text-sm border-0 p-2 rounded"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
              />
            </div>
            
          </div>

          {/* Guests Section */}
          <div className="flex items-center justify-between px-4 py-3 flex-grow border border-l-red-600 ">
            <div className='flex items-center'>
              <FaUser className="text-gray-500 mr-2 mt-1 text-[15px]" />
              <select
                className="border-none outline-none bg-transparent text-gray-600"
                value={selectedPeople}
                onChange={(e) => setSelectedPeople(e.target.value)}
              >
                <option value="2 persons">2 persons</option>
                <option value="3 persons">3 persons</option>
                <option value="4 persons">4 persons</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <button className="bg-red-500 text-white font-semibold px-6 py-3  hover:bg-red-600 rounded-md">
            Search Availability
          </button>
        </div>
      </div>
      <div>
        {hotelRooms.length > 0 ? (
          hotelRooms.map((room) => (
            <div key={room.id} className="min-h-[250px] flex lg:flex-row flex-col px-3 py-4 gap-5  border border-gray-400 rounded-lg shadow-sm my-4 ">

              <div className="w-full md:w-[50%] lg:w-[25%] ">
                <img
                  src={defaultImage || (hotel.images && hotel.images[0])}
                  alt={room.room_type}
                  className="rounded-xl overflow-hidden w-full h-full object-cover"
                />
              </div>

              <div className='flex w-full lg:w-[75%] justify-between p-5'>
                <div className=' w-[60%] mt-4 md:mt-0 flex flex-col gap-5  '>
                  <h3 className="text-base sm:text-[24px] font-[600] leading-[28px] flex gap-4">{room.room_type} <spn className="text-red-500 flex text-lg mt-1"><FaUser /><FaUser /></spn></h3>
                  <p className="text-gray-500 text-sm flex gap-2"><span className='text-red-500 mt-1'><FaCheck />
                  </span> Free cancellation before {newDateString}</p>
                  <ul className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 text-sm gap-4">
                    {hotel.facilities.map((facility, index) => (
                      <li key={index} className="text-gray-800 flex items-center mb-4 opacity-60">
                        <span className="text-white bg-red-500 p-1 rounded-md text-sm sm:text-lg mr-1 sm:mr-2" >{iconMapping[facility.icon]}
                        </span>
                        <span className='text-[10px] sm:text-sm'>{facility.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-[20%] flex flex-col items-center justify-between">
                  <div className='flex gap-2 justify-center lg:items-end flex-col lg:text-end'>
                    <p className="text-gray-500 text-base lg:text-sm">From</p>
                    <p className="text-2sm font-bold ">${room.price}</p>
                    <p className="text-gray-500 text-base lg:text-sm">/night</p>
                    <p className="text-red-500 text-base lg:text-sm">Total: ${room.price}</p>

                  </div>
                  <button onClick={() => handleBookNow(room.id, room.price)} className=" bg-red-500 text-[16px] leading-[19px] text-white font-[500] px-2 py-1 rounded-full w-32 h-[30px] lg:w-[130px] hover:bg-red-600 ">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">No rooms available</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AvailableRoom