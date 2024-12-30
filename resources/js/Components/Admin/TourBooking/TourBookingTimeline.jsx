import { FaHome } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa6";
import { Link } from "@inertiajs/react";

const TourBookingTimeline = () => {
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
      <h1 className="font-semibold mx-3">Timeline</h1>
      <div className="grid lg:grid-cols-10 gap-4">
        <div className="col-span-7 space-y-5">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 text-center flex items-center justify-center text-gray-600 font-semibold rounded-full">
              Day 01
            </div>
            <div className="flex-1 border p-5 shadow-lg rounded-lg">
              <div className="grid grid-cols-2">
                <p className="text-sm text-gray-600">
                  <strong>Location:</strong>
                  <p className="mt-2">
                    <span className="border p-1 rounded-lg text-gray-500">
                      Starting Point
                    </span>
                  </p>
                </p>
                <p className="text-sm text-gray-600 mt-3">
                  <strong>Hotel:</strong>
                  <p className="mt-2">
                    <span className="border p-1 rounded-lg text-gray-500">
                      Grand Palace
                    </span>
                  </p>
                </p>
                <p className="text-sm text-gray-600 mt-3">
                  <strong>Arrival Time:</strong>
                  <p className="mt-2">
                    <span className="border p-1 rounded-lg text-gray-500">
                      10:00 AM
                    </span>
                  </p>
                </p>
                <p className="text-sm text-gray-600 mt-3">
                  <strong>Departure Time:</strong>
                  <p className="mt-2">
                    <span className="border p-1 rounded-lg text-gray-500">
                      4:00 PM
                    </span>
                  </p>
                </p>
              </div>
              <p className="text-sm text-gray-600 mt-3">
                <strong>Description:</strong>
                <textarea
                  className="w-full h-20 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"
                  placeholder="Add a description for this day..."
                ></textarea>
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 text-center flex items-center justify-center text-gray-600 font-semibold">
              Day 02
            </div>
            <div className="flex-1 border p-5 shadow-lg rounded-lg">
              <div className="grid grid-cols-2">
                <p className="text-sm text-gray-600">
                  <strong>Location:</strong>
                  <p className="mt-2">
                    <span className="border p-1 rounded-lg text-gray-500">
                      Starting Point
                    </span>
                  </p>
                </p>
                <p className="text-sm text-gray-600 mt-3">
                  <strong>Hotel:</strong>
                  <p className="mt-2">
                    <span className="border p-1 rounded-lg text-gray-500">
                      Grand Palace
                    </span>
                  </p>
                </p>
                <p className="text-sm text-gray-600 mt-3">
                  <strong>Arrival Time:</strong>
                  <p className="mt-2">
                    <span className="border p-1 rounded-lg text-gray-500">
                      10:00 AM
                    </span>
                  </p>
                </p>
                <p className="text-sm text-gray-600 mt-3">
                  <strong>Departure Time:</strong>
                  <p className="mt-2">
                    <span className="border p-1 rounded-lg text-gray-500">
                      4:00 PM
                    </span>
                  </p>
                </p>
              </div>
              <p className="text-sm text-gray-600 mt-3">
                <strong>Description:</strong>
                <textarea
                  className="w-full h-20 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"
                  placeholder="Add a description for this day..."
                ></textarea>
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 text-center flex items-center justify-center text-gray-600 font-semibold rounded-full">
              Day 03
            </div>
            <div className="flex-1 border p-5 shadow-lg rounded-lg">
              <div className="grid grid-cols-2">
                <p className="text-sm text-gray-600">
                  <strong>Location:</strong>
                  <p className="mt-2">
                    <span className="border p-1 rounded-lg text-gray-500">
                      Starting Point
                    </span>
                  </p>
                </p>
                <p className="text-sm text-gray-600 mt-3">
                  <strong>Hotel:</strong>
                  <p className="mt-2">
                    <span className="border p-1 rounded-lg text-gray-500">
                      Grand Palace
                    </span>
                  </p>
                </p>
                <p className="text-sm text-gray-600 mt-3">
                  <strong>Arrival Time:</strong>
                  <p className="mt-2">
                    <span className="border p-1 rounded-lg text-gray-500">
                      10:00 AM
                    </span>
                  </p>
                </p>
                <p className="text-sm text-gray-600 mt-3">
                  <strong>Departure Time:</strong>
                  <p className="mt-2">
                    <span className="border p-1 rounded-lg text-gray-500">
                      4:00 PM
                    </span>
                  </p>
                </p>
              </div>
              <p className="text-sm text-gray-600 mt-3">
                <strong>Description:</strong>
                <textarea
                  className="w-full h-20 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"
                  placeholder="Add a description for this day..."
                ></textarea>
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 text-center flex items-center justify-center text-gray-600 font-semibold rounded-full">
              Day 04
            </div>
            <div className="flex-1 border p-5 shadow-lg rounded-lg">
              <div className="grid grid-cols-2">
                <p className="text-sm text-gray-600">
                  <strong>Location:</strong>
                  <p className="mt-2">
                    <span className="border p-1 rounded-lg text-gray-500">
                      Starting Point
                    </span>
                  </p>
                </p>
                <p className="text-sm text-gray-600 mt-3">
                  <strong>Hotel:</strong>
                  <p className="mt-2">
                    <span className="border p-1 rounded-lg text-gray-500">
                      Grand Palace
                    </span>
                  </p>
                </p>
                <p className="text-sm text-gray-600 mt-3">
                  <strong>Arrival Time:</strong>
                  <p className="mt-2">
                    <span className="border p-1 rounded-lg text-gray-500">
                      10:00 AM
                    </span>
                  </p>
                </p>
                <p className="text-sm text-gray-600 mt-3">
                  <strong>Departure Time:</strong>
                  <p className="mt-2">
                    <span className="border p-1 rounded-lg text-gray-500">
                      4:00 PM
                    </span>
                  </p>
                </p>
              </div>
              <p className="text-sm text-gray-600 mt-3">
                <strong>Description:</strong>
                <textarea
                  className="w-full h-20 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"
                  placeholder="Add a description for this day..."
                ></textarea>
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="flex items-center gap-1 px-1 bg-[#2e2532] text-white rounded-lg focus:outline-none"
            >
              <FaPlus />
              Add Days
            </button>
          </div>
        </div>
        <div className="col-span-3 p-4 bg-white rounded-lg text-center">
          <FaHome className="text-gray-600 text-4xl mx-auto mb-2" />
          <p className="text-gray-600 text-sm">
            You don&apos;t have any rent-a-cars or hotels in your trip planner.
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <Link
          href="/dashboard/tour-booking/steps/planner"
          type="button"
          className="flex items-center gap-1 px-3 py-1 bg-[#2e2532] text-white rounded-lg focus:outline-none"
        >
          <FaArrowLeft />
          Previous
        </Link>
        <Link
          href="/dashboard/tour-booking/steps/pricing"
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

export default TourBookingTimeline;
