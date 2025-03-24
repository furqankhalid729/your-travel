import React, { useState, useEffect } from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { FaCalendarAlt, FaRegCircle } from 'react-icons/fa'
import { Link } from '@inertiajs/react'

const CarAvability = ({ car }) => {
  const [pickupDate, setPickupDate] = useState("");
  const [activeField, setActiveField] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [distance, setDistance] = useState(0);
  const [showAvailData , setShowAvailData] = useState(false);
  const [totalPrice, setTotalPrice] = useState(car.price);

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

  // Handle location selection
  const handleSelectLocation = (location) => {
    if (activeField === "pickup") setPickupLocation(location);
    else setDropoffLocation(location);

    setSuggestions([]); // Hide suggestions
    setQuery(""); // Reset query after selection
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
          <button className="bg-red-500 text-white font-semibold px-6 py-3  hover:bg-red-600 rounded-md rounded-l-none">
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
                <p className="text-sm text-gray-500">Sun, 17 Sep - 10:00 AM</p>
              </span>

              {/* Pick-up Instructions */}
              <p className="text-red-500 text-sm pl-8">View pick-up instructions</p>

              {/* Bottom Section */}
              <span className="flex items-center space-x-2">
                <FaRegCircle className="text-gray-500 text-xs mr-2" />
                <p className="text-sm text-gray-500">Sun, 20 Sep - 10:00 PM</p>
              </span>
            </div>
          </div>

          {/* Drop-off Instructions */}
          <div className="text-red-500 text-sm pl-10">
            View Drop-off instructions
          </div>
        </div>


        {/* Second Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 space-y-4 border border-black">
          {/* Car Price Details */}
          <h3 className="font-semibold text-lg">Car Price</h3>

          <div className="flex justify-between items-center text-sm text-gray-500">
            <p>Car hire charges</p>
            <p className="font-medium">$600.00</p>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <p>GST tax</p>
            <p className="font-medium">$1600.00</p>
          </div>
          <h3 className="text-sm text-gray-500">
            You'll pay in USD, because that's your local currency.
          </h3>
          <hr className='text-gray-400' />

          <div className="flex justify-between items-center text-sm text-black font-semibold">
            <p>Price of 3 days:</p>
            <p className="font-medium">$700.00</p>
          </div>
        </div>
      </div>
      )}

      <div className=' flex flex-col sm:flex-row  justify-between p-6'>
        <div >
          <input type="checkbox" className="mr-2 accent-red-500" />
          <span>  I read at all  <span className="text-red-500"> terms and conditions</span> </span>
        </div>
        <div className='flex items-center'>
          <Link to={route('checkout')}>
            <button className='bg-red-500 rounded-md text-white py-2 px-3'>Book Now</button>
          </Link>
        </div>

      </div>
    </>
  )
}

export default CarAvability
