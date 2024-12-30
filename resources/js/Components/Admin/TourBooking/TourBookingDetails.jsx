import { FaLongArrowAltRight } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa6";
import { Link } from "@inertiajs/react";

const TourBookingDetails = () => {
  return (
    <div>
      <div className="bg-white shadow-lg border-t rounded-lg mb-6">
        <h1 className="font-semibold mx-3 mt-2">Trip Information</h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 p-4">
          <p className="text-sm text-gray-600">
            <strong>Duration:</strong>
            <p className="mt-2">
              <span className="border p-1 rounded-lg text-gray-500">
                4 Days, 3 Nights
              </span>
            </p>
          </p>
          <p className="text-sm text-gray-600">
            <strong>Person:</strong>
            <p className="mt-2">
              <span className="border p-1 rounded-lg text-gray-500">
                4 Adults, 3 Children
              </span>
            </p>
          </p>
          <p className="text-sm text-gray-600">
            <strong>Slot:</strong>
            <p className="mt-2">
              <span className="border p-1 rounded-lg text-gray-500">
                Sep 30 to Oct 2
              </span>
            </p>
          </p>
          <p className="text-sm text-gray-600">
            <strong>Price:</strong>
            <p className="mt-2">
              <span className="border p-1 rounded-lg text-gray-500">
                $300.00
              </span>
            </p>
          </p>
        </div>
      </div>
      <form className="space-y-5 rounded-md border px-4">
        <h1 className="font-semibold mx-3 mt-2">Details</h1>
        <div>
          <label className="block text-sm text-gray-700 mb-2">Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"
          />
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-4">
          <div className="flex-1">
            <label className="block text-sm text-gray-700 mb-2">
              Keywords *
            </label>
            <textarea className="w-full h-44 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"></textarea>
          </div>
          <div className="flex-1">
            <label className="block text-sm text-gray-700 mb-2">
              Facilities
            </label>
            <textarea className="w-full h-44 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"></textarea>
          </div>
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-2">
            Description
          </label>
          <textarea className="w-full h-44 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"></textarea>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm font-semibold">Images</p>
          <button
            type="button"
            className="px-1 flex items-center gap-1 bg-[#2e2532] text-white rounded-lg focus:outline-none"
          >
            <FaPlus />
            Add
          </button>
        </div>
        <div className="flex items-center w-full space-x-4">
          <FaArrowLeft className="text-gray-500 cursor-pointer hover:text-black" />
          <div className="flex space-x-4">
            <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-sm text-gray-500">
              <span>No Image</span>
            </div>
            <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-sm text-gray-500">
              <span>No Image</span>
            </div>
            <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-sm text-gray-500">
              <span>No Image</span>
            </div>
          </div>
          <div className="flex-grow flex justify-end">
            <FaArrowRight className="text-gray-500 cursor-pointer hover:text-black" />
          </div>
        </div>
        <div className="flex justify-end">
          <Link
            to="/dashboard/tour-booking/steps/planner"
            type="button"
            className="flex items-center gap-1 px-3 py-1 bg-black text-white rounded-lg focus:outline-none"
          >
            Next <FaLongArrowAltRight />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default TourBookingDetails;
