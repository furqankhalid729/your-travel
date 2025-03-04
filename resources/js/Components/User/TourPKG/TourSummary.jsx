import React from "react";
import { FaWifi, FaUtensils, FaTv, FaSpa, FaSwimmingPool, FaParking, FaCheck, FaTimes } from "react-icons/fa";
import { LiaShuttleVanSolid } from "react-icons/lia";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

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

const TourSummary = ({ tour }) => {
  // const includedItems = [
  //   "Specialized bilingual guide",
  //   "Entrance fees (Cable and car and Moon Valley)",
  //   "Private Transport",
  //   "Box lunch water, banana apple and chocolate",
  // ];

  // const excludedItems = [
  //   "Additional Services",
  //   "Drink",
  //   "Insurance",
  //   "Tickets",
  // ];

  const facilities = [
    { name: "Free Wifi", icon: <FaWifi /> },
    { name: "Restaurant", icon: <FaUtensils /> },

    { name: "TV", icon: <FaTv /> },

    { name: "Shuttle", icon: <LiaShuttleVanSolid /> },

    { name: "Good Breakfast", icon: <MdEmojiFoodBeverage /> },

  ];

  return (
    <div className="my-8">
      <div>
        <h2 className="text-lg md:text-xl font-semibold mb-1 ">Summary</h2>
        <p className="text-xs md:text-sm text-gray-800">
          {tour.summary}
        </p>
      </div>

      <div className="my-12">
        <h2 className="text-lg md:text-xl font-semibold mb-4">Facilities</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  text-xs md:text-sm">
          {tour.facilities.map((facility, index) => (
            <div key={index} className="text-gray-800 flex mb-4">
              <span className="text-lg md:text-xl text-red-500 mr-2" >{iconMapping[facility.icon]}
              </span>
              {facility.name}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg md:text-xl font-semibold mb-4">Included/Excluded</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {/* Included List */}
          <div>
            <ul className="space-y-3 text-xs md:text-sm">
              {tour.includedExcludedTypes
                .filter(type => type.icon === 'FaCheck')
                .map((type, index) => (
                  <div key={index} className="text-gray-800 flex mb-4">
                    <span className="text-lg md:text-xl text-red-500 mr-2">{TypeIconMapping[type.icon]}</span>
                    {type.name}
                  </div>
                ))}
            </ul>
          </div>

          {/* Excluded List */}
          <div className="mt-4 md:mt-0">
            <ul className="space-y-3 text-xs md:text-sm">
              {tour.includedExcludedTypes
                .filter(type => type.icon === 'FaTimes')
                .map((type, index) => (
                  <div key={index} className="text-gray-800 flex mb-4">
                    <span className="text-lg md:text-xl text-red-500 mr-2">{TypeIconMapping[type.icon]}</span>
                    {type.name}
                  </div>
                ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Condition Section */}
      <div>
        <h2 className="text-lg md:text-xl font-bold mb-4">Condition</h2>
        <div className="text-xs md:text-sm text-gray-800">
          {tour.condition}
        </div></div>
    </div>
  );
};

export default TourSummary;
