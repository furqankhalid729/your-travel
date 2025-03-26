import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeBooking } from "../../../store/bookingSlice";

const CarBooking = ({ setDisabled }) => {
  const bookings = useSelector((state) => state.booking.bookings);
  const dispatch = useDispatch();
  console.log(bookings)
  useEffect(() => {
    setDisabled(bookings.length === 0);
  }, [bookings]);

  if (bookings.length === 0) {
    return (
      <div className="flex flex-col w-full lg:w-[30%]">
        <div className="bg-white rounded-lg p-6 mt-2 border border-gray-300">
          No booking data available.
        </div>
      </div>);
  }
  const handleRemoveBooking = (id) => {
    dispatch(removeBooking(id));
  };

  const calculateTotalPrice = () => {
    return bookings.reduce((total, booking) => total + booking.price, 0);
  };

  const totalPrice = calculateTotalPrice();

  const renderBooking = (booking, index) => (
    <div key={index} className="w-full mb-4">
      <div className="sm:grid sm:grid-cols-1 px-4 flex flex-col gap-3 rounded-lg p-6 border border-gray-300">
        <div className="flex flex-col gap-1">
          <p className="text-[#808080] text-[14px] leading-[16px] font-[400]">
            {booking.type === 'car' ? 'Car Booking' : booking.type === 'hotel' ? 'Hotel Booking' : 'Tour Booking'}
          </p>
          <h3 className="text-[20px] leading-[24px] font-[700]">{booking.name}</h3>
          <p className="text-gray-500 mt-1">
            {booking.additional_info.pickup_location && (
              <span className="font-semibold">
                From : <br />
              </span>
            )}
            {booking.additional_info.pickup_location || booking.additional_info.hotel_location || booking.additional_info.tour_location}
          </p>
          <p className="text-gray-500 mt-1">
            {booking.additional_info.dropout_location && (
              <span className="font-semibold">
                To : <br />
              </span>
            )}
            {booking.additional_info.dropout_location}
          </p>
          <p className="text-red-500 items-start text-md font-bold">Price : ${booking.price}</p>
          {booking.type === 'hotel' && (
              <p className="text-gray-500">
                Check In Date : {booking.additional_info.checkInDate} <br></br>
                Check Out Date : {booking.additional_info.checkOutDate}
              </p>
           )}
        </div>
        {booking.type === 'car' && (
          <div className="bg-white rounded-lg p-6 mt-2 border border-gray-300">
            <div className="text-lg font-semibold text-gray-800 mb-4">
              Your Booking Detail
            </div>
            <div className="flex justify-between items-start pt-4">
              <div className="pr-4">
                <h3 className="font-medium text-gray-600 text-xs">Start Date</h3>
                <p className="text-gray-800 mt-1 text-sm">{new Date(booking.additional_info.pickup_date).toLocaleString()}</p>
              </div>
              <div className="border-l border-gray-500 h-auto self-stretch mx-4"></div>
              <div className="pl-4">
                <h3 className="font-medium text-gray-600 text-xs">End Date</h3>
                <p className="text-gray-800 mt-1 text-sm">{new Date(booking.additional_info.pickup_date).toLocaleString()}</p>
              </div>
            </div>
          </div>
        )}
        <button onClick={() => handleRemoveBooking(booking.id)} className="mt-2 bg-red-500 text-white px-3 py-2 rounded-md">
          Remove Booking
        </button>
      </div>

    </div>
  );

  return (
    <div className="flex flex-col w-full lg:w-[30%]">
      {bookings.map((booking, index) => renderBooking(booking, index))}
      <div className="bg-white rounded-lg p-6 mt-2 border border-gray-300">
        <div className="text-lg font-semibold text-gray-800 mb-4">
          Price Detail
        </div>
        {bookings.map((booking, index) => (
          <div key={index} className="mt-4 border-t border-gray-200 pt-4 flex justify-between">
            <h3 className="font-medium text-gray-600">{booking.type === 'car' ? 'Car Booking' : booking.type === 'hotel' ? 'Hotel Booking' : 'Tour Booking'} Price</h3>
            <p className="text-gray-800">${booking.price}</p>
          </div>
        ))}
        <div className="mt-4 border-t border-gray-200 pt-4 flex justify-between">
          <h3 className="font-medium text-gray-600">Total Price</h3>
          <p className="text-gray-800">${totalPrice}</p>
        </div>
      </div>
      {/* <div className="bg-white rounded-lg p-6 border border-gray-300 mt-2">
        <div className="text-lg font-semibold text-gray-800 mb-4">
          <h1>Do you have a promo code?</h1>
          <p className="text-sm my-1">Enter promo code</p>
          <input
            type="text"
            className="w-full md:w-11/12 lg:w-full py-1 px-2 rounded-md text-black border border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button className="block bg-red-500 text-white px-3 py-2 rounded-md mt-2">
            Apply
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default CarBooking;