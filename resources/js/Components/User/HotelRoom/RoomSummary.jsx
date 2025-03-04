import React from "react";
import { FaWifi, FaUtensils, FaCocktail, FaTv, FaSwimmer, FaDumbbell, FaSpa, FaSwimmingPool, FaParking, FaCheck, FaTimes } from "react-icons/fa";
import { RiCheckDoubleLine } from "react-icons/ri";
import { LiaShuttleVanSolid } from "react-icons/lia";
import { GiCoffeeCup } from "react-icons/gi";
import { LuSailboat } from "react-icons/lu";
import { LuParkingMeter } from "react-icons/lu";
import { PiClockClockwiseFill } from "react-icons/pi";
import { IoLogoNoSmoking } from "react-icons/io";
import { GiClothes } from "react-icons/gi";
import { MdEmojiFoodBeverage } from "react-icons/md";

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


const RoomSummary = ({ hotel, hotelRooms }) => {
  const facilities = [
    { name: "Free Wifi", icon: <FaWifi /> },
    { name: "Restaurant", icon: <FaUtensils /> },
    { name: "Bar", icon: <FaCocktail /> },
    { name: "TV", icon: <FaTv /> },
    { name: "Swimming Pool", icon: <FaSwimmer /> },
    { name: "Fitness Center", icon: <FaDumbbell /> },
    { name: "Shuttle", icon: <LiaShuttleVanSolid /> },
    { name: "Coffee & Tea", icon: <GiCoffeeCup /> },
    { name: "Salon & Spa", icon: <LuSailboat /> },
    { name: "Parking", icon: <LuParkingMeter /> },
    { name: "WakeUp Call", icon: <PiClockClockwiseFill /> },
    { name: "No Smoking", icon: <IoLogoNoSmoking /> },
    { name: "Laundary", icon: <GiClothes /> },
    { name: "Good Breakfast", icon: <MdEmojiFoodBeverage /> },

  ];

  return (
    <div className="my-8">
      <div>
        <h2 className="text-xl font-semibold mb-1">Summary</h2>
        <p className="text-xs md:text-sm text-gray-700">
          {hotel.description}
        </p>
      </div>
      <div className="my-12">
        <h2 className="text-xl font-semibold mb-4">Types</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4   text-sm">
          {hotel.types.map((type, index) => (
            <div key={index} className="text-gray-800 flex mb-4">
              <span className="text-xl text-red-500 mr-2" >{TypeIconMapping[type.icon]}
              </span>
              {type.name}
            </div>
          ))}
        </div>
      </div>
      <div className="my-12">
        <h2 className="text-xl font-semibold mb-4">Facilities</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4   text-sm">
          {hotel.facilities.map((facility, index) => (
            <div key={index} className="text-gray-800 flex mb-4">
              <span className="text-xl text-red-500 mr-2" >{iconMapping[facility.icon]}
              </span>
              {facility.name}
            </div>
          ))}
        </div>
      </div>
      <hr className="border-gray-500 mt-6  " />
    </div>
  );
};

export default RoomSummary;
