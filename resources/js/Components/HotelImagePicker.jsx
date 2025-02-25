import { useState, useEffect } from 'react';
import HotelLocationPicker from "../Components/HotelLocationPicker";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Modal from 'react-modal';
const HotelImagePicker = ({ imageSelector, setImageSelector, setImagePreviews, setData }) => {
    const [location, setLocation] = useState("");
    const [placeId, setPlaceID] = useState("");
    const [images, setImages] = useState([]);
    const [importedImages, setImportedImages] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLocation(value)
    };

    useEffect(() => {
        if (placeId) {
            fetchLocationImages(placeId)
        }
    }, [placeId]);

    const fetchLocationImages = async (placeId) => {
        try {
            const response = await fetch(`/api/location-images?placeId=${placeId}`);
            const data = await response.json();
            console.log(data);
            setImages(data.photos)
        } catch (error) {
            console.error('Error fetching location suggestions:', error);
        }
    };

    const convertImageToBlob = (imgElement) => {
        return new Promise((resolve, reject) => {
            // Create a canvas element
            const canvas = document.createElement("canvas");
            canvas.width = imgElement.naturalWidth;
            canvas.height = imgElement.naturalHeight;

            // Draw the image onto the canvas
            const ctx = canvas.getContext("2d");
            ctx.drawImage(imgElement, 0, 0);

            // Convert the canvas to a Blob
            canvas.toBlob((blob) => {
                if (blob) {
                    // Optionally convert to File
                    const file = new File([blob], "imported_image.jpg", { type: blob.type });
                    resolve(file); // Return the File object
                } else {
                    reject(new Error("Failed to convert image to blob"));
                }
            }, "image/jpeg"); // You can change the format if needed
        });
    };

    const handleImportImage = async (id) => {
        const imgElement = document.getElementById(id); 
        try {
            const imageFile = await convertImageToBlob(imgElement);
            console.log("Image File:", imageFile);
            let updatedImages = [...data.tour_images];
            updatedImages.push({ file: imageFile, preview: URL.createObjectURL(imageFile) });
            setData((prevDetails) => ({
                ...prevDetails,
                tour_images: updatedImages,
            }));
        } catch (error) {
            console.error("Error importing image:", error);
        }
    };

    return (
        <Modal
            isOpen={imageSelector}
            onRequestClose={() => setImageSelector(false)}
            contentLabel="Add Images From google"
            className="bg-white p-6 rounded-lg shadow-lg max-w-[900px] w-full mx-auto mt-20"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
            <h2 className="text-xl font-semibold mb-4">Search For Images</h2>
            <div className="relative my-6">
                <HotelLocationPicker value={location} name="location" handleInputChange={handleInputChange} setPlaceID={setPlaceID} />
            </div>
            <div>
                <div className="hotel-gallery">
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={3}
                        loop={true}
                        pagination={{ clickable: true }}
                        navigation={true}
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={image}
                                    id={`image-import-${index}`}
                                    alt={`Hotel Image ${index + 1}`}
                                    className="hotel-image w-full h-auto rounded"
                                    crossOrigin="anonymous"
                                />
                                <button
                                    className={`absolute bottom-2 right-2 px-3 py-1 rounded bg-blue-600 text-white text-sm ${importedImages.includes(image) ? 'bg-green-500' : ''
                                        }`}
                                    onClick={() => handleImportImage(`image-import-${index}`)}
                                >
                                    {importedImages.includes(image) ? 'Imported' : 'Import'}
                                </button>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <button className="bg-gray-500 text-white px-4 py-2 rounded-lg ml-2" onClick={() => setImageSelector(false)}>
                Cancel
            </button>
        </Modal>
    )
}

export default HotelImagePicker;