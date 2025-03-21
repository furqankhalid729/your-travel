import { FaArrowLeft, FaTv, FaWifi } from "react-icons/fa6";
import { TbFridge } from "react-icons/tb";
import { BsFillCupHotFill } from "react-icons/bs";
import { LiaStarOfLifeSolid } from "react-icons/lia";
import { Link } from "@inertiajs/react";

const HotelBookingProfile = ({booking, hotelItem}) => {
  console.log(booking)
  console.log(hotelItem)
  return (
    <div className="bg-white">
      <Link
        href="/dashboard/hotel-booking"
        // onClick={() => navigate(-1)}
        className="flex items-center p-3 text-gray-600 hover:text-gray-800"
      >
        <FaArrowLeft className="mr-2" />
        <span>Back</span>
      </Link>
      <div className="flex flex-col lg:flex-row rounded-lg shadow-lg p-6">
        <div className="lg:w-1/3 flex flex-col items-center  p-4 border-r">
          <img
            src="/storage/images/user.png"
            alt="User"
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800">
            {booking.first_name} {booking.last_name}
          </h2>
          <p className="text-gray-600">A101</p>
          <p className="text-white rounded-full px-1 bg-[#8288fc]">Male</p>
        </div>
        <div className="lg:w-2/3 p-6">
          <h3 className="text-xl border-b pb-2 font-semibold text-gray-800 mb-4">
            Personal Information
          </h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h1 className="block text-sm font-medium">Name</h1>
              <p className="text-gray-500 mt-2">{booking.first_name} {booking.last_name}</p>
            </div>
            <div>
              <h1 className="block text-sm font-medium">Identity Number</h1>
              <p className="text-gray-500 mt-2">{booking.identification_number}</p>
            </div>
            <div>
              <h1 className="block text-sm font-medium">Email</h1>
              <p className="text-gray-500 mt-2">{booking.email}</p>
            </div>
            <div>
              <h1 className="block text-sm font-medium">Contact No</h1>
              <p className="text-gray-500 mt-2">+1 234 567 890</p>
            </div>
          </div>
          <h3 className="text-xl border-b pb-2 font-semibold text-gray-800 mb-4">
            Order Details
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h1 className="block text-sm font-medium">Check-In</h1>
              <p className="text-gray-500 mt-2">12 Dept 2024</p>
            </div>
            <div>
              <h1 className="block text-sm font-medium">Check-Out</h1>
              <p className="text-gray-500 mt-2">12 Dept 2024</p>
            </div>
            <div>
              <h1 className="block text-sm font-medium">No. of Guests</h1>
              <p className="text-gray-500 mt-2">03</p>
            </div>
            <div>
              <h1 className="block text-sm font-medium">Price</h1>
              <p className="text-gray-500 mt-2">$500.00</p>
            </div>
            <div>
              <h1 className="block text-sm font-medium">Room Type</h1>
              <p className="text-gray-500 mt-2">Deluxe</p>
            </div>
            <div>
              <h1 className="block text-sm font-medium">Facilities</h1>
              <div className="flex space-x-3 mt-2">
                <p className="bg-[#e0b0ff] text-white p-1">
                  <LiaStarOfLifeSolid />
                </p>
                <p className="bg-[#e0b0ff] text-white p-1">
                  <FaWifi />
                </p>
                <p className="bg-[#e0b0ff] text-white p-1">
                  <FaTv />
                </p>
                <p className="bg-[#e0b0ff] text-white p-1">
                  <TbFridge />
                </p>
                <p className="bg-[#e0b0ff] text-white p-1">
                  <BsFillCupHotFill />
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button className="px-5 py-2 bg-[#2e2532] text-white font-semibold rounded-md">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelBookingProfile;
