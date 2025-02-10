import React, { useState } from 'react';
import Modal from 'react-modal';


const ImageGallery = ({ images }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleShowModal = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {/* Main image */}
        <div className="col-span-2 row-span-2">
          <img src={images[0]} alt="Image 0" className="w-full h-full object-cover rounded-lg" />
        </div>

        {images.slice(1, 5).map((src, index) => (
          <div key={index} className="relative">
            <img src={src} alt={`Image ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
          </div>
        ))}

        {/* Overlay image */}
        {images.length > 5 && (
          <div className="relative">
            <img src={images[5]} alt="Image 5" className="w-full h-full object-cover rounded-lg" />
            <span className="absolute inset-0 bg-opacity-50 text-white flex items-center justify-center">
              <button
                onClick={() => handleShowModal(5)}
                className="py-1 px-2 bg-red-700 opacity-60 rounded-xl text-[6px] xs:text-xs lg:text-lg"
              >
                See all {images.length} images
              </button>
            </span>
          </div>
        )}
      </div>

      {/* Modal */}
      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        contentLabel="Image Gallery"
        className="bg-white p-4 rounded-lg max-w-3xl w-full relative"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      >
        <button
          onClick={handleCloseModal}
          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2"
        >
          Close
        </button>
        <button
          onClick={handlePrevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-red-500 text-white rounded-full p-2"
        >
          &lt;
        </button>
        <button
          onClick={handleNextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-500 text-white rounded-full p-2"
        >
          &gt;
        </button>
        <div className="flex items-center justify-center">
          <img src={images[currentIndex]} alt={`Image ${currentIndex}`} className="w-full h-full object-cover rounded-lg" />
        </div>
      </Modal>
    </div>
  );
};

export default ImageGallery;