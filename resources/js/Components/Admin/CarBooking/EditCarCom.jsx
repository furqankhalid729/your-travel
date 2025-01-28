import React, { useState } from "react";
import { Link, useForm } from "@inertiajs/react";
import { FaArrowLeft, FaCarSide, FaLanguage, FaPlus, FaSave, FaSnowflake, FaUser } from "react-icons/fa";
import Modal from 'react-modal';


const EditCarCom = ({ car, brands, models, fuels, transmissions }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [featureIcon, setFeatureIcon] = useState("FaSnowflake");
    const [newFeature, setNewFeature] = useState("");
    const [features, setFeatures] = useState(car.features || []);

    const iconMapping = {
        FaSnowflake: <FaSnowflake />,
        FaCarSide: <FaCarSide />,
        FaLanguage: <FaLanguage />,
        FaUser: <FaUser />,
    };
    const carImages = car.car_images ? JSON.parse(car.car_images) : [];

    const { data, setData, put, processing, errors } = useForm({
        car_name: car.car_name || "",
        brand: car.brand || "",
        model: car.model || "",
        fuel: car.fuel || "",
        car_number: car.car_number || "",
        transmission: car.transmission || "",
        capacity: car.capacity || "",
        status: car.status || "",
        price: car.price || "",
        car_images: [],
        features: features,
    });


    // Handle image selection (new images)
    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setData("car_images", files); // Set the new images
    };

    // Handle image deletion
    const handleImageDelete = (index) => {
        const newImages = [...data.car_images];
        newImages.splice(index, 1); // Remove the selected image
        setData("car_images", newImages); // Update the form state
    };

    // Handle adding new feature
    const handleFeatureAdd = () => {
        if (newFeature.trim() !== "") {
            const newFeatureObject = {
                name: newFeature,
                icon: featureIcon,
            };
            setFeatures([...features, newFeatureObject]);
            setNewFeature("");
            setIsModalOpen(false);
            setData("features", [...features, newFeatureObject]); // Update the features in form data
        }
    };

    // Remove feature function
    const removeFeature = (index) => {
        const updatedFeatures = features.filter((_, i) => i !== index);
        setFeatures(updatedFeatures);
        setData("features", updatedFeatures); // Update the features in form data after removing
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("cars.update", car.id));
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
                    form="CarEditForm"
                    disabled={processing}
                    className="flex items-center bg-[#e4baff] text-white px-4 py-2 rounded-md hover:bg-[#d19aed]"
                >
                    <FaSave className="mr-2" />
                    {processing ? "Updating..." : "Update Car"}
                </button>
            </div>
            {/* Content Section */}
            <div className="flex mt-6 gap-6">
                {/* Left Panel */}
                <div className="w-2/5 p-4 rounded-lg shadow">
                    {/* Car Images */}
                    <div className="col-span-2  my-4">
                        <label htmlFor="car_images" className="block text-sm font-medium text-gray-700">
                            Car Images
                        </label>

                        {/* Display existing car images */}
                        <div className="flex flex-wrap gap-4 mt-2">
                            {carImages.map((image, index) => (
                                <div key={index} className="relative">
                                    <img
                                        src={`/storage/${image}`} // Assuming your images are stored in public storage
                                        alt={`Car Image ${index + 1}`}
                                        className="w-32 h-32 object-cover rounded-lg"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleImageDelete(index)}
                                        className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
                                    >
                                        X
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Image upload input */}
                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleImageChange}
                            className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    {/* Car Name */}
                    <div className="text-center">
                        <input
                            id="car_name"
                            type="text"
                            value={data.car_name}
                            onChange={(e) => setData("car_name", e.target.value)}
                            className="text-center"
                        />
                        {errors.car_name && <p className="text-sm text-red-600">{errors.car_name}</p>}
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
                            {/* Displaying previously added features */}
                            {features.map((feature, index) => (
                                <li key={index} className="text-gray-600 flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-2">
                                        {iconMapping[feature.icon] || <FaSnowflake className="mr-2" />}
                                        <p>{feature.name}</p>
                                    </div>
                                    <button
                                        onClick={() => removeFeature(index)}
                                        className="text-red-500 ml-2"
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
                    <form id="CarEditForm" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            {/* Brand */}
                            <div>
                                <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
                                    Brand
                                </label>
                                <select
                                    id="brand"
                                    value={data.brand}
                                    onChange={(e) => setData("brand", e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                    <option value="">Select a brand</option>
                                    {brands.map((brand) => (
                                        <option key={brand.id} value={brand.name}>
                                            {brand.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.brand && <p className="text-sm text-red-600">{errors.brand}</p>}
                            </div>

                            {/* Model */}
                            <div>
                                <label htmlFor="model" className="block text-sm font-medium text-gray-700">
                                    Model
                                </label>
                                <select
                                    id="model"
                                    value={data.model}
                                    onChange={(e) => setData("model", e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                    <option value="">Select a model</option>
                                    {models.map((model) => (
                                        <option key={model.id} value={model.name}>
                                            {model.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.model && <p className="text-sm text-red-600">{errors.model}</p>}
                            </div>

                            {/* Fuel */}
                            <div>
                                <label htmlFor="fuel" className="block text-sm font-medium text-gray-700">
                                    Fuel Type
                                </label>
                                <select
                                    id="fuel"
                                    value={data.fuel}
                                    onChange={(e) => setData("fuel", e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                    <option value="">Select a fuel type</option>
                                    {fuels.map((fuel) => (
                                        <option key={fuel.id} value={fuel.type}>
                                            {fuel.type}
                                        </option>
                                    ))}
                                </select>
                                {errors.fuel && <p className="text-sm text-red-600">{errors.fuel}</p>}
                            </div>

                            {/* Car Number */}
                            <div>
                                <label htmlFor="car_number" className="block text-sm font-medium text-gray-700">
                                    Car Number
                                </label>
                                <input
                                    id="car_number"
                                    type="text"
                                    value={data.car_number}
                                    onChange={(e) => setData("car_number", e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                {errors.car_number && <p className="text-sm text-red-600">{errors.car_number}</p>}
                            </div>

                            {/* Transmission */}
                            <div>
                                <label htmlFor="transmission" className="block text-sm font-medium text-gray-700">
                                    Transmission
                                </label>
                                <select
                                    id="transmission"
                                    value={data.transmission}
                                    onChange={(e) => setData("transmission", e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                    <option value="">Select a transmission</option>
                                    {transmissions.map((transmission) => (
                                        <option key={transmission.id} value={transmission.type}>
                                            {transmission.type}
                                        </option>
                                    ))}
                                </select>
                                {errors.transmission && <p className="text-sm text-red-600">{errors.transmission}</p>}
                            </div>

                            {/* Capacity */}
                            <div>
                                <label htmlFor="capacity" className="block text-sm font-medium text-gray-700">
                                    Seating Capacity
                                </label>
                                <input
                                    id="capacity"
                                    type="number"
                                    value={data.capacity}
                                    onChange={(e) => setData("capacity", e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                {errors.capacity && <p className="text-sm text-red-600">{errors.capacity}</p>}
                            </div>

                            {/* Price */}
                            <div>
                                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                    Price
                                </label>
                                <input
                                    id="price"
                                    type="number"
                                    value={data.price}
                                    onChange={(e) => setData("price", e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                {errors.price && <p className="text-sm text-red-600">{errors.price}</p>}
                            </div>

                            {/* Status */}
                            <div>
                                <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                                    Status
                                </label>
                                <select
                                    id="status"
                                    value={data.status}
                                    onChange={(e) => setData("status", e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                    <option value="available">Available</option>
                                    <option value="unavailable">Unavailable</option>
                                </select>
                                {errors.status && <p className="text-sm text-red-600">{errors.status}</p>}
                            </div>
                        </div>
                    </form>

                </div>
            </div>
            {/* Modal for Adding Features */}
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
    );
};

export default EditCarCom;