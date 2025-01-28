import React, { useState } from "react";
import { useForm } from "@inertiajs/react"; // Correct import
import { FaSave, FaArrowLeft, FaPlus, FaSnowflake, FaCarSide, FaLanguage, FaUser } from "react-icons/fa";
import { Link } from "@inertiajs/react";
import Modal from 'react-modal';

const iconMapping = {
  FaSnowflake: <FaSnowflake />,
  FaCarSide: <FaCarSide />,
  FaLanguage: <FaLanguage />,
  FaUser: <FaUser />,
};

const AddCar = ({ brands, models, fuels, transmissions }) => {
  console.log(fuels);
  const [fuelOptions] = useState(["Petrol", "Diesel", "Electric", "Hybrid"]);
  const [transmissionOptions] = useState(["Manual", "Automatic"]);
  const [selectedFuel, setSelectedFuel] = useState(fuelOptions[0]);
  const [selectedTransmission, setSelectedTransmission] = useState(transmissionOptions[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newFeature, setNewFeature] = useState("");
  const [featureIcon, setFeatureIcon] = useState("FaSnowflake");

  const { data, setData, post, processing, errors } = useForm({
    car_name: "",
    brand: "",
    model: "",
    fuel: selectedFuel,
    car_number: "",
    transmission: selectedTransmission,
    capacity: "2",
    status: "available",
    price: "",
    features: [],
    car_images: []
  });

  const [message, setMessage] = useState("");

  // Handel input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Handle file change
  const handleFileChange = (e) => {
    const files = e.target.files;
    const fileArray = Array.from(files).map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    // Update the car_images array in the form state
    setData((prevData) => ({
      ...prevData,
      car_images: fileArray,
    }));
  };

  const handleRemoveImage = (index) => {
    setData((prevData) => ({
      ...prevData,
      car_images: prevData.car_images.filter((_, i) => i !== index), 
    }));
  };

  const handleFeatureAdd = () => {
    if (newFeature && featureIcon) {
      setData((prevDetails) => ({
        ...prevDetails,
        features: [...prevDetails.features, { name: newFeature, icon: featureIcon }],
      }));
      setNewFeature("");
      setFeatureIcon("FaSnowflake");
      setIsModalOpen(false);
    }
  };

  const handleRemoveFeature = (index) => {
    setData((prevDetails) => ({
      ...prevDetails,
      features: prevDetails.features.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("car_name", data.car_name);
    formData.append("brand", data.brand);
    formData.append("model", data.model);
    formData.append("fuel", data.fuel);
    formData.append("car_number", data.car_number);
    formData.append("transmission", data.transmission);
    formData.append("capacity", data.capacity);
    formData.append("status", data.status);
    formData.append("price", data.price);
    formData.append("features", JSON.stringify(data.features));
    data.car_images.forEach((image, index) => {
      formData.append(`car_images[${index}]`, image.file);
    });
    // Log the FormData entries
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      await post(route("cars.store"), formData, {
        onSuccess: () => {
          setMessage("Car added successfully!");
        },
      });
    } catch (error) {
      console.error("Error while adding car:", error);
      setMessage("An error occurred while adding the car.");
    }

  };

  return (
    <div className="m-6">
      {/* Header Section */}
      <div className="flex justify-between items-center bg-white p-2 rounded-lg shadow">
        <Link href="/dashboard/car-booking" className="flex items-center text-gray-600 hover:text-gray-800">
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
      {message && <div className="mt-4 text-center text-lg text-gray-800">{message}</div>}

      {/* Content Section */}
      <div className="flex mt-6 gap-6">
        {/* Left Panel */}
        <div className="w-2/5 p-4 rounded-lg shadow">
          {/* Clickable Upload Area */}
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-6 mb-2 relative bg-gray-50">
            {data.car_images.length > 0 ? (
              <div className="relative w-full h-full">
                <img
                  src={data.car_images[0].url}
                  alt="Main Car Preview"
                  className="w-full h-[300px] object-cover rounded-md"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setData((prevData) => ({
                      ...prevData,
                      car_images: prevData.car_images.slice(1),
                    }));
                  }}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                >
                  ✖
                </button>
              </div>
            ) : (
              <>
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
              </>
            )}
            <input
              type="file"
              accept="image/*"
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={handleFileChange}
              multiple
            />
          </div>
          {/* Grid for Additional Images */}
          <div className="grid grid-cols-3 gap-2">
            {data.car_images.slice(1).map((image, index) => (
              <div key={index + 1} className="relative w-[100px] h-[80px]">
                <img
                  src={image.url}
                  alt={`Additional Car Preview ${index}`}
                  className="w-full h-full object-cover rounded-lg"
                />
                <button
                  onClick={() => handleRemoveImage(index + 1)}
                  className="absolute top-1 right-1 bg-red-500 text-white p-1 text-[5px] rounded-full hover:bg-red-600"
                >
                  ✖
                </button>
              </div>
            ))}
            {errors?.car_images?.length > 0 && (
              <p className="text-red-500 text-sm mt-2">
                {Array.isArray(errors.car_images) ? errors.car_images[0].file : errors.car_images}
              </p>
            )}
          </div>
          {/* Car title */}
          <div className="text-center">
            <input
              type="text"
              className="text-center"
              name="car_name"
              placeholder="Car Name"
              value={data.car_name}
              onChange={handleInputChange}
            />
            {errors.car_name && <p className="text-red-500 text-sm mt-1">{errors.car_name}</p>}
          </div>
          {/* Add Feature Section */}
          <div className="w-[70%] mx-auto bg-white p-3 mt-2">
            <div className="flex justify-between items-center">
              <p className="text-gray-600 text-lg mb-4">Economy</p>
              <button
                className="flex items-center gap-1 bg-[#bb8dd9] px-1 text-white rounded-lg"
                onClick={() => setIsModalOpen(true)}
              >
                <FaPlus />
                Add features
              </button>
            </div>
            <ul className="space-y-2">
              {data.features.map((feature, index) => (
                <li key={index} className="text-gray-600 flex items-center justify-between gap-3 ">
                  <div className="flex items-center gap-2">
                    {iconMapping[feature.icon] || <FaSnowflake className="mr-2" />}
                    <p>{feature.name}</p>
                  </div>
                  <button
                    onClick={() => handleRemoveFeature(index)}
                    className="text-red-500 ml-2 hover:text-red-700"
                  >
                    ✖
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-3/5 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Car Details</h2>
          <form id="carForm" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <DetailField label="Brand">
                <select
                  name="brand"
                  value={data.brand}
                  onChange={handleInputChange}
                  className="mt-2 border p-1 rounded-lg text-gray-500 w-3/4"
                >
                  <option value="">Select a brand</option>
                  {brands.map((brand) => (
                    <option key={brand.id} value={brand.name}>
                      {brand.name}
                    </option>
                  ))}
                </select>
                {errors.brand && <p className="text-red-500 text-sm mt-1">{errors.brand}</p>}
              </DetailField>

              <DetailField label="Model">
                <select
                  name="model"
                  value={data.model}
                  onChange={handleInputChange}
                  className="mt-2 border p-1 rounded-lg text-gray-500 w-3/4"
                >
                  <option value="">Select a model</option>
                  {models.map((model) => (
                    <option key={model.id} value={model.name}>
                      {model.name}
                    </option>
                  ))}
                </select>
                {errors.model && <p className="text-red-500 text-sm mt-1">{errors.model}</p>}
              </DetailField>

              <DetailField label="Fuel">
                <select
                  name="fuel"
                  value={data.fuel}
                  onChange={handleInputChange}
                  className="mt-2 border p-1 rounded-lg text-gray-500 w-3/4"
                >
                  <option value="">Select fuel type</option>
                  {fuels.map((fuel) => (
                    <option key={fuel.id} value={fuel.type}>
                      {fuel.type}
                    </option>
                  ))}
                </select>
                {errors.fuel && <p className="text-red-500 text-sm mt-1">{errors.fuel}</p>}
              </DetailField>

              <DetailField label="Car No.">
                <input
                  type="text"
                  name="car_number"
                  value={data.car_number}
                  onChange={handleInputChange}
                  className="mt-2 border p-1 rounded-lg text-gray-500 w-3/4"
                  placeholder="Car Number"
                />
                {errors.car_number && <p className="text-red-500 text-sm mt-1">{errors.car_number}</p>}
              </DetailField>

              <DetailField label="Transmission">
                <select
                  name="transmission"
                  value={data.transmission}
                  onChange={handleInputChange}
                  className="mt-2 border p-1 rounded-lg text-gray-500 w-3/4"
                >
                  <option value="">Select transmission type</option>
                  {transmissions.map((transmission) => (
                    <option key={transmission.id} value={transmission.type}>
                      {transmission.type}
                    </option>
                  ))}
                </select>
                {errors.transmission && <p className="text-red-500 text-sm mt-1">{errors.transmission}</p>}
              </DetailField>

              <DetailField label="Capacity">
                <input
                  type="text"
                  name="capacity"
                  value={data.capacity}
                  onChange={handleInputChange}
                  className="mt-2 border p-1 rounded-lg text-gray-500 w-3/4"
                  placeholder="Capacity"
                />
                {errors.capacity && <p className="text-red-500 text-sm mt-1">{errors.capacity}</p>}
              </DetailField>

              <DetailField label="Status">
                <select
                  name="status"
                  value={data.status}
                  onChange={handleInputChange}
                  className="mt-2 border p-1 rounded-lg text-gray-500 w-3/4"
                >
                  <option value="available">Available</option>
                  <option value="not-available">Not Available</option>
                </select>
                {errors.status && <p className="text-red-500 text-sm mt-1">{errors.status}</p>}
              </DetailField>

              <DetailField label="Price (per day)">
                <input
                  type="text"
                  name="price"
                  value={data.price}
                  onChange={handleInputChange}
                  className="mt-2 border p-1 rounded-lg text-gray-500 w-3/4"
                  placeholder="Enter price"
                />
                {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
              </DetailField>
            </div>
          </form>

        </div>
      </div>
      {/* Modal for Adding features */}
      <div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          contentLabel="Add New Feature Modal"
          className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-[400px] mx-auto mt-20"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <h2 className="text-xl font-bold mb-4">Add New Feature</h2>

          {/* Dropdown for Icons */}
          <label htmlFor="icon-select" className="block text-gray-600 mb-2">
            Select Icon:
          </label>
          <select
            id="icon-select"
            value={featureIcon}
            onChange={(e) => setFeatureIcon(e.target.value)}
            className="w-full border rounded-lg p-2 mb-4"
          >
            <option value="FaSnowflake">❄️ Snowflake</option>
            <option value="FaCarSide">🚗 Car Side</option>
            <option value="FaLanguage">🌐 Language</option>
            <option value="FaUser">👤 User</option>
          </select>

          {/* Input for Feature Name */}
          <label htmlFor="feature-name" className="block text-gray-600 mb-2">
            Feature Name:
          </label>
          <input
            id="feature-name"
            type="text"
            value={newFeature}
            onChange={(e) => setNewFeature(e.target.value)}
            className="w-full border rounded-lg p-2 mb-4"
            placeholder="Enter feature name"
          />

          {/* Buttons */}
          <div className="flex justify-end gap-4">
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={handleFeatureAdd}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </Modal>

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
  <div className="text-sm text-gray-600">
    <strong>{label}</strong>
    <p>{children}</p>
  </div>
);

export default AddCar;
