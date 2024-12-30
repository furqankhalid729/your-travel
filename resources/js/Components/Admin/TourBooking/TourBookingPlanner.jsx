import { FaArrowLeft, FaCheck } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "@inertiajs/react";

const TourBookingPlanner = () => {
  return (
    <div>
      <div className="bg-white shadow-lg border-t rounded-lg mb-5">
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
      <div className="bg-white rounded-lg lg:p-4">
        <h1 className="font-semibold text-lg mx-3">Add Route Details</h1>
        <div className="grid lg:grid-cols-2 gap-4 p-4">
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700 font-semibold mb-2">
                Transport Time *
              </label>
              <select
                id="booking"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"
              >
                <option value="Bus" disabled selected>
                  Bus
                </option>
                <option value="Bike">Bike</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-700 font-semibold mb-2">
                Transport Provider *
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="block text-sm text-gray-700 font-semibold mb-2">
                Start Location *
              </label>
              <input
                type="text"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"
                placeholder="Type Here"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="block text-sm text-gray-700 font-semibold mb-2">
                End Location *
              </label>
              <input
                type="text"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"
                placeholder="Type Here"
              />
            </div>
            <div className="flex items-center gap-2">
              <h1 className="font-semibold">Trip Information</h1>
              <input type="checkbox" id="calculate" className="mr-2" />
              <label htmlFor="calculate" className="text-sm text-gray-700">
                Calculate Automatically{" "}
                <FaCheck className="inline text-green-500" />
              </label>
            </div>
          </div>
          <div className="flex items-center justify-center bg-gray-100 rounded-lg">
            <img
              src="https://via.placeholder.com/300x200?text=Map"
              alt="Map"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:w-[70%] gap-4 mt-4">
          <div>
            <label className="block text-sm text-gray-700 mb-2">
              Start Date/Time *
            </label>
            <input
              type="datetime-local"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-2">
              End Date/Time *
            </label>
            <input
              type="datetime-local"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-2">
              Duration *
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-2">
              Estimated Time *
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4 lg:mt-0">
        <Link
          to="/dashboard/tour-booking/steps"
          type="button"
          className="flex items-center gap-1 px-3 py-1 bg-[#2e2532] text-white rounded-lg focus:outline-none"
        >
          <FaArrowLeft />
          Previous
        </Link>
        <Link
          to="/dashboard/tour-booking/steps/timeline"
          type="button"
          className="flex items-center gap-1 px-3 py-1 bg-[#2e2532] text-white rounded-lg focus:outline-none"
        >
          Next
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default TourBookingPlanner;
