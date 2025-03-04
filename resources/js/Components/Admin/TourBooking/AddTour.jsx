import {
  FaArrowLeft,
  FaCheck,
  FaEdit,
  FaParking,
  FaPlus,
  FaSave,
  FaSpa,
  FaSwimmingPool,
  FaTimes,
  FaUtensils,
  FaWifi,
} from "react-icons/fa";
import { useForm } from "@inertiajs/react"; // Correct import
// import mapImg from "../../assets/map.png";
import { BiLocationPlus } from "react-icons/bi";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import Modal from 'react-modal';
import HotelLocationPicker from "../../HotelLocationPicker";
// import { useNavigate } from "react-router-dom";

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

const AddTour = () => {
  const [imagePreviews, setImagePreviews] = useState({
    image1: null,
    image2: null,
    image3: null,
    image4: null,
    image5: null,
    image6: null,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newFacility, setNewFacility] = useState("");
  const [featureIcon, setFeatureIcon] = useState("FaWifi");
  const [typeModalOpen, setTypeModalOpen] = useState(false);
  const [newType, setNewType] = useState("");
  const [typeStatus, setTypeStatus] = useState("FaCheck"); // Default to FaCheck

  {/* Image Importer Config */ }
  const [imageSelector, setImageSelector] = useState(false);

  const { data, setData, post, processing, errors } = useForm({
    name: "",
    duration: "",
    location: "",
    food: "",
    tour_type: "",
    persons: "",
    price: 0,
    tour_images: [],  // Initialize carImages as an array
    summary: "",
    facilities: [],
    includedExcludedTypes: [],
    condition: "",
    tour_itinerary: [],
  });


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
  // Handel input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Handle itinerary text and image change
  const handleItineraryChange = (index, field, value) => {
    const updatedItinerary = [...data.tour_itinerary];
    updatedItinerary[index] = {
      ...updatedItinerary[index],
      [field]: value,
    };
    setData((prev) => ({
      ...prev,
      tour_itinerary: updatedItinerary,
    }));
  };

  const handleItineraryImageChange = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Generate preview URL
      setImagePreviews((prev) => ({
        ...prev,
        [index]: imageUrl,
      }));

      handleItineraryChange(index, "image", file);
    }
  };

  // Add a new itinerary day
  const addNewItinerary = () => {
    setData((prev) => ({
      ...prev,
      tour_itinerary: [...prev.tour_itinerary, { day: "", image: null }],
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    let updatedPreviews = { ...imagePreviews };
    let updatedImages = [...data.tour_images];

    files.forEach((file, index) => {
      if (index < 6) {
        const imageKey = `image${index + 1}`;

        // Preview Image
        if (!updatedPreviews[imageKey]) {
          const reader = new FileReader();
          reader.onloadend = () => {
            updatedPreviews[imageKey] = reader.result;
            setImagePreviews({ ...updatedPreviews });
          };
          reader.readAsDataURL(file);
        }

        updatedImages[index] = {
          file: file,
          preview: updatedPreviews[imageKey] || null,
        };
      }
    });

    setData((prevDetails) => ({
      ...prevDetails,
      tour_images: updatedImages,
    }));
  };

  const handleRemoveImage = (imageKey) => {
    let updatedPreviews = { ...imagePreviews };
    updatedPreviews[imageKey] = null;


    for (let i = parseInt(imageKey.replace('image', '')); i < 6; i++) {
      const nextImageKey = `image${i + 1}`;
      updatedPreviews[`image${i}`] = updatedPreviews[nextImageKey];
    }
    updatedPreviews.image6 = null;

    setImagePreviews(updatedPreviews);

    let updatedImages = [...data.tour_images];
    const indexToRemove = parseInt(imageKey.replace('image', '')) - 1;
    updatedImages.splice(indexToRemove, 1);
    updatedImages.push({ file: null, preview: null });

    setData((prevDetails) => ({
      ...prevDetails,
      tour_images: updatedImages,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("duration", data.name);
    formData.append("duration", data.duration);
    formData.append("location", data.location);
    formData.append("food", data.food);
    formData.append("tour_type", data.tour_type);
    formData.append("persons", data.persons);
    formData.append("price", data.price);
    data.tour_images.forEach((imageObj) => {
      if (imageObj.file) {
        formData.append("tour_images[]", imageObj.file);
      }
    });
    formData.append("summary", data.summary);
    formData.append("facilities", JSON.stringify(data.facilities)); // Send features as JSON string
    formData.append("includedExcludedTypes", JSON.stringify(data.includedExcludedTypes)); // Send types as JSON string
    formData.append("condition", data.condition);
    formData.append("tour_itinerary", JSON.stringify(data.tour_itinerary)); // Send features as JSON string

    try {
      await post("/api/tour/add-tour", formData, {
        onSuccess: () => {
          setMessage("tour added successfully!");
        },
      });
    } catch (error) {
      console.error("Error while adding tour:", error);
      setMessage("An error occurred while adding the tour.");
    }
  };

  // const navigate = useNavigate();
  return (
    <div className="space-y-3 p-5 bg-white m-5">
      <div className="flex justify-between items-center">
        <Link
          href="/dashboard/tour-booking"
          // onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-800"
        >
          <FaArrowLeft className="mr-2" />
          <span>Back</span>
        </Link>
        <div className="flex space-x-2">
          <button className="flex items-center bg-[#e4baff] text-white px-3 py-1 rounded-md">
            <FaEdit className="mr-1" />
            Edit
          </button>
          <button onClick={handleSubmit} className="flex items-center bg-[#e4baff] text-white px-3 py-1 rounded-md">
            <FaSave className="mr-1" />
            Save
          </button>
        </div>
      </div>
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={handleInputChange}
        className="rounded px-3 py-[5px] w-full"
      />
      {/* images */}
      <div className="grid grid-cols-4 gap-4">
        {/* Image 1 */}
        <div className="col-span-2 row-span-2 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md">
          {imagePreviews.image1 && (
            <div className="relative">
              <img
                src={imagePreviews.image1}
                alt="image1"
                className="object-cover rounded-md"
              />
              <button
                onClick={() => handleRemoveImage('image1')}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
              >
                X
              </button>
            </div>
          )}
        </div>

        {/* Image 2 */}
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md">
          {imagePreviews.image2 && (
            <div className="relative">
              <img
                src={imagePreviews.image2}
                alt="image2"
                className="object-cover rounded-md"
              />
              <button
                onClick={() => handleRemoveImage('image2')}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
              >
                X
              </button>
            </div>
          )}
        </div>

        {/* Map Image */}
        <div className="relative">
          <HotelLocationPicker value={data.location} name="location" handleInputChange={handleInputChange} />
        </div>

        {/* Image 3 */}
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md">
          {imagePreviews.image3 && (
            <div className="relative">
              <img
                src={imagePreviews.image3}
                alt="image3"
                className="object-cover rounded-md"
              />
              <button
                onClick={() => handleRemoveImage('image3')}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
              >
                X
              </button>
            </div>
          )}
        </div>
        {/* Details */}
        <div className="row-span-2">
          <div className="bg-[#e6c0ff] p-4 rounded-md shadow row-span-2">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Details
            </h3>
            <ul className="space-y-5">
              <li className="flex justify-between items-center">
                <span>Duration</span>
                <input
                  type="text"
                  name="duration"
                  value={data.duration}
                  onChange={handleInputChange}
                  className="bg-[#e6c0ff] rounded px-1 py-[2px]"
                />
              </li>
              <li className="flex justify-between">
                <span>Food</span>
                <input
                  type="text"
                  name="food"
                  value={data.food}
                  onChange={handleInputChange}
                  className="bg-[#e6c0ff] rounded px-1 py-[2px]"
                />
              </li>
              <li className="flex justify-between">
                <span>Tour type</span>
                <input
                  type="text"
                  name="tour_type"
                  value={data.tour_type}
                  onChange={handleInputChange}
                  className="bg-[#e6c0ff] rounded px-1 py-[2px]"
                />
              </li>
              <li className="flex justify-between">
                <span>Person</span>
                <input
                  type="text"
                  name="persons"
                  value={data.persons}
                  onChange={handleInputChange}
                  className="bg-[#e6c0ff] rounded px-1 py-[2px]"
                />
              </li>
              <li className="flex justify-between">
                <span>Price</span>
                <input
                  type="text"
                  name="price"
                  value={data.price}
                  onChange={handleInputChange}
                  className="bg-[#e6c0ff] rounded px-1 py-[2px]"
                />
              </li>
            </ul>
          </div>
          <button className="bg-[#e6c0ff] py-3 px-6 mt-3 rounded-md text-center w-full" onClick={() => setImageSelector(true)}>
            Import Images
          </button>
        </div>
        {/* Image 4 */}
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md">
          {imagePreviews.image4 && (
            <div className="relative">
              <img
                src={imagePreviews.image4}
                alt="image4"
                className="object-cover rounded-md"
              />
              <button
                onClick={() => handleRemoveImage('image4')}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
              >
                X
              </button>
            </div>
          )}
        </div>
        {/* Image 5 */}
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md">
          {imagePreviews.image5 && (
            <div className="relative">
              <img
                src={imagePreviews.image5}
                alt="image5"
                className="object-cover rounded-md"
              />
              <button
                onClick={() => handleRemoveImage('image5')}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
              >
                X
              </button>
            </div>
          )}
        </div>
        {/* Image 6 (Only Uploadable Image) */}
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md">
          <label htmlFor={"image6"} className="flex flex-col items-center cursor-pointer">
            {imagePreviews.image6 ? (
              <div className="relative">
                <img
                  src={imagePreviews.image6}
                  alt="Image 6 Preview"
                  className="object-cover rounded-md"
                />
                <button
                  onClick={() => handleRemoveImage('image6')}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
                >
                  X
                </button>
              </div>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16V8a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 10.7a4.5 4.5 0 01-8 0M12 12v2" />
                </svg>
                <span className="text-gray-600 text-sm">Click to upload images</span>
              </>
            )}
          </label>
          <input
            id={"image6"}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handleImageChange}
          />
        </div>
      </div>
      {/* summary */}
      <h1 className="text-2xl font-semibold text-gray-800">Summary</h1>
      <textarea
        name="summary"
        value={data.summary}
        onChange={handleInputChange}
        placeholder="Add Summary"
        rows="3"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"
      ></textarea>
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
      {/* condition */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-800 my-3">Condition</h1>
        <textarea
          name="condition"
          value={data.condition}
          onChange={handleInputChange}
          placeholder="Add Condition"
          rows="3"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"
        ></textarea>
      </div>
      {/* tour itinary */}
      <div className="space-y-8">
        <div className="space-y-8">
          <h1 className="text-2xl font-semibold text-gray-800 my-5">
            Tour Itinerary
          </h1>
          {data.tour_itinerary.map((itinerary, index) => (
            <div key={index} className="flex items-center space-x-6">
              <div className="w-4/5">
                <label className="block text-sm font-medium text-gray-700">
                  Day: {index + 1}
                </label>
                <textarea
                  className="w-full p-4 h-32 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9] resize-none"
                  placeholder="Add itinerary details"
                  value={itinerary.day}
                  onChange={(e) =>
                    handleItineraryChange(index, "day", e.target.value)
                  }
                ></textarea>
              </div>
              <div className="w-1/5 bg-[#f4f4f4] p-4 rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
                <label
                  htmlFor={`itineraryImage${index}`}
                  className="flex flex-col items-center cursor-pointer text-center"
                >
                  {imagePreviews[index] ? (
                    <img
                      src={imagePreviews[index]}
                      alt={`Day ${index + 1}`}
                      className="h-16 w-16 object-cover rounded-lg mb-3"
                    />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 text-gray-400 mb-3"
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 10.7a4.5 4.5 0 01-8 0M12 12v2"
                      />
                    </svg>
                  )}
                  <span className="text-gray-600 text-sm">
                    {imagePreviews[index]
                      ? "Change Image"
                      : "Click to upload image"}
                  </span>
                </label>
                <input
                  id={`itineraryImage${index}`}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleItineraryImageChange(index, e)}
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addNewItinerary}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Add New Day
          </button>
        </div>
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

export default AddTour;
