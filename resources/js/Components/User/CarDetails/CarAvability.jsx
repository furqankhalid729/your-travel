import React, { useState, useEffect } from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { FaCalendarAlt, FaRegCircle } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
 import { addBooking } from '../../../store/bookingSlice';
 import { Link, usePage, router } from '@inertiajs/react';
import axios from "axios"

const CarAvability = ({ car }) => {
  console.log(car)
  const { auth } = usePage().props;
  const dispatch = useDispatch();
  const [pickupDate, setPickupDate] = useState(new Date());
  const [duration, setDuration] = useState(0);
  const [activeField, setActiveField] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [distance, setDistance] = useState(0);
  const [showAvailData, setShowAvailData] = useState(false);
  const [totalPrice, setTotalPrice] = useState(car.price);
  const [withOutTaxPrice, setWithOutTaxPrice] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    if (debouncedQuery.length >= 3) {
      fetchLocationSuggestions(debouncedQuery);
    } else {
      setSuggestions([]);
    }
  }, [debouncedQuery]);


  const handleLocationChange = (e, field) => {
    const value = e.target.value;
    if (field === "pickup") setPickupLocation(value);
    else setDropoffLocation(value);

    setActiveField(field);
    setQuery(value);
  };

  const fetchLocationSuggestions = async (query) => {
    try {
      const response = await fetch(`/api/locations?q=${query}`);
      const data = await response.json();
      setSuggestions(data.original.places || []);
    } catch (error) {
      console.error("Error fetching location suggestions:", error);
    }
  };

  const handleSelectLocation = (location) => {
    if (activeField === "pickup") setPickupLocation(location);
    else setDropoffLocation(location);

    setSuggestions([]);
    setQuery("");
  };

  const getDistance = () => {
    return axios.post(route("getDistance"), {
      origin: pickupLocation,
      destination: dropoffLocation,
    })
      .then(response => {
        const data = response.data;
        const parsedDistance = parseInt(data.rows[0].elements[0].distance.text.replace("km", "").trim());
        setDistance(parsedDistance);
        setDuration(data.rows[0].elements[0].duration.value);
        return parsedDistance;
      })
      .catch(error => {
        console.error("Axios error:", error);
      });
  };

  const getRate = () => {
    getDistance().then(updatedDistance => {
      let ratePerKm;
      if (totalPrice >= 0 && totalPrice <= 80) {
        ratePerKm = 3.5;
      } else if (totalPrice > 80 && totalPrice <= 120) {
        ratePerKm = 4;
      } else {
        ratePerKm = 4.5;
      }
      const totalKmRate = (ratePerKm * updatedDistance) + totalPrice;
      setWithOutTaxPrice(totalKmRate);
      const rateWithTax = totalKmRate + (totalKmRate * 0.17);

      if (updatedDistance > 100)
        setTotalPrice(rateWithTax * 0.90);
      else
        setTotalPrice(rateWithTax);

      setShowAvailData(true)
    });
  };

  const handleBookNow = () => {
    if (!auth.user) {
      console.log(router)
      router.visit('/login');
      return;
    }
    const bookingData = {
      type: 'car',
      id: car.id,
      name: car.car_name,
      price: totalPrice,
      additional_info: {
        pickup_location: pickupLocation,
        dropout_location: dropoffLocation,
        pickup_date: pickupDate,
        dropout_date: '',
      },
    };
    dispatch(addBooking(bookingData));
    router.visit(route('checkout'));
  };

  return (
    <>
      <div id="car-availablity" className="max-w-6xl  my-8 ">
        <h2 className="text-2xl font-bold mb-4">Availability</h2>
        <div className="flex flex-col md:flex-row overflow-visible rounded-lg border border-red-500 text-[8px] md:text-lg">
          {/* Date Picker Section */}
          <div className="flex items-center px-4 py-3  flex-grow ">
            <FaCalendarAlt className="text-gray-400 mr-2" />
            <input
              type="datetime-local"
              className="text-gray-400 text-sm border p-2 rounded"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
            />
          </div>

          {/* Guests Section */}
          <div className="relative flex items-center justify-between px-4 py-3 flex-grow border border-l-red-600">
            <div className="flex items-center w-full relative">
              <CiLocationOn className="text-gray-500 mr-2 mt-1" />
              <input
                type="text"
                placeholder="Enter Pickup location"
                className="border-0 p-2 w-full rounded focus:outline-none"
                value={pickupLocation}
                onChange={(e) => handleLocationChange(e, "pickup")}
                onFocus={() => setActiveField("pickup")}
              />
              {suggestions.length > 0 && activeField == "pickup" && (
                <ul className="absolute left-0 top-full w-full bg-white border border-gray-300 shadow-lg rounded-md mt-1 z-50">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleSelectLocation(suggestion.description)}
                    >
                      {suggestion.description}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="relative flex items-center justify-between px-4 py-3 flex-grow border border-l-red-600 ">
            <div className='flex items-center'>
              <CiLocationOn className="text-gray-500 mr-2 mt-1" />
              <input
                type="text"
                placeholder="Enter Drop location"
                className="border-0 p-2 w-full rounded"
                value={dropoffLocation}
                onChange={(e) => handleLocationChange(e, "dropoff")}
                onFocus={() => setActiveField("dropoff")}
              />
              {suggestions.length > 0 && activeField == "dropoff" && (
                <ul className="absolute left-0 top-full w-full bg-white border border-gray-300 shadow-lg rounded-md mt-1 z-50">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleSelectLocation(suggestion.description)}
                    >
                      {suggestion.description}
                    </li>
                  ))}
                </ul>
              )}
            </div>

          </div>



          {/* Search Button */}
          <button onClick={getRate} className="bg-red-500 text-white font-semibold px-6 py-3  hover:bg-red-600 rounded-md rounded-l-none">
            Search Availability
          </button>
        </div>
      </div>

      {showAvailData && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {/* First Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 space-y-4 border border-black">
            {/* Pick-up & Drop-off Info */}
            <div className="flex flex-col items-start space-y-4">
              <h3 className="font-semibold text-lg">Pick-up & Drop-off</h3>
              <div className="relative pl-4 space-y-3">
                {/* Vertical Border */}
                <div className="absolute left-5 top-7 h-[calc(100%-42px)] border-l-2 border-gray-400"></div>

                {/* Top Section */}
                <span className="flex items-center space-x-2">
                  <FaRegCircle className="text-gray-500 text-xs mr-2" />
                  <p className="text-sm text-gray-500">{new Date(pickupDate).toLocaleString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: true,
                  })}</p>
                </span>

                {/* Pick-up Instructions */}
                <p className="text-red-500 text-sm pl-8">View pick-up instructions</p>

                {/* Bottom Section */}
                {/* <span className="flex items-center space-x-2">
                  <FaRegCircle className="text-gray-500 text-xs mr-2" />
                  <p>{pickupDate.getSeconds()}</p>
                  {duration && (() => {
                    const newDate = new Date(pickupDate);
                    newDate.setSeconds(newDate.getSeconds() + duration);
                    console.log(newDate)
                    return (
                      <p className="text-sm text-gray-500">{
                        newDate.toLocaleString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                          second: "2-digit",
                          hour12: true,
                        })
                      }</p>
                    )
                  }
                  )}

                </span> */}
              </div>
            </div>

            {/* Drop-off Instructions */}
            {/* <div className="text-red-500 text-sm pl-10">
              View Drop-off instructions
            </div> */}
          </div>


          {/* Second Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 space-y-4 border border-black">
            {/* Car Price Details */}
            <h3 className="font-semibold text-lg">Car Price</h3>

            <div className="flex justify-between items-center text-sm text-gray-500">
              <p>Car hire charges</p>
              <p className="font-medium">CHF {withOutTaxPrice}</p>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <p>GST tax</p>
              <p className="font-medium">CHF {(withOutTaxPrice * 0.17).toPrecision(4)}</p>
            </div>
            <hr className='text-gray-400' />

            <div className="flex justify-between items-center text-sm text-black font-semibold">
              <p>Total Price:</p>
              <p className="font-medium">${totalPrice.toPrecision(4)}</p>
            </div>
          </div>
        </div>
      )}

      <div className=' flex flex-col sm:flex-row  justify-between p-6'>
        <div >
          <input type="checkbox" checked className="mr-2 accent-red-500" />
          <span>  I read at all  <span className="text-red-500"> terms and conditions</span> </span>
        </div>
        <div className='flex items-center'>
          <button onClick={handleBookNow} className='bg-red-500 rounded-md text-white py-2 px-3'>Book Now</button>
        </div>

      </div>
    </>
  )
}

export default CarAvability
