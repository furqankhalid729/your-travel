import { FaCalendarAlt, FaSave } from "react-icons/fa";
import { MdOutlineArrowBackIos } from "react-icons/md";
// import mapImg from "../../assets/map.png";
// import car from "../../assets/car.png";
// import user from "../../assets/user.png";
import {
  FaBuilding,
  FaCarSide,
  FaEnvelope,
  FaLanguage,
  FaPhone,
  FaRegIdCard,
  FaRegMap,
  FaSnowflake,
  FaUser,
} from "react-icons/fa6";
import { Link } from "@inertiajs/react";
// import { useNavigate } from "react-router-dom"; 

const BookRideAssignDrivers = () => {
  // const navigate = useNavigate();
  return (
    <div className="mb-8">
      <div className="bg-white flex justify-between items-center mb-6 p-3">
        <Link
          href="/dashboard/car-booking"
          // onClick={() => navigate(-1)}
          className="text-gray-500 hover:text-gray-700"
        >
          <MdOutlineArrowBackIos size={20} />
        </Link>
        <button className="text-white px-2 py-1 rounded-md bg-[#e0b0ff] flex items-center">
          <FaSave size={20} /> Save
        </button>
      </div>
      <div className="mx-4 lg:mx-12 my-4 flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/2">
          <div className="bg-white p-5 mb-5 space-y-5">
            <input
              type="text"
              className="mt-1 p-3 w-full border border-gray-300 rounded-md"
              placeholder="Los Angles Airport"
            />
            <input
              type="text"
              className="mt-1 p-3 w-full border border-gray-300 rounded-md"
              placeholder="Adlan"
            />
            <input
              type="text"
              className="mt-1 p-3 w-full border border-gray-300 rounded-md"
              placeholder="$ 299.00 "
            />
            <button className="px-3 py-2 bg-[#e1baf9] w-full text-left text-white">
              Travel time - 2 hours, 200km
            </button>
          </div>
          <div className="flex flex-col items-center p-4 bg-white">
            <img
              src="/storage/images/user.png"
              alt="User"
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">
              Muhammad Aadlan
            </h2>
            <div className="grid grid-cols-2 gap-2 text-sm mt-2 text-gray-400">
              <div className="flex items-center gap-2">
                <FaRegIdCard className="text-gray-500" />
                <p>3520294317803</p>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-gray-500" />
                <p>+13 337 95 65 335</p>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-gray-500" />
                <p>M.aadlan9@gmail.com</p>
              </div>
              <div className="flex items-center gap-2">
                <FaUser className="text-gray-500" />
                <p>25 years old</p>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-gray-500" />
                <p>02 Years</p>
              </div>
              <div className="flex items-center gap-2">
                <FaBuilding className="text-gray-500" />
                <p>PK20219515401</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="bg-white">
            <div className="relative">
              <img
                src="/storage/images/map.png"
                alt="Map"
                className="w-full h-[80%] rounded-md mb-3 shadow"
              />
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 bg-[#e0bafb] rounded-lg text-white px-4 py-2">
                <FaRegMap /> Show on map
              </button>
            </div>
            <img src="/storage/images/car.png" className="my-2 mx-auto bg-white" alt="car" />
            <div className="flex justify-between items-center px-5">
              <h1 className="text-xl font-semibold">Audi E-tron GT XR</h1>
              <p className="text-sm text-gray-500">UK23AJ403</p>
            </div>
            <p className="mt-1 px-5 font-semibold">Economy</p>
            <div className="mt-4 grid grid-cols-3 gap-2 px-5">
              <div className="flex items-center gap-1">
                <FaSnowflake className="text-[#bb8dd9]" />
                <span className="text-gray-500">AC</span>
              </div>
              <div className="flex items-center gap-1">
                <FaCarSide className="text-[#bb8dd9]" />
                <span className="text-gray-500">Auto</span>
              </div>
              <div className="flex items-center gap-1">
                <FaCarSide className="text-[#bb8dd9]" />
                <span className="text-gray-500">4 Doors</span>
              </div>
            </div>
            <div className="flex px-5 gap-5 mt-3 pb-3">
              <div className="flex items-center gap-1">
                <FaLanguage className="text-[#bb8dd9]" />
                <p className="text-gray-500">2 Laguage</p>
              </div>
              <div className="flex items-center gap-2">
                <FaUser className="text-[#bb8dd9]" />
                <p className="text-gray-500">4 Persons</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-4 lg:mx-10 my-7 p-4 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:space-x-12">
          <div className="text-center border rounded-lg p-3">
            <img
              src="/storage/images/user.png"
              alt="User"
              className="w-16 h-16 mx-auto rounded-full object-cover mb-4"
            />
            <h2 className="font-semibold text-gray-800">Muhammad Aadlan</h2>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <FaRegIdCard className="text-gray-500" />
              <p>3520294317803</p>
            </div>
            <div className="flex my-1 items-center justify-center gap-2 text-sm text-gray-500">
              <FaPhone className="text-gray-500" />
              <p>+13 337 95 65 335</p>
            </div>
            <button className="bg-[#e1baf9] rounded-xl text-white px-3">
              Select
            </button>
          </div>
          <div className="text-center border rounded-lg p-3">
            <img
              src="/storage/images/user.png"
              alt="User"
              className="w-16 h-16 mx-auto rounded-full object-cover mb-4"
            />
            <h2 className="font-semibold text-gray-800">Muhammad Aadlan</h2>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <FaRegIdCard className="text-gray-500" />
              <p>3520294317803</p>
            </div>
            <div className="flex my-1 items-center justify-center gap-2 text-sm text-gray-500">
              <FaPhone className="text-gray-500" />
              <p>+13 337 95 65 335</p>
            </div>
            <button className="bg-[#808080] rounded-xl text-white px-3">
              Select
            </button>
          </div>
          <div className="text-center border rounded-lg p-3">
            <img
              src="/storage/images/user.png"
              alt="User"
              className="w-16 h-16 mx-auto rounded-full object-cover mb-4"
            />
            <h2 className="font-semibold text-gray-800">Muhammad Aadlan</h2>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <FaRegIdCard className="text-gray-500" />
              <p>3520294317803</p>
            </div>
            <div className="flex my-1 items-center justify-center gap-2 text-sm text-gray-500">
              <FaPhone className="text-gray-500" />
              <p>+13 337 95 65 335</p>
            </div>
            <button className="bg-[#808080] rounded-xl text-white px-3">
              Select
            </button>
          </div>
          <div className="text-center border rounded-lg p-3">
            <img
              src="/storage/images/user.png"
              alt="User"
              className="w-16 h-16 mx-auto rounded-full object-cover mb-4"
            />
            <h2 className="font-semibold text-gray-800">Muhammad Aadlan</h2>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <FaRegIdCard className="text-gray-500" />
              <p>3520294317803</p>
            </div>
            <div className="flex my-1 items-center justify-center gap-2 text-sm text-gray-500">
              <FaPhone className="text-gray-500" />
              <p>+13 337 95 65 335</p>
            </div>
            <button className="bg-[#808080] rounded-xl text-white px-3">
              Select
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-end mx-10">
        <button className="bg-[#e1baf9] px-3 py-1 text-white rounded-full">
          Booked
        </button>
      </div>
    </div>
  );
};

export default BookRideAssignDrivers;
