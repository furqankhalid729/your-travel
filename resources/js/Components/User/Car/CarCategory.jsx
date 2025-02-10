import React, { useState } from "react";
import axios from "axios";

const CarCategory = ({ onFilter }) => {
  const [price, setPrice] = useState(600);
  const [filters, setFilters] = useState({
    topCars: [],
    types: [],
    categories: [],
    ratings: [],
    price: 600,
  });

  const [isTopCarsExpanded, setIsTopCarsExpanded] = useState(false);
  const [isTypesExpanded, setIsTypesExpanded] = useState(false);
  const [isCategoriesExpanded, setIsCategoriesExpanded] = useState(false);

  const data = {
    topCars: ["Audi A3 2019", "Toyota Prius Plus", "Mercedes Benz", "Lexus LX570", "BMW i5"],
    types: ["Economy", "Standard", "Luxury", "Commercial"],
    categories: [
      "Hatchback",
      "SUV",
      "Coupe",
      "Convertible",
      "Sedan",
      "Hybrid",
      "Luxury",
      "Sports",
      "Crossover",
      "Mini Van",
    ],
    ratings: [5, 4, 3, 2, 1],
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setFilters((prevFilters) => {
      const newValues = checked
        ? [...prevFilters[name], value]
        : prevFilters[name].filter((v) => v !== value);
      return { ...prevFilters, [name]: newValues };
    });
  };

  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setPrice(newPrice);
    setFilters((prevFilters) => ({
      ...prevFilters,
      price: newPrice,
    }));


    const params = new URLSearchParams({ ...filters, price: newPrice });
    window.history.pushState({}, '', `${window.location.pathname}?${params.toString()}`);

    // Update the car list immediately
    handleFilterSubmit();
  };

  const handleFilterSubmit = () => {
    axios
      .get(route('cars.filter'), { params: filters })
      .then((response) => {
        onFilter(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-white p-4 rounded-lg">

      {/* Price Range */}
      <div className="mb-4 border rounded-md border-gray-400 p-4">
        <h3 className="font-semibold">Price</h3>
        <p className="text-sm text-gray-500">${price} - $1000</p>
        <input
          type="range"
          min="150"
          max="10000"
          value={price}
          onChange={handlePriceChange}
          className="w-full mt-2 accent-red-500"
        />
        <button className="mt-2 bg-red-500 rounded-md hover:bg-red-600 text-white py-1 px-4" onClick={handleFilterSubmit}>
          Apply
        </button>
      </div>

      <div className="border border-gray-400 rounded-md">
        {/* Ratings Section */}
        <div className="border-b border-gray-400 p-4">
          <h3 className="font-semibold">Rating</h3>
          {data.ratings.map((star) => (
            <div key={star} className="flex items-center mb-1">
              <input
                type="checkbox"
                name="ratings"
                value={star}
                onChange={handleCheckboxChange}
                className="mr-2 accent-red-500"
              />
              <span className="text-yellow-500">
                {"★".repeat(star)}
                {"☆".repeat(5 - star)}
              </span>
            </div>
          ))}
        </div>

        {/* Top Cars Section */}
        <div className="border-b border-gray-400 p-4">
          <h3 className="font-semibold">
            <button className="flex justify-between w-full" onClick={() => setIsTopCarsExpanded(!isTopCarsExpanded)}>
              <p>Top Cars</p> {isTopCarsExpanded ? "▲" : "▼"}
            </button>
          </h3>
          {isTopCarsExpanded && (
            <div>
              {data.topCars.map((car) => (
                <div key={car} className="flex items-center mb-1">
                  <input
                    type="checkbox"
                    name="topCars"
                    value={car}
                    onChange={handleCheckboxChange}
                    className="mr-2 accent-red-500"
                  />
                  <span>{car}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Types Section */}
        <div className="border-b border-gray-400 p-4">
          <h3 className="font-semibold">
            <button className="flex justify-between w-full" onClick={() => setIsTypesExpanded(!isTypesExpanded)}>
              <p>Types</p> {isTypesExpanded ? "▲" : "▼"}
            </button>
          </h3>
          {isTypesExpanded && (
            <div>
              {data.types.map((type) => (
                <div key={type} className="flex items-center mb-1">
                  <input
                    type="checkbox"
                    name="types"
                    value={type}
                    onChange={handleCheckboxChange}
                    className="mr-2 accent-red-500"
                  />
                  <span>{type}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Categories Section */}
        <div className="p-4">
          <h3 className="font-semibold">
            <button className="flex justify-between w-full" onClick={() => setIsCategoriesExpanded(!isCategoriesExpanded)}>
              <p>Categories</p> {isCategoriesExpanded ? "▲" : "▼"}
            </button>
          </h3>
          {isCategoriesExpanded && (
            <div>
              {data.categories.map((category) => (
                <div key={category} className="flex items-center mb-1">
                  <input
                    type="checkbox"
                    name="categories"
                    value={category}
                    onChange={handleCheckboxChange}
                    className="mr-2 accent-red-500"
                  />
                  <span>{category}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <button
        onClick={handleFilterSubmit}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default CarCategory;