import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { FaCarSide, FaLanguage, FaSnowflake, FaUser } from "react-icons/fa";

const iconMapping = {
  FaSnowflake: <FaSnowflake />,
  FaCarSide: <FaCarSide />,
  FaLanguage: <FaLanguage />,
  FaUser: <FaUser />,
};

const Summary = (car) => {
  return (
    <div className=" mt-10">
      <h1 className="text-xl md:text-2xl lg:text-3xl">Summary</h1>
      {/* First Div */}
      <div>
        <p className="text-gray-700 text-sm md:text-base leading-tight mt-3">
          The {car.car.car_name} is a premium compact executive car renowned for its
          stylish design, advanced technology, and balanced performance. It
          offers a range of engines, including efficient four-cylinders and
          more powerful options, often with Quattro all-wheel drive for enhanced
          handling. The interior is luxurious, featuring high-quality materials
          and a modern infotainment system, while its comfortable ride and
          advanced driver-assistance features enhance overall driving pleasure.
          With a well-designed cabin and practical cargo space, the A4 stands
          out in its class for delivering a refined and enjoyable driving
          experience.
        </p>
      </div>

      {/* Second Div */}
      <div className="mt-8">
        <h1 className="text-xl md:text-2xl lg:text-3xl">We offer</h1>

        {[
          "100% Luxurious Feel",
          "A Safe & Secure Journey",
          "Clean, Polite & Knowledgeable",
          "All Our Fleet Are Fully Valeted & Serviced",
        ].map((item, index) => (
          <div key={index} className="flex items-center space-x-2 mt-2 text-gray-700 text-sm md:text-base">
            <IoMdCheckmark className="text-red-500" />
            <h3>{item}</h3>
          </div>
        ))}
      </div>

      {/* Third Div */}
      <h1 className="text-xl md:text-2xl lg:text-3xl mt-8">Features</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-3 text-sm md:text-base">
        {car.car.features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-2 text-gray-700">
            <span className="text-red-500 text-xl">
              {iconMapping[feature.icon]}
            </span>
            <h3>{feature.name}</h3>
          </div>
        ))}
      </div>
      <hr className="border-gray-300 mt-3" />
    </div>
  );
};

export default Summary;
