import React, { useEffect } from "react";
import { useForm } from "@inertiajs/react";
// import Slider from "@material-ui/core/Slider";

const CarCategory = ({ filters, modelsFilter, brandFilter }) => {
  console.log(brandFilter)
  const { data, setData, get } = useForm({
    brands: filters.brands || [],
    models: filters.models || [],
    categories: filters.categories || [],
    ratings: filters.ratings || [],
    price: filters.price || 150,
  });

  // Handles checkbox selection for filters
  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;

    setData((prevData) => {
      const updatedValues = checked
        ? [...prevData[name], value]
        : prevData[name].filter((item) => item !== value);

      const updatedData = { ...prevData, [name]: updatedValues };
      // setTimeout(() => applyFilters(updatedData), 1000);
      return updatedData;
    });

  };

  // Handles price range selection
  const handlePriceChange = (e) => {
    setData("price", e.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
        get(route("car.frontendIndex"), {
            preserveState: true,
            data
        });
    }, 300);

    return () => clearTimeout(timeoutId);
}, [data]);

  // useEffect(() => {
  //   const applyFilters = () => {
  //     get(route("car.frontendIndex"), {
  //       replace: true,
  //       preserveState: true,
  //       data
  //     });
  //   };
  //   applyFilters(data);
  // }, [data]);

  return (
    <div className="bg-white p-4 rounded-lg">
      {/* Price Range */}
      <div className="mb-4 border rounded-md border-gray-400 p-4">
        <h3 className="font-semibold">Price</h3>
        <p className="text-sm text-gray-500">${data.price} - $250</p>
        <input
          type="range"
          min="1"
          max="250"
          value={data.price}
          onChange={handlePriceChange}
          className="w-full mt-2 accent-red-500"
        />
      </div>

      {/* Ratings Filter */}
      <div className="border-b border-gray-400 p-4">
        <h3 className="font-semibold">Rating</h3>
        {[5, 4, 3, 2, 1].map((star) => (
          <div key={star} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="ratings"
              value={star}
              checked={data.ratings.includes(star.toString())}
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

      {/* Top Cars Filter */}
      <div className="border-b border-gray-400 p-4">
        <h3 className="font-semibold">Brands</h3>
        {brandFilter.map((car) => (
          <div key={car.name} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="brands"
              value={car.name}
              checked={data.brands.includes(car.name)}
              onChange={handleCheckboxChange}
              className="mr-2 accent-red-500"
            />
            <span>{car.name}</span>
          </div>
        ))}
      </div>

      {/* Car Types Filter */}
      <div className="border-b border-gray-400 p-4">
        <h3 className="font-semibold">Car Models</h3>
        {modelsFilter.map((model) => (
          <div key={model} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="models"
              value={model}
              checked={data.models.includes(model)}
              onChange={handleCheckboxChange}
              className="mr-2 accent-red-500"
            />
            <span>{model}</span>
          </div>
        ))}
      </div>

      {/* Categories Filter */}
      <div className="border-b border-gray-400 p-4">
        <h3 className="font-semibold">Category</h3>
        {["Luxury", "Economy", "Sports", "Electric"].map((category) => (
          <div key={category} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="categories"
              value={category}
              checked={data.categories.includes(category)}
              onChange={handleCheckboxChange}
              className="mr-2 accent-red-500"
            />
            <span>{category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarCategory;
