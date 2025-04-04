import React, { useRef, useState } from 'react';
import { FaPlus, FaTrash, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const DetailsTab = ({ data, setData, handleInputChange }) => {
    const fileInputRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(0); // Tracks the current page of images

    const IMAGES_PER_PAGE = 5; // Number of images to show per page

    // Function to handle adding a new image
    const handleAddImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            setData("tour_images", [...data.tour_images, { file }]);
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

            <div className="flex gap-6 w-full">
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
                                    src={URL.createObjectURL(imageObj.file)}
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
        </div>
    );
};

export default DetailsTab;