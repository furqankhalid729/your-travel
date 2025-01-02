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
// import mapImg from "../../assets/map.png";
import { BiLocationPlus } from "react-icons/bi";
import { Link } from "@inertiajs/react";
// import { useNavigate } from "react-router-dom";

const AddTour = () => {
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
          <button className="flex items-center bg-[#e4baff] text-white px-3 py-1 rounded-md">
            <FaSave className="mr-1" />
            Save
          </button>
        </div>
      </div>
      <h1 className="text-2xl font-semibold text-gray-800">
        Lake Lucerne : Bodies of water
      </h1>
      <span className="flex items-center text-sm text-[#808080]">
        <BiLocationPlus />
        Zurich
      </span>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-2 row-span-2 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-4">
          <label
            htmlFor="mainImage"
            className="flex flex-col items-center cursor-pointer"
          >
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 10.7a4.5 4.5 0 01-8 0M12 12v2"
              />
            </svg>
            <span className="text-gray-600 text-sm">
              Click to upload main image
            </span>
          </label>
          <input
            id="mainImage"
            type="file"
            accept="image/*"
            className="hidden"
          />
        </div>
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-4">
          <label
            htmlFor={"image2"}
            className="flex flex-col items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-400 mb-2"
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
            <span className="text-gray-600 text-sm">Click to upload image</span>
          </label>
          <input
            id={"image2"}
            type="file"
            accept="image/*"
            className="hidden"
          />
        </div>
        <div className="relative">
          <img
            src="/storage/images/map.png"
            alt="Map"
            className="w-full h-auto rounded-md shadow"
          />
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center bg-[#e0bafb] rounded-lg text-white px-2 py-2">
            Show on map
          </button>
        </div>
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-4">
          <label
            htmlFor={"image3"}
            className="flex flex-col items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-400 mb-2"
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
            <span className="text-gray-600 text-sm">Click to upload image</span>
          </label>
          <input
            id={"image3"}
            type="file"
            accept="image/*"
            className="hidden"
          />
        </div>
        <div className="bg-[#e6c0ff] p-4 rounded-md shadow row-span-2">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Details</h3>
          <ul className="space-y-5 font-semibold">
            <li className="flex justify-between">
              <span>Duration</span> 4 Days
            </li>
            <li className="flex justify-between">
              <span>Location</span> Lahore
            </li>
            <li className="flex justify-between">
              <span>Food</span> 2 time a day
            </li>
            <li className="flex justify-between">
              <span>Food Types</span> Family Tour
            </li>
            <li className="flex justify-between">
              <span>Person</span> 3 Person
            </li>
            <li className="flex justify-between">
              <span>Price(per head)</span> $200
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-4">
          <label
            htmlFor={"image4"}
            className="flex flex-col items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-400 mb-2"
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
            <span className="text-gray-600 text-sm">Click to upload image</span>
          </label>
          <input
            id={"image4"}
            type="file"
            accept="image/*"
            className="hidden"
          />
        </div>
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-4">
          <label
            htmlFor={"image5"}
            className="flex flex-col items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-400 mb-2"
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
            <span className="text-gray-600 text-sm">Click to upload image</span>
          </label>
          <input
            id={"image5"}
            type="file"
            accept="image/*"
            className="hidden"
          />
        </div>
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-4">
          <label
            htmlFor={"image6"}
            className="flex flex-col items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-400 mb-2"
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
            <span className="text-gray-600 text-sm">Click to upload image</span>
          </label>
          <input
            id={"image6"}
            type="file"
            accept="image/*"
            className="hidden"
          />
        </div>
      </div>
      <h1 className="text-2xl font-semibold text-gray-800">Summary</h1>
      <textarea
        id="comment"
        placeholder="Add Summary"
        rows="3"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"
      ></textarea>
      <div className="flex justify-between pt-3">
        <h1 className="text-2xl font-semibold text-gray-800">Facilities</h1>
        <button className="flex items-center gap-1 bg-[#bb8dd9] text-white px-2 py-2 rounded-lg">
          <FaPlus />
          Add Facilities
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <p className="flex items-center gap-2 p-4">
          <span className="text-[#e4baff]">
            <FaWifi />
          </span>{" "}
          Free Wifi
        </p>
        <p className="flex items-center gap-2 p-4">
          <span className="text-[#e4baff]">
            <FaUtensils />
          </span>{" "}
          Restaurant
        </p>
        <p className="flex items-center gap-2 p-4">
          <span className="text-[#e4baff]">
            <FaParking />
          </span>{" "}
          Parking
        </p>
        <p className="flex items-center gap-2 p-4">
          <span className="text-[#e4baff]">
            <FaSwimmingPool />
          </span>{" "}
          Swimming Pool
        </p>
        <p className="flex items-center gap-2 p-4">
          <span className="text-[#e4baff]">
            <FaSpa />
          </span>{" "}
          Spa
        </p>
        <p className="flex items-center gap-2 p-4">
          <span className="text-[#e4baff]">
            <FaParking />
          </span>{" "}
          Parking
        </p>
        <p className="flex items-center gap-2 p-4">
          <span className="text-[#e4baff]">
            <FaSwimmingPool />
          </span>{" "}
          Swimming Pool
        </p>
        <p className="flex items-center gap-2 p-4">
          <span className="text-[#e4baff]">
            <FaSpa />
          </span>{" "}
          Spa
        </p>
      </div>
      <div className="flex justify-between pt-3">
        <h1 className="text-2xl font-semibold text-gray-800">
          Included/Excluded
        </h1>
        <button className="flex items-center gap-1 bg-[#bb8dd9] text-white px-2 py-2 rounded-lg">
          <FaPlus />
          Add Types
        </button>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <p className="flex items-center gap-2 p-1">
          <span className="text-[#e4baff]">
            <FaCheck />
          </span>{" "}
          Specialized bilingual guide
        </p>
        <p className="flex items-center gap-2 p-1">
          <span className="text-[#e4baff]">
            <FaTimes />
          </span>{" "}
          Additional Services
        </p>
        <p className="flex items-center gap-2 p-1">
          <span className="text-[#e4baff]">
            <FaCheck />
          </span>{" "}
          Entrance fees (Cable and car and Moon Valley)
        </p>
        <p className="flex items-center gap-2 p-1">
          <span className="text-[#e4baff]">
            <FaTimes />
          </span>{" "}
          Drink
        </p>
        <p className="flex items-center gap-2 p-1">
          <span className="text-[#e4baff]">
            <FaCheck />
          </span>{" "}
          Private Transport
        </p>
        <p className="flex items-center gap-2 p-1">
          <span className="text-[#e4baff]">
            <FaTimes />
          </span>{" "}
          Insurance
        </p>
        <p className="flex items-center gap-2 p-1">
          <span className="text-[#e4baff]">
            <FaCheck />
          </span>{" "}
          Box lunch water, banana apple and chocolate
        </p>
        <p className="flex items-center gap-2 p-1">
          <span className="text-[#e4baff]">
            <FaTimes />
          </span>{" "}
          Tickets
        </p>
      </div>
      <div>
        <h1 className="text-2xl font-semibold text-gray-800 my-3">Condition</h1>
        <textarea
          id="comment"
          placeholder="Add Condition"
          rows="3"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"
        ></textarea>
      </div>
      <div className="space-y-8">
        <h1 className="text-2xl font-semibold text-gray-800 my-5">
          Tour Itinerary
        </h1>
        {[...Array(6)].map((_, index) => (
          <div key={index} className="flex items-start space-x-6">
            <div className="w-4/5">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Day : {index + 1}
              </label>
              <textarea
                className="w-full p-4 h-32 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9] resize-none"
                placeholder="Add Day"
              ></textarea>
            </div>
            <div className="w-1/5 bg-[#f4f4f4] p-4 rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
              <label
                htmlFor="mainImage"
                className="flex flex-col items-center cursor-pointer text-center"
              >
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
                <span className="text-gray-600 text-sm">
                  Click to upload main image
                </span>
              </label>
              <input
                id="mainImage"
                type="file"
                accept="image/*"
                className="hidden"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddTour;
