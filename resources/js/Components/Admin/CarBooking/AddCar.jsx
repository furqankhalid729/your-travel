import { FaSave } from "react-icons/fa";
import { FaArrowLeft, FaPlus } from "react-icons/fa6";
import { FaSnowflake, FaCarSide, FaLanguage, FaUser } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
import { Link } from "@inertiajs/react";


const AddCar = () => {
  // const navigate = useNavigate();
  return (
    <div className="m-6">
      <div className="flex justify-between items-center bg-white p-2 rounded-lg shadow">
        <Link
          href="/dashboard/car-booking"
          // onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-800"
        >
          <FaArrowLeft className="mr-2" />
          <span>Back</span>
        </Link>
        <button className="flex items-center bg-[#e4baff] text-white px-4 py-2 rounded-md hover:bg-[#d19aed]">
          <FaSave className="mr-2" />
          Save
        </button>
      </div>
      <div className="flex mt-6 gap-6">
        <div className="w-2/5 p-4 rounded-lg shadow">
          <div className="flex bg-[#eaeaea] flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-6 mb-2">
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
          <h1 className="text-center">
            <span className="text-2xl border py-2 px-4 bg-[#2e2532] font-bold text-white mb-2">
              Audi E-tron GT XR
            </span>
          </h1>
          <div className="w-[70%] mx-auto bg-white p-3 mt-2">
            <div className="flex justify-between items-center">
              <p className="text-gray-600 text-lg mb-4">Economy</p>
              <button className="flex items-center gap-1 bg-[#bb8dd9] px-1 text-white rounded-lg">
                <FaPlus />
                Add Features
              </button>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-600">
                <FaSnowflake className="text-[#bb8dd9]" />
                <span>AC</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FaCarSide className="text-[#bb8dd9]" />
                <span>Auto</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FaCarSide className="text-[#bb8dd9]" />
                <span>4 Doors</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FaLanguage className="text-[#bb8dd9]" />
                <span>2 Languages</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FaUser className="text-[#bb8dd9]" />
                <span>4 Persons</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/5 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Audi E-tron GT XR Details
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <p className="text-sm text-gray-600">
              <strong>Brand</strong>
              <p className="mt-2">
                <span className="border p-1 rounded-lg text-gray-500">
                  Audi
                </span>
              </p>
            </p>
            <p className="text-sm text-gray-600">
              <strong>Model</strong>
              <p className="mt-2">
                <span className="border p-1 rounded-lg text-gray-500">
                  E-tron GT XR
                </span>
              </p>
            </p>
            <p className="text-sm text-gray-600">
              <strong>Fuel</strong>
              <p className="mt-2">
                <span className="border p-1 rounded-lg text-gray-500">
                  Auto
                </span>
              </p>
            </p>
            <p className="text-sm text-gray-600">
              <strong>Car No.</strong>
              <p className="mt-2">
                <span className="border p-1 rounded-lg text-gray-500">
                  UK23AJ403
                </span>
              </p>
            </p>
            <p className="text-sm text-gray-600">
              <strong>Transmission</strong>
              <p className="mt-2">
                <span className="border p-1 rounded-lg text-gray-500">
                  Electric
                </span>
              </p>
            </p>
            <p className="text-sm text-gray-600">
              <strong>Capacity</strong>
              <p className="mt-2">
                <span className="border p-1 rounded-lg text-gray-500">
                  4 Persons
                </span>
              </p>
            </p>
            <p className="text-sm text-gray-600">
              <strong>Status</strong>
              <p className="mt-2">
                <span className="border p-1 rounded-lg text-gray-500">
                  Available
                </span>
              </p>
            </p>
            <p className="text-sm text-gray-600">
              <strong>Price(per day)</strong>
              <p className="mt-2">
                <span className="border p-1 rounded-lg text-gray-500">
                  $200
                </span>
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCar;
