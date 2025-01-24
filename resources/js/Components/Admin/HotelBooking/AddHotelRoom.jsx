import { Link } from "@inertiajs/react";
import {
  FaArrowLeft,
  FaCheck,
  FaEdit,
  FaEye,
  FaParking,
  FaPlus,
  FaSave,
  FaSpa,
  FaSwimmingPool,
  FaTrash,
  FaTimes,
  FaUtensils,
  FaWifi,
} from "react-icons/fa";
import { useForm } from "@inertiajs/react"; // Correct import

// import mapImg from "../../assets/map.png";
// import { useNavigate } from "react-router-dom";
import { BiLocationPlus } from "react-icons/bi";
import { useState } from "react";
import Modal from 'react-modal';

const roomData = [
  {
    id: 1,
    roomType: "Luxury Room",
    numberOfRooms: 5,
    availableRooms: 3,
    price: "$250/night",
  },
  {
    id: 2,
    roomType: "Standard Room",
    numberOfRooms: 10,
    availableRooms: 6,
    price: "$150/night",
  },
  {
    id: 3,
    roomType: "Deluxe Room",
    numberOfRooms: 8,
    availableRooms: 4,
    price: "$200/night",
  },
];

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


const AddHotelRoom = () => {
  // const navigate = useNavigate();
  const [imagePreviews, setImagePreviews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newFacility, setNewFacility] = useState("");
  const [featureIcon, setFeatureIcon] = useState("FaSnowflake");
  const [typeModalOpen, setTypeModalOpen] = useState(false);
  const [newType, setNewType] = useState("");
  const [typeStatus, setTypeStatus] = useState("FaCheck"); // Default to FaCheck


  const { data, setData, post, processing, errors } = useForm({
    duration: "",
    location: "",
    food: "",
    tour_type: "",
    persons: "",
    price: 0,
    tour_images: [],  // Initialize carImages as an array
    summary: "",
    facilities: [],
    types: [],
  });


  // handle facilities add
  const handleFacilitiesAdd = () => {
    if (newFacility && featureIcon) {
      setData((prevDetails) => ({
        ...prevDetails,
        facilities: [...prevDetails.facilities, { name: newFacility, icon: featureIcon }],
      }));
      setNewFacility("");
      setFeatureIcon("FaSnowflake");
      setIsModalOpen(false);
    }
  };

  // Handle type add (types)
  const handleTypeAdd = () => {
    if (newType && typeStatus) {
      setData((prevDetails) => ({
        ...prevDetails,
        types: [
          ...prevDetails.types,
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

  // Handle image change and save file and URL
  const handleImageChange = (event, field) => {
    const file = event.target.files[0];
    if (file) {
      // Create a Blob URL for the uploaded image
      const imageUrl = URL.createObjectURL(file);

      // Update image preview state
      setImagePreviews((prev) => ({
        ...prev,
        [field]: imageUrl, // Show preview image
      }));

      // Store the image as an object with `file` and `url` in the `tour_images` array
      setData((prevData) => ({
        ...prevData,
        tour_images: [
          ...prevData.tour_images.filter((image) => image.field !== field), // Remove existing entry for this field
          { field, file, url: imageUrl }, // Add new image with file and URL
        ],
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("duration", data.duration);
    formData.append("location", data.location);
    formData.append("food", data.food);
    formData.append("tour_type", data.tour_type);
    formData.append("persons", data.persons);
    formData.append("price", data.price);
    formData.append("tour_images", JSON.stringify(data.tour_images)); // Send features as JSON string
    formData.append("summary", data.summary);
    formData.append("facilities", JSON.stringify(data.facilities)); // Send features as JSON string
    formData.append("types", JSON.stringify(data.types)); // Send types as JSON string


    // Log the FormData entries
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    post("/add-hotel-room", formData, {
      onSuccess: () => {
        setMessage("add-hotel-room added successfully!");
      },
    });

    try {
      // Try sending the POST request
      await post("/api/hotel/add-hotel-room", formData, {
        onSuccess: () => {
          setMessage("hotelroom added successfully!");
        },
      });
    } catch (error) {
      // Catch and log any errors
      console.error("Error while adding hotelroom:", error);
      setMessage("An error occurred while adding the hotelroom.");
    }
  };

  return (
    <div className="m-3 lg:m-5">
      <div className="space-y-3 mb-5 bg-white p-4">
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
        <h2 className="text-2xl font-semibold text-gray-800">Luxury Room</h2>
        {/* images */}
        <div className="grid grid-cols-4 gap-4">
          {/* Image 1 (Main Image) */}
          <div className="col-span-2 row-span-2 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md">
            <label htmlFor="mainImage" className="flex flex-col items-center cursor-pointer">
              {imagePreviews.mainImage ? (
                <img
                  src={imagePreviews.mainImage}
                  alt="Main Image Preview"
                  className=" object-cover rounded-md"
                />
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16V8a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 10.7a4.5 4.5 0 01-8 0M12 12v2" />
                  </svg>
                  <span className="text-gray-600 text-sm">Click to upload main image</span>
                </>
              )}
            </label>
            <input
              id="mainImage"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleImageChange(e, 'mainImage')}
            />
          </div>

          {/* Image 2 */}
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md">
            <label htmlFor={"image2"} className="flex flex-col items-center cursor-pointer">
              {imagePreviews.image2 ? (
                <img
                  src={imagePreviews.image2}
                  alt="Image 2 Preview"
                  className="object-cover rounded-md"
                />
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16V8a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 10.7a4.5 4.5 0 01-8 0M12 12v2" />
                  </svg>
                  <span className="text-gray-600 text-sm">Click to upload image</span>
                </>
              )}
            </label>
            <input
              id={"image2"}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleImageChange(e, 'image2')}
            />
          </div>

          {/* Map Image */}
          <div className="relative">
            <img
              src="/storage/images/map.png"
              alt="Map"
              className="w-full h-auto rounded-md shadow"
            />
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#e0bafb] rounded-lg text-white px-2 py-2">
              Show on map
            </button>
          </div>

          {/* Image 3 */}
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md">
            <label htmlFor={"image3"} className="flex flex-col items-center cursor-pointer">
              {imagePreviews.image3 ? (
                <img
                  src={imagePreviews.image3}
                  alt="Image 3 Preview"
                  className="object-cover rounded-md"
                />
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16V8a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 10.7a4.5 4.5 0 01-8 0M12 12v2" />
                  </svg>
                  <span className="text-gray-600 text-sm">Click to upload image</span>
                </>
              )}
            </label>
            <input
              id={"image3"}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleImageChange(e, 'image3')}
            />
          </div>
          {/* Details */}
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
                <span>Location</span>
                <input
                  type="text"
                  name="location"
                  value={data.location}
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
          {/* Image 4 */}
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md">
            <label htmlFor={"image4"} className="flex flex-col items-center cursor-pointer">
              {imagePreviews.image4 ? (
                <img
                  src={imagePreviews.image4}
                  alt="Image 4 Preview"
                  className="object-cover rounded-md"
                />
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16V8a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 10.7a4.5 4.5 0 01-8 0M12 12v2" />
                  </svg>
                  <span className="text-gray-600 text-sm">Click to upload image</span>
                </>
              )}
            </label>
            <input
              id={"image4"}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleImageChange(e, 'image4')}
            />
          </div>

          {/* Image 5 */}
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md">
            <label htmlFor={"image5"} className="flex flex-col items-center cursor-pointer">
              {imagePreviews.image5 ? (
                <img
                  src={imagePreviews.image5}
                  alt="Image 5 Preview"
                  className="object-cover rounded-md"
                />
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16V8a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 10.7a4.5 4.5 0 01-8 0M12 12v2" />
                  </svg>
                  <span className="text-gray-600 text-sm">Click to upload image</span>
                </>
              )}
            </label>
            <input
              id={"image5"}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleImageChange(e, 'image5')}
            />
          </div>

          {/* Image 6 */}
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md">
            <label htmlFor={"image6"} className="flex flex-col items-center cursor-pointer">
              {imagePreviews.image6 ? (
                <img
                  src={imagePreviews.image6}
                  alt="Image 6 Preview"
                  className="object-cover rounded-md"
                />
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16V8a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 10.7a4.5 4.5 0 01-8 0M12 12v2" />
                  </svg>
                  <span className="text-gray-600 text-sm">Click to upload image</span>
                </>
              )}
            </label>
            <input
              id={"image6"}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleImageChange(e, 'image6')}
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
        {/* add type btn*/}
        <div className="flex justify-between pt-3">
          <h1 className="text-2xl font-semibold text-gray-800">
            Types
          </h1>
          <button
            className="flex items-center gap-1 bg-[#bb8dd9] px-1 text-white rounded-lg"
            onClick={() => setTypeModalOpen(true)}
          >
            <FaPlus />
            Add Type
          </button>
        </div>
        {/* add type div */}
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {data.types.map((type, index) => (
            <p key={index} className="flex items-center gap-2 p-4">
              <span className="text-[#e4baff]">
                {TypeIconMapping[type.icon] || <FaCheck />}
              </span>
              {type.name}
            </p>
          ))}
        </div>
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
      </div>
      <div className="bg-white mt-6 p-4">
        <div className="flex justify-between items-center mb-4 pt-5">
          <h2 className="text-2xl lg:text-4xl text-[#808080]">
            Available Rooms
          </h2>
          <button className="flex items-center gap-1 bg-[#bb8dd9] text-white px-2 py-2 rounded-lg">
            <FaPlus />
            Add More Rooms
          </button>
        </div>
        <div className="bg-white rounded-lg overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                {[
                  "ID",
                  "Room Type",
                  "Number of Rooms",
                  "Available Rooms",
                  "Price",
                  "Action",
                ].map((header, index) => (
                  <th
                    key={index}
                    className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {roomData.map((room, index) => (
                <tr key={index}>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {room.id}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {room.roomType}
                  </td>
                  <td className="px-16 py-4 whitespace-nowrap text-sm text-gray-500">
                    {room.numberOfRooms}
                  </td>
                  <td className="px-16 py-4 whitespace-nowrap text-sm text-gray-500">
                    {room.availableRooms}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {room.price}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm flex space-x-2">
                    <button className="text-green-500 hover:text-green-700">
                      <FaEdit />
                    </button>
                    <button className="text-blue-500 hover:text-blue-700">
                      <FaEye />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
        {/* Modal for adding types type */}
        <Modal
          isOpen={typeModalOpen}
          onRequestClose={() => setTypeModalOpen(false)}
          contentLabel="Add types Type"
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

export default AddHotelRoom;
