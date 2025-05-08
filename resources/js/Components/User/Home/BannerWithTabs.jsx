import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import FormField from "./FormField";
import { formFields, formFieldsForTour, formFieldsForCar } from "../../../Constants/Home"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const BannerWithTabs = () => {
    const [activeButton, setActiveButton] = useState(0);
    const [isOpen, setIsOpen] = useState(true);
    const [searchURL, setSearchURL] = useState("/hotel")
    const [carSubTab, setCarSubTab] = useState("oneWay");

    const handleButtonClick = (index) => {
        setActiveButton(index);
    };

    const renderFormFields = () => {
        switch (activeButton) {
            case 0:
                return formFields;
            case 1:
                return formFieldsForTour;
            case 2:
                return carSubTab === "oneWay" ? formFieldsForCar.filter(field => field.name !== "hours") : formFieldsForCar;
            default:
                return [];
        }
    };

    useEffect(() => {
        switch (activeButton) {
            case 0:
                setSearchURL("/hotel");
                break;
            case 1:
                setSearchURL("/tour");
                break;
            case 2:
                setSearchURL("/car");
                break;
        }
    }, [activeButton]);

    return (
        <div
            className="relative h-screen w-full bg-cover bg-center"
            style={{ backgroundImage: `url('storage/images/Rectangle 7.png')` }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-start md:justify-center h-full text-white px-8 text-center">
                <h1 className="mt-12 lg:mt-32 text-lg  md:text-3xl lg:text-5xl font-bold mb-2">
                    Plan, Book, Explore - Your Gateway to <span><br className="hidden md:block" />
                        Seamless Travel Experiences!</span>

                </h1>
                <p className="text-base md:text-lg lg:text-2xl mb-10">
                    Exploring the Extraordinary!
                </p>

                {/* Buttons */}
                <div className="flex space-x-2 md:space-x-4 bg-black p-2 md:p-4 rounded-full">
                    {["Hotel", "Tour", "Car"].map((label, index) => (
                        <button
                            key={index}
                            onClick={() => handleButtonClick(index)}
                            className={`px-3 md:px-6 py-1 md:py-2 rounded-full font-semibold ${activeButton === index ? "bg-red-600" : "bg-transparent"
                                } hover:bg-red-600 transition duration-300`}
                        >
                            {label}
                        </button>
                    ))}
                </div>



                {/* Render fields based on the active button */}
                <div className="w-full max-w-6xl mx-auto">
                    {/* Accordion (visible below lg) */}
                    <div className="lg:hidden">
                        {/* Accordion Header */}
                        {/* <button
                            className="w-full flex justify-between items-center text-sm bg-gray-200 text-black text-left px-4 py-2 md:py-3 rounded-lg font-semibold"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span>{isOpen ? "Hidde" : "Search"}</span>
                            {isOpen ? (
                                <AiOutlineMinus className="text-lg" /> // Minus icon
                            ) : (
                                <AiOutlinePlus className="text-lg" /> // Plus icon
                            )}
                        </button> */}

                        {/* Accordion Content */}
                        {activeButton === 2 && (
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
                        )}
                        <form action={searchURL} method="get"
                            className={`transition-all duration-300 ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                } overflow-hidden`}
                        >
                            <div
                                className={`grid grid-cols-1 items-start sm:items-center px-4 py-2 bg-white rounded-lg sm:p-6 mb-10 w-full max-w-6xl lg:space-y-0 lg:flex`}
                            >
                                {renderFormFields().map((field, index) => (
                                    <FormField
                                        key={index}
                                        icon={field.icon}
                                        label={field.label}
                                        type={field.type}
                                        description={field.description}
                                        isLast={index === formFields.length - 1}
                                        showCenterIcon={field.showCenterIcon}
                                        name={field.name}
                                    />
                                ))}

                                {/* Search Button */}
                                <button className="bg-red-600 px-2 md:px-6 py-1 md:py-3 rounded-lg font-semibold flex items-center w-fit space-x-2 mt-2 ml-2 lg:mt-0">
                                    <CiSearch className="text-white text-sm md:text-lg" />
                                    <span>See Prices</span>
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Normal Div (visible on lg and above) */}
                    <div className="hidden lg:block">
                        {activeButton === 2 && (
                            <div className="flex rounded-t-lg overflow-hidden w-full max-w-6xl mt-4">
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
                        )}

                        <form action={searchURL} method="get">
                            <div
                                className={`grid grid-cols-2 items-start sm:items-center py-2 bg-white rounded-lg sm:p-6 mb-10 w-full max-w-6xl lg:space-y-0 lg:flex`}
                            >

                                {renderFormFields().map((field, index) => (
                                    <FormField
                                        key={index}
                                        icon={field.icon}
                                        label={field.label}
                                        type={field.type}
                                        description={field.description}
                                        isLast={index === formFields.length - 1}
                                        showCenterIcon={field.showCenterIcon}
                                        name={field.name}
                                    />
                                ))}


                                {/* Search Button */}
                                <button className="bg-red-600 px-2 md:px-6 py-1 md:py-3 rounded-lg font-semibold flex items-center w-24 md:w-44 space-x-2 mt-2 ml-2 lg:mt-0">
                                    <CiSearch className="text-white text-sm md:text-lg" />
                                    <span>See Prices</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerWithTabs;
