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
      {/* Map Section */}
      <div className="h-32 relative bg-gray-300 mb-4 rounded-md overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center rounded-md" style={{ backgroundImage: `url('storage/images/map.jpg')` }}>
          <span className="absolute inset-0 flex items-center justify-center text-white">
            <div className="py-1 px-2 bg-gray-500 opacity-50 rounded-xl">Show on map</div>
          </span>
        </div>
      </div>

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
          <h3 className="font-semibold">Top Cars</h3>
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

        {/* Types Section */}
        <div className="border-b border-gray-400 p-4">
          <h3 className="font-semibold">Types</h3>
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

        {/* Categories Section */}
        <div className="p-4">
          <h3 className="font-semibold">Categories</h3>
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