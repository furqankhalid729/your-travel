import React, { useState } from "react";
import { useForm } from "@inertiajs/react"; // Correct import
import { FaSave, FaArrowLeft, FaPlus, FaSnowflake, FaCarSide, FaLanguage, FaUser } from "react-icons/fa";
import { Link } from "@inertiajs/react";

const AddCar = () => {
  const [fuelOptions] = useState(["Petrol", "Diesel", "Electric", "Hybrid"]);
  const [transmissionOptions] = useState(["Manual", "Automatic"]);
  const [selectedFuel, setSelectedFuel] = useState(fuelOptions[0]);
  const [selectedTransmission, setSelectedTransmission] = useState(transmissionOptions[0]);

  const { data, setData, post, processing, errors } = useForm({
    brand: "",
    model: "",
    fuel: selectedFuel,
    carNumber: "",
    transmission: selectedTransmission,
    capacity: "2",
    status: "available",
    price: "",
  });

  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/cars');
  };

  return (
    <div className="m-6">
      {/* Header Section */}
      <div className="flex justify-between items-center bg-white p-2 rounded-lg shadow">
        <Link
          href="/dashboard/car-booking"
          className="flex items-center text-gray-600 hover:text-gray-800"
        >
          <FaArrowLeft className="mr-2" />
          <span>Back</span>
        </Link>
        <button
          type="submit"
          form="carForm"
          className="flex items-center bg-[#e4baff] text-white px-4 py-2 rounded-md hover:bg-[#d19aed]"
        >
          <FaSave className="mr-2" />
          Save
        </button>
      </div>

      {/* Message Display */}
      {message && (
        <div className="mt-4 text-center text-lg text-gray-800">
          {message}
        </div>
      )}

      {/* Content Section */}
      <div className="flex mt-6 gap-6">
        {/* Left Panel */}
        <div className="w-2/5 p-4 rounded-lg shadow">
          <div className="flex bg-[#eaeaea] flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-6 mb-2">
            <label htmlFor="mainImage" className="flex flex-col items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-gray-400 mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16V8a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 10.7a4.5 4.5 0 01-8 0M12 12v2" />
              </svg>
              <span className="text-gray-600 text-sm">Click to upload main image</span>
            </label>
            <input id="mainImage" type="file" accept="image/*" className="hidden" />
          </div>
          <h1 className="text-center">
            <span className="text-2xl border py-2 px-4 bg-[#2e2532] font-bold text-white mb-2">
              Audi E-tron GT XR
            </span>
          </h1>
          <div className="w-[70%] mx-auto bg-white p-3 mt-2">
            <div className="flex justify-between items-center">
              <p className="text-gray-600 text-lg mb-4">Economy</p>
              <button className="flex items-center gap-1 bg-[#bb8dd9] px-1 text-white rounded-lg">
                <FaPlus />
                Add Features
              </button>
            </div>
            <div className="space-y-2">
              <FeatureItem icon={<FaSnowflake />} label="AC" />
              <FeatureItem icon={<FaCarSide />} label="Auto" />
              <FeatureItem icon={<FaCarSide />} label="4 Doors" />
              <FeatureItem icon={<FaLanguage />} label="2 Languages" />
              <FeatureItem icon={<FaUser />} label="4 Persons" />
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-3/5 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Audi E-tron GT XR Details</h2>
          <form id="carForm" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <DetailField label="Brand">
                <select
                  name="brand"
                  value={data.brand}
                  onChange={handleInputChange}
                  className="mt-2 border p-1 rounded-lg text-gray-500"
                >
                  <option value="">Select Brand</option>
                  <option value="audi">Audi</option>
                  <option value="bmw">BMW</option>
                </select>
              </DetailField>

              <DetailField label="Model">
                <input
                  type="text"
                  name="model"
                  value={data.model}
                  onChange={handleInputChange}
                  className="mt-2 border p-1 rounded-lg text-gray-500"
                  placeholder="Model Name"
                />
              </DetailField>

              <DetailField label="Fuel">
                <select
                  name="fuel"
                  value={data.fuel}
                  onChange={handleInputChange}
                  className="mt-2 border p-1 rounded-lg text-gray-500"
                >
                  {fuelOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </DetailField>

              <DetailField label="Car No.">
                <input
                  type="text"
                  name="carNumber"
                  value={data.carNumber}
                  onChange={handleInputChange}
                  className="mt-2 border p-1 rounded-lg text-gray-500"
                  placeholder="Car Number"
                />
              </DetailField>

              <DetailField label="Transmission">
                <select
                  name="transmission"
                  value={data.transmission}
                  onChange={handleInputChange}
                  className="mt-2 border p-1 rounded-lg text-gray-500"
                >
                  {transmissionOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </DetailField>

              <DetailField label="Capacity">
                <select
                  name="capacity"
                  value={data.capacity}
                  onChange={handleInputChange}
                  className="mt-2 border p-1 rounded-lg text-gray-500"
                >
                  <option value="2">2 Persons</option>
                  <option value="4">4 Persons</option>
                  <option value="6">6 Persons</option>
                  <option value="8">8 Persons</option>
                </select>
              </DetailField>

              <DetailField label="Status">
                <select
                  name="status"
                  value={data.status}
                  onChange={handleInputChange}
                  className="mt-2 border p-1 rounded-lg text-gray-500"
                >
                  <option value="available">Available</option>
                  <option value="not-available">Not Available</option>
                </select>
              </DetailField>

              <DetailField label="Price (per day)">
                <input
                  type="text"
                  name="price"
                  value={data.price}
                  onChange={handleInputChange}
                  className="mt-2 border p-1 rounded-lg text-gray-500"
                  placeholder="Enter price"
                />
              </DetailField>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ icon, label }) => (
  <div className="flex items-center gap-2 text-gray-600">
    {icon}
    <span>{label}</span>
  </div>
);

const DetailField = ({ label, children }) => (
  <p className="text-sm text-gray-600">
    <strong>{label}</strong>
    <div>{children}</div>
  </p>
);

export default AddCar;
