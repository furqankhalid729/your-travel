import React, { useRef, useState } from 'react';
import Modal from 'react-modal';
import { FaPlus, FaTrash, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import {
    FaCheck,
    FaEdit,
    FaParking,
    FaSave,
    FaSpa,
    FaSwimmingPool,
    FaTimes,
    FaUtensils,
    FaWifi,
} from "react-icons/fa";

const iconMapping = {
    FaWifi: <FaWifi />,
    FaUtensils: <FaUtensils />,
    FaSpa: <FaSpa />,
    FaSwimmingPool: <FaSwimmingPool />,
    FaParking: <FaParking />,
};

const TypeIconMapping = {
    FaCheck: <FaCheck />,
    FaTimes: <FaTimes />,
};

const DetailsTab = ({ data, setData, handleInputChange }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newFacility, setNewFacility] = useState("");
    const [featureIcon, setFeatureIcon] = useState("FaWifi");
    const [typeModalOpen, setTypeModalOpen] = useState(false);
    const [newType, setNewType] = useState("");
    const [typeStatus, setTypeStatus] = useState("FaCheck");
    const fileInputRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(0); // Tracks the current page of images

    const IMAGES_PER_PAGE = 5; // Number of images to show per page

    // handle facilities add
    const handleFacilitiesAdd = () => {
        if (newFacility && featureIcon) {
            setData((prevDetails) => ({
                ...prevDetails,
                facilities: [...prevDetails.facilities, { name: newFacility, icon: featureIcon }],
            }));
            setNewFacility("");
            setFeatureIcon("FaWifi");
            setIsModalOpen(false);
        }
    };

    // Handle type add (included/excluded)
    const handleTypeAdd = () => {
        if (newType && typeStatus) {
            setData((prevDetails) => ({
                ...prevDetails,
                includedExcludedTypes: [
                    ...prevDetails.includedExcludedTypes,
                    { name: newType, icon: typeStatus },
                ],
            }));
            setNewType("");
            setTypeStatus("FaCheck");
            setTypeModalOpen(false);
        }
    };
    const handleAddImage = (event) => {
        const file = event.target.files[0];
        const imagePreview = URL.createObjectURL(file);
        if (file) {
            setData("tour_images", [...data.tour_images, { file, preview: imagePreview }]);
        }
    };

    // Function to handle removing an image
    const handleRemoveImage = (indexToRemove) => {
        const updatedImages = data.tour_images.filter((_, index) => index !== indexToRemove);
        setData("tour_images", updatedImages);

        // Adjust the current page if necessary
        if (currentPage >= Math.ceil(updatedImages.length / IMAGES_PER_PAGE)) {
            setCurrentPage(Math.max(0, Math.ceil(updatedImages.length / IMAGES_PER_PAGE) - 1));
        }
    };

    // Function to navigate to the previous page
    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(0, prevPage - 1));
    };

    // Function to navigate to the next page
    const handleNextPage = () => {
        setCurrentPage((prevPage) =>
            Math.min(prevPage + 1, Math.ceil(data.tour_images.length / IMAGES_PER_PAGE) - 1)
        );
    };

    // Get the images for the current page
    const paginatedImages = data.tour_images.slice(
        currentPage * IMAGES_PER_PAGE,
        (currentPage + 1) * IMAGES_PER_PAGE
    );

    return (
        <div className="w-[96%] mx-auto flex flex-col gap-5">
            <h1 className="font-[600] text-[20px]">Details</h1>

            <div>
                <label htmlFor="name" className="pl-1 font-[400] text-[14px]">Name</label>
                <input
                    type="text"
                    name="name"
                    className="w-full py-3 px-4 rounded-xl outline-none"
                    value={data.name}
                    onChange={handleInputChange}
                />
            </div>

            {/* <div className="flex gap-6 w-full">
                <div className="w-[50%]">
                    <label htmlFor="keyword" className="pl-1 font-[400] text-[14px]">Keywords</label>
                    <textarea
                        rows={6}
                        name="keywords"
                        type="text"
                        className="w-full py-3 px-4 rounded-xl outline-none"
                        value={data.keywords}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="w-[50%]">
                    <label htmlFor="facilities" className="pl-1 font-[400] text-[14px]">Facilities</label>
                    <textarea
                        rows={6}
                        type="text"
                        className="w-full py-3 px-4 rounded-xl outline-none"
                        name="facilities"
                        value={data.facilities}
                        onChange={handleInputChange}
                    />
                </div>
            </div> */}
            {/* facilities */}
            <div className="flex justify-between pt-3">
                <h1 className="text-2xl font-semibold text-gray-800">Facilities</h1>
                <button
                    className="flex items-center gap-1 bg-[#bb8dd9] px-1 text-white rounded-lg"
                    onClick={() => setIsModalOpen(true)}
                >
                    <FaPlus />
                    Add Facilities
                </button>
            </div>
            {/* facilities div */}
            <div className="grid grid-cols-4 gap-4">
                {data.facilities.map((feature, index) => (
                    <p key={index} className="flex items-center gap-2 p-4">
                        <span className="text-[#e4baff]">
                            {iconMapping[feature.icon] || <FaWifi className="mr-2" />} {/* Fallback to FaSnowflake */}
                        </span>{" "}
                        {feature.name}
                    </p>
                ))}
            </div>

            {/* included/excluted btn*/}
            <div className="flex justify-between pt-3">
                <h1 className="text-2xl font-semibold text-gray-800">
                    Included/Excluded
                </h1>
                <button
                    className="flex items-center gap-1 bg-[#bb8dd9] px-1 text-white rounded-lg"
                    onClick={() => setTypeModalOpen(true)}
                >
                    <FaPlus />
                    Add Type
                </button>
            </div>
            {/* included/excluted div */}
            <div className="grid grid-cols-2 gap-2">
                {data.includedExcludedTypes.map((type, index) => (
                    <p key={index} className="flex items-center gap-2 p-1">
                        <span className="text-[#e4baff]">
                            {TypeIconMapping[type.icon] || <FaCheck />}
                        </span>
                        {type.name}
                    </p>
                ))}
            </div>
            {/* Description */}
            <div className="w-full">
                <label htmlFor="description" className="pl-1 font-[400] text-[14px]">Description</label>
                <textarea
                    rows={6}
                    name="description"
                    type="text"
                    className="w-full py-3 px-4 rounded-xl outline-none"
                    value={data.description}
                    onChange={handleInputChange}
                />
            </div>

            {/* Images */}
            <div className="my-5">
                <div className="flex justify-between items-center">
                    <h2 className="font-[600] text-[20px]">Images</h2>
                    <button
                        type="button"
                        onClick={() => fileInputRef.current.click()} // Trigger file input click
                        className="bg-black flex items-center justify-center px-4 py-2 rounded-xl gap-1 text-white text-[14px]"
                    >
                        <FaPlus className="text-white" /> Add
                    </button>
                    {/* Hidden file input */}
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleAddImage}
                        className="hidden"
                        multiple
                    />
                </div>

                {/* Render Image Grid */}
                <div className="mt-4 grid grid-cols-5 gap-4">
                    {paginatedImages.map((imageObj, index) => (
                        <div
                            key={index + currentPage * IMAGES_PER_PAGE}
                            className="relative w-[200px] h-[200px] border border-[#808080] rounded-xl overflow-hidden"
                        >
                            {imageObj.file ? (
                                <img
                                    src={imageObj.preview}
                                    alt={`Tour Image ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-[#808080]">
                                    No Image
                                </div>
                            )}
                            <button
                                type="button"
                                onClick={() => handleRemoveImage(index + currentPage * IMAGES_PER_PAGE)}
                                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
                            >
                                <FaTrash />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Pagination Buttons */}
                {data.tour_images.length > IMAGES_PER_PAGE && (
                    <div className="flex justify-between items-center mt-4">
                        <button
                            type="button"
                            onClick={handlePreviousPage}
                            disabled={currentPage === 0}
                            className={`px-4 py-2 rounded-xl ${currentPage === 0 ? "bg-gray-300" : "bg-black text-white"
                                }`}
                        >
                            <FaArrowLeft /> Previous
                        </button>
                        <button
                            type="button"
                            onClick={handleNextPage}
                            disabled={currentPage === Math.ceil(data.tour_images.length / IMAGES_PER_PAGE) - 1}
                            className={`px-4 py-2 rounded-xl ${currentPage === Math.ceil(data.tour_images.length / IMAGES_PER_PAGE) - 1
                                ? "bg-gray-300"
                                : "bg-black text-white"
                                }`}
                        >
                            Next <FaArrowRight />
                        </button>
                    </div>
                )}
            </div>
            {/* models */}
            <div>
                {/* Modal for Adding facilities */}
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={() => setIsModalOpen(false)}
                    contentLabel="Add New facilities Modal"
                    className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-[400px] mx-auto mt-20"
                    overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                >
                    <h2 className="text-xl font-bold mb-4">Add New Facility</h2>

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
                        <option value="FaWifi">FaWifi</option>
                        <option value="FaUtensils">FaUtensils</option>
                        <option value="FaSpa">FaSpa</option>
                        <option value="FaSwimmingPool">FaSwimmingPool</option>
                        <option value="FaParking">FaParking</option>
                    </select>

                    {/* Input for Feature Name */}
                    <label htmlFor="Facility-name" className="block text-gray-600 mb-2">
                        Facility Name:
                    </label>
                    <input
                        id="Facility-name"
                        type="text"
                        value={newFacility}
                        onChange={(e) => setNewFacility(e.target.value)}
                        className="w-full border rounded-lg p-2 mb-4"
                        placeholder="Enter Facility name"
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
                            onClick={handleFacilitiesAdd}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Save
                        </button>
                    </div>
                </Modal>
                {/* Modal for adding Included/Excluded type */}
                <Modal
                    isOpen={typeModalOpen}
                    onRequestClose={() => setTypeModalOpen(false)}
                    contentLabel="Add Included/Excluded Type"
                    className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-[400px] mx-auto mt-20"
                    overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                >
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Add Type</h2>
                    <input
                        type="text"
                        name="newType"
                        value={newType}
                        onChange={(e) => setNewType(e.target.value)}
                        placeholder="Type name"
                        className="w-full p-2 border border-gray-300 rounded-md mb-4"
                    />
                    <div className="flex space-x-2">
                        <button
                            onClick={() => setTypeStatus("FaCheck")}
                            className={`p-2 ${typeStatus === "FaCheck" ? "bg-[#bb8dd9]" : "bg-gray-300"} rounded-md`}
                        >
                            <FaCheck />
                        </button>
                        <button
                            onClick={() => setTypeStatus("FaTimes")}
                            className={`p-2 ${typeStatus === "FaTimes" ? "bg-[#bb8dd9]" : "bg-gray-300"} rounded-md`}
                        >
                            <FaTimes />
                        </button>
                    </div>
                    <button
                        onClick={handleTypeAdd}
                        className="mt-4 bg-[#bb8dd9] text-white p-2 rounded-md w-full"
                    >
                        Add Type
                    </button>
                </Modal>
            </div>
        </div>
    );
};

export default DetailsTab;