import React, { useState } from "react";
import { Link, useForm } from "@inertiajs/react";
import { FaArrowLeft, FaCarSide, FaLanguage, FaPlus, FaSave, FaSnowflake, FaUser } from "react-icons/fa";
import Modal from 'react-modal';
const VEHICLE_TYPES = [
    "Sedan",
    "SUV",
    "Bus",
    "van"
]
const VEHICLE_CATEGORY = [
    "Business",
    "Economy",
    "Luxury"
]
const ONWER = [
    "Platform",
    "Partner Company",
    "Driver"
]

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

    const { data, setData, post, processing, errors } = useForm({
        car_name: car.car_name || "",
        brand: car.brand || "",
        model: car.model || "",
        fuel: car.fuel || "",
        car_number: car.car_number || "",
        transmission: car.transmission || "",
        capacity: car.capacity || "",
        status: car.status || "",
        price: car.price || "",
        tags: car.tags || "",
        car_images: carImages.map((image) => ({ url: image })) || [],
        features: features,

        vehicle_id: car.vehicle_id || "",
        vehicle_type: car.vehicle_type || "",
        vehicle_category: car.vehicle_category || "",
        year_of_manufacture: car.year_of_manufacture || "",
        color: car.color || "",
        chassis_number: car.chassis_number || "",
        price_per_km: car.price_per_km || "",
        owner: car.owner || "",
        trunk_size: car.trunk_size || "",
        mileage: car.mileage || "",
        allowed_for_rides: car.allowed_for_rides ?? false,
        last_use: car.last_use || "",
        note_fuel: car.note_fuel || "",
    });
    console.log(data)

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

        // Merge the previous images with the newly selected ones
        setData((prevData) => ({
            ...prevData,
            car_images: [...prevData.car_images, ...fileArray],
        }));
    };

    const handleRemoveImage = (index) => {
        setData((prevData) => ({
            ...prevData,
            car_images: prevData.car_images.filter((_, i) => i !== index),
        }));
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
            setData("features", [...features, newFeatureObject]);
        }
    };

    // Remove feature function
    const removeFeature = (index) => {
        const updatedFeatures = features.filter((_, i) => i !== index);
        setFeatures(updatedFeatures);
        setData("features", updatedFeatures);
    };

    const handleSubmit = (e) => {
        console.log("submit")
        e.preventDefault();
        post(route("cars.update", car.id));
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
                    onClick={handleSubmit}
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
                    {/* Clickable Upload Area */}
                    <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-6 mb-2 relative bg-gray-50">
                        {/* Display Main Car Image (if available) */}
                        {data.car_images.length > 0 ? (
                            <div className="relative w-full h-full">
                                <img
                                    //src={`/storage/${data.car_images[0].url}`}
                                    alt="Main Car Preview"
                                    className="w-full h-[300px] object-cover rounded-md"
                                    src={data.car_images[0]?.url?.startsWith('blob:') || data.car_images[0]?.url?.startsWith('http')
                                        ? data.car_images[0].url
                                        : `/storage/${data.car_images[0].url}`}
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
                                {image.url.startsWith('blob:') || image.url.startsWith('http') ?
                                    <img
                                        src={`${image.url}`}
                                        alt={`Additional Car Preview ${index}`}
                                        className="w-full h-full object-cover rounded-lg"
                                    /> :
                                    <img
                                        src={`/storage/${image.url}`}
                                        alt={`Additional Car Preview ${index}`}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                }
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
                    <form id="carForm" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <DetailField label="Vehicle ID">
                                <input
                                    type="text"
                                    name="vehicle_id"
                                    value={data.vehicle_id}
                                    onChange={handleInputChange}
                                    className="mt-2 border p-1 rounded-lg text-gray-500 w-3/4"
                                    placeholder="Vehicle ID"
                                />
                            </DetailField>

                            <DetailField label="Vechicle Type">
                                <select
                                    name="vehicle_type"
                                    value={data.vehicle_type}
                                    onChange={handleInputChange}
                                    className="mt-2 border p-1 rounded-lg text-gray-500 w-3/4"
                                >
                                    <option value="">Select a brand</option>
                                    {VEHICLE_TYPES.map((type, index) => (
                                        <option key={index} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>

                            </DetailField>

                            <DetailField label="Vehicle Category">
                                <select
                                    name="vehicle_category"
                                    value={data.vehicle_category}
                                    onChange={handleInputChange}
                                    className="mt-2 border p-1 rounded-lg text-gray-500 w-3/4"
                                >
                                    <option value="">Select a Vehicle Cat.</option>
                                    {VEHICLE_CATEGORY.map((type, index) => (
                                        <option key={index} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>

                            </DetailField>

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

                            <DetailField label="Year of Manufacture">
                                <input
                                    type="number"
                                    name="year_of_manufacture"
                                    value={data.year_of_manufacture}
                                    onChange={handleInputChange}
                                    className="mt-2 border p-1 rounded-lg text-gray-500 w-3/4"
                                    placeholder="Year of Manufacture"
                                    min="1900"
                                    max={new Date().getFullYear()}
                                />
                            </DetailField>

                            <DetailField label="Color">
                                <input
                                    type="text"
                                    name="color"
                                    value={data.color}
                                    onChange={handleInputChange}
                                    className="mt-2 border p-1 rounded-lg text-gray-500 w-3/4"
                                    placeholder="Color"
                                />
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

                            <DetailField label="Chassis Number">
                                <input
                                    type="text"
                                    name="chassis_number"
                                    value={data.chassis_number}
                                    onChange={handleInputChange}
                                    className="mt-2 border p-1 rounded-lg text-gray-500 w-3/4"
                                    placeholder="Chassis Number"
                                />
                                {errors.chassis_number && <p className="text-red-500 text-sm mt-1">{errors.chassis_number}</p>}
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

                            <DetailField label="Price Per KM">
                                <input
                                    type="text"
                                    name="price_per_km"
                                    value={data.price_per_km}
                                    onChange={handleInputChange}
                                    className="mt-2 border p-1 rounded-lg text-gray-500 w-3/4"
                                    placeholder="Enter price per KM"
                                />
                                {errors.price_per_km && <p className="text-red-500 text-sm mt-1">{errors.price_per_km}</p>}
                            </DetailField>

                            <DetailField label="Onwer">
                                <select
                                    name="owner"
                                    value={data.owner}
                                    onChange={handleInputChange}
                                    className="mt-2 border p-1 rounded-lg text-gray-500 w-3/4"
                                >
                                    <option value="">Select Onwer</option>
                                    {ONWER.map((type, index) => (
                                        <option key={index} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>

                            </DetailField>

                            <DetailField label="Tags">
                                <input
                                    type="text"
                                    name="tags"
                                    value={data.tags}
                                    onChange={handleInputChange}
                                    className="mt-2 border p-1 rounded-lg text-gray-500 w-3/4"
                                    placeholder="Enter tags separated by commas"
                                />
                                {errors.tags && <p className="text-red-500 text-sm mt-1">{errors.tags}</p>}
                            </DetailField>
                        </div>
                        <hr></hr>
                        <div className="mt-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Technical Details</h2>
                            <div className="grid grid-cols-2 gap-4 mb-6">
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
                                <DetailField label="Trunk Size">
                                    <input
                                        type="text"
                                        name="trunk_size"
                                        value={data.trunk_size}
                                        onChange={handleInputChange}
                                        className="mt-2 border p-1 rounded-lg text-gray-500 w-3/4"
                                        placeholder="Trunk Size"
                                    />
                                    {errors.trunk_size && <p className="text-red-500 text-sm mt-1">{errors.trunk_size}</p>}
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

                                <DetailField label="Milage">
                                    <input
                                        type="text"
                                        name="mileage"
                                        value={data.mileage}
                                        onChange={handleInputChange}
                                        className="mt-2 border p-1 rounded-lg text-gray-500 w-3/4"
                                        placeholder="0"
                                    />
                                    {errors.mileage && <p className="text-red-500 text-sm mt-1">{errors.mileage}</p>}
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

                                <DetailField label="Allowed for rides">
                                    <select
                                        name="allowed_for_rides"
                                        value={data.allowed_for_rides}
                                        onChange={handleInputChange}
                                        className="mt-2 border p-1 rounded-lg text-gray-500 w-3/4"
                                    >
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                    {errors.allowed_for_rides && <p className="text-red-500 text-sm mt-1">{errors.allowed_for_rides}</p>}
                                </DetailField>

                                <DetailField label="Last Use">
                                    <input
                                        type="date"
                                        name="last_use"
                                        value={data.last_use}
                                        onChange={handleInputChange}
                                        className="mt-2 border p-1 rounded-lg text-gray-500 w-3/4"
                                        placeholder="0"
                                    />
                                    {errors.last_use && <p className="text-red-500 text-sm mt-1">{errors.last_use}</p>}
                                </DetailField>

                                <DetailField label="Comment ">
                                    <input
                                        type="text"
                                        name="note_fuel"
                                        value={data.note_fuel}
                                        onChange={handleInputChange}
                                        className="mt-2 border p-1 rounded-lg text-gray-500 w-3/4"
                                        placeholder="Comment "
                                    />
                                    {errors.note_fuel && <p className="text-red-500 text-sm mt-1">{errors.note_fuel}</p>}
                                </DetailField>

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

const DetailField = ({ label, children }) => (
    <div className="text-sm text-gray-600">
        <strong>{label}</strong>
        <p>{children}</p>
    </div>
);
export default EditCarCom;