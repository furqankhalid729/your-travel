import React, { useState } from "react";
import { formFieldsForCar } from "../../../Constants/Home";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import FormField from "../Home/FormField";
import { CiSearch } from "react-icons/ci";

const CarBanner = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [carSubTab, setCarSubTab] = useState("oneWay");

  const renderFormFields = () => {
    return carSubTab === "oneWay" ? formFieldsForCar.filter(field => field.name !== "hours") : formFieldsForCar;
  };
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url('storage/images/carbg.png')` }}
    >
      <div className="absolute inset-0"></div>
      <div className="relative z-10 flex flex-col items-center justify-start lg:justify-center h-full text-white px-8 text-center">
        <h1 className="mt-28 md:mt-44 lg:mt-32 text-lg  md:text-3xl lg:text-5xl font-bold mb-2">
          Find your best Ride
        </h1>

        <div className="w-full max-w-4xl mx-auto mt-6">
          {/* Accordion (visible below lg) */}
          <div className="lg:hidden">

            <div className="flex rounded-t-lg overflow-hidden w-full max-w-6xl ">
              <button
                onClick={() => setCarSubTab("oneWay")}
                className={`px-4 py-2 font-semibold rounded-tl-lg ${carSubTab === "oneWay" ? "bg-red-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-red-50"
                  }`}
              >
                One way
              </button>
              <button
                onClick={() => setCarSubTab("byHours")}
                className={`px-4 py-2 font-semibold rounded-tr-lg ${carSubTab === "byHours" ? "bg-red-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-red-50"
                  }`}
              >
                By Hour
              </button>
            </div>
            <form action="/car" method="get">
              {/* Accordion Content */}
              <div
                className={`transition-all duration-300 ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
              >
                <div
                  className={`grid grid-cols-1 items-start sm:items-center px-4 py-2 bg-white rounded-lg sm:p-6 mb-10 w-full max-w-4xl lg:space-y-0 lg:flex`}
                >
                  {renderFormFields().map((field, index) => (
                    <FormField
                      key={index}
                      icon={field.icon}
                      label={field.label}
                      type={field.type}
                      description={field.description}
                      isLast={index === formFieldsForCar.length - 1}
                      showCenterIcon={field.showCenterIcon}
                      name={field.name}
                    />
                  ))}

                  {/* Search Button */}
                  <button className="bg-red-600 px-2 md:px-6 py-1 md:py-3 rounded-lg font-semibold flex items-center w-24 md:w-32 space-x-2 mt-2 ml-2 lg:mt-0">
                    <CiSearch className="text-white text-sm md:text-lg" />
                    <span>Search</span>
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Normal Div (visible on lg and above) */}
          <div className="hidden lg:block">
            <div className="flex rounded-t-lg overflow-hidden w-full max-w-6xl ">
              <button
                onClick={() => setCarSubTab("oneWay")}
                className={`px-4 py-2 font-semibold rounded-tl-lg ${carSubTab === "oneWay" ? "bg-red-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-red-50"
                  }`}
              >
                One way
              </button>
              <button
                onClick={() => setCarSubTab("byHours")}
                className={`px-4 py-2 font-semibold rounded-tr-lg ${carSubTab === "byHours" ? "bg-red-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-red-50"
                  }`}
              >
                By Hour
              </button>
            </div>
            <form action="/car" method="get">
              <div
                className={`grid grid-cols-2 items-start sm:items-center py-2 bg-white rounded-lg sm:p-6 mb-10 w-full max-w-4xl lg:space-y-0 lg:flex`}
              >
                {renderFormFields().map((field, index) => (
                  <FormField
                    key={index}
                    icon={field.icon}
                    label={field.label}
                    type={field.type}
                    description={field.description}
                    isLast={index === formFieldsForCar.length - 1}
                    showCenterIcon={field.showCenterIcon}
                    name={field.name}
                  />
                ))}

                {/* Search Button */}
                <button className="bg-red-600 px-2 md:px-6 py-1 md:py-3 rounded-lg font-semibold flex items-center w-24 md:w-32 space-x-2 mt-2 ml-2 lg:mt-0">
                  <CiSearch className="text-white text-sm md:text-lg" />
                  <span>Search</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarBanner;