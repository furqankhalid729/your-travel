// src/components/FormField.js
import React, { useState, useEffect } from "react";
import { TbArrowsLeftRight } from "react-icons/tb";

const FormField = ({ icon: Icon, label, type, description, isLast, showCenterIcon, name }) => {
    const [inputValue, setInputValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        if ((name !== "from" && name !== "to")   || inputValue.length < 3) {
            setSuggestions([]);
            return;
        }

        const delayDebounce = setTimeout(() => {
            fetchLocationSuggestions(inputValue);
        }, 500);

        return () => clearTimeout(delayDebounce); // Cleanup on unmount or value change
    }, [inputValue, name]);

    const fetchLocationSuggestions = async (query) => {
        try {
            const response = await fetch(`/api/locations?q=${query}`);
            const data = await response.json();
            console.log(data.original.places)
            setSuggestions(data.original.places || []);
        } catch (error) {
            console.error('Error fetching location suggestions:', error);
        }
    };
    return (
        <div className="relative flex text-gray-700 flex-grow space-x-2 mb-4 md:mb-0">
            <Icon className="text-red-600 text-sm md:text-2xl mt-1 md:mt-0 ml-2 md:ml-0" />
            <div className="flex-col place-items-start ">
                <h3 className="text-sm md:text-base font-semibold">{label}</h3>
                <input
                    name={name}
                    id={label}
                    type={type}
                    placeholder={description}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onFocus={() => setShowDropdown(true)}
                    //onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                    className="w-full border-0 border-solid border-b-2 border-gray-300 focus:outline-none focus:border-red-500 transition-all p-1"
                />
                {(name === "from" || name ==="to") && showDropdown && suggestions.length > 0 && (
                    <ul className="absolute left-0 w-full bg-white border border-gray-300 mt-1 rounded-md shadow-lg z-10">
                        {suggestions.map((item, index) => (
                            <li
                                key={index}
                                className="p-2 text-black hover:bg-gray-100 cursor-pointer"
                                onClick={() => {
                                    setInputValue(item.description);
                                    setShowDropdown(false);
                                }}
                            >
                                {item.description}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {!isLast && (
                <div className="relative hidden lg:block">
                    <div className="border-l border-gray-400 ml-4 h-14"></div>
                    {showCenterIcon && (
                        <div className="absolute top-1/2 transform -translate-y-1/2 left-[0.3rem] bg-red-300 rounded-full p-1">
                            <TbArrowsLeftRight className="text-white text-lg" />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default FormField;
