import {
  FaArrowLeft,
  FaBuilding,
  FaCarSide,
  FaEnvelope,
  FaLanguage,
  FaPen,
  FaPhone,
  FaRegIdCard,
  FaRegMap,
  FaSnowflake,
  FaUser,
} from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";
// import car from "../../assets/car.png";
// import map from "../../assets/map.png";
// import user from "../../assets/user.png";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "@inertiajs/react";

const BookCarAssignDrivers = () => {
  // const navigate = useNavigate();
  return (
    <div className="mx-4 lg:mx-10 my-3 lg:my-5">
      <div className="flex justify-between items-center p-2">
        <Link
          href="/dashboard/car-booking"
          // onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-800"
        >
          <FaArrowLeft className="mr-2" />
          <span className="text-black">#A102</span>
        </Link>
        <div className="flex items-center gap-5">
          <button className="bg-[#d9d9d9] px-2 py-1 rounded-md">Edit</button>
          <button className="bg-[#d9d9d9] px-2 py-1 rounded-md">Refund</button>
          <select
            id="booking"
            className="w-full px-2 py-1 border border-gray-300 bg-[#d9d9d9] rounded-lg focus:outline-none"
          >
            <option value="" disabled selected>
              More Action
            </option>
            <option value="Booking1">Booking 1</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 mt-5">
        <div className="lg:w-[70%] space-y-4">
          <div className="bg-white border p-5 rounded-md">
            <div className="border rounded-md">
              <div className="p-4 border-b">
                <p className="font-semibold">Order</p>
                <p className="text-gray-500">September 26, 2024</p>
              </div>
              <div className="flex flex-col lg:flex-row justify-between px-4 pt-2">
                <div className="flex items-center gap-5">
                  <img src="/storage/images/car.png" className="w-16" alt="" />
                  <p>Audi A6 2022 </p>
                </div>
                <div className="flex flex-col lg:flex-row items-center">
                  <p>From :</p>
                  <p className="text-gray-500 border px-1 rounded-lg ml-2">
                    September 27, 2024
                  </p>
                  <p>To :</p>
                  <p className="text-gray-500 border px-1 rounded-lg ml-2">
                    September 28, 2024
                  </p>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end px-4 pb-2">
                <p>Price: </p>
                <p className="text-gray-500 border px-1 rounded-lg ml-2">
                  $300.00
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-1/2 bg-white border p-4 space-y-4">
              <div className="flex gap-1">
                <div>
                  <input
                    id="travel-time"
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                    placeholder="Los Angles Airport"
                  />
                </div>
                <div>
                  <input
                    id="distance"
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                    placeholder="California Airport"
                  />
                </div>
              </div>
              <div>
                <input
                  id="distance"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                  placeholder="$ 300.00 "
                />
              </div>
              <button className="bg-[#e1baf9] w-full text-white px-4 py-2 rounded-md">
                Travel time - 2 hours, 200km
              </button>
            </div>
            <div className="lg:w-1/2 relative">
              <img
                src="/storage/images/map.png"
                alt="Map"
                className="w-full rounded-md mb-3 shadow"
              />
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 bg-[#e0bafb] rounded-lg text-white px-4 py-2">
                <FaRegMap /> Show on map
              </button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-1/2 flex flex-col items-center p-2 bg-white">
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
                  <p>adlan9@gmail.com</p>
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
            <div className="lg:w-1/2 bg-white">
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
        <div className="lg:w-[30%] space-y-4">
          <div className="border p-4 rounded-md bg-white">
            <div>
              <div className="font-semibold flex items-center justify-between">
                <p>Notes</p>
                <FaPen className="text-gray-500 cursor-pointer" />
              </div>
              <div className="text-sm text-gray-500">
                No notes from customer
              </div>
            </div>
            <div>
              <div className="font-semibold flex items-center justify-between">
                <p>Additional Details</p>
                <FaPen className="text-gray-500 cursor-pointer" />
              </div>
              <div className="text-sm text-gray-500">N/A</div>
            </div>
            <div className="space-y-2">
              <div>
                <div className="text-sm font-medium">Country Code</div>
                <div className="text-sm text-gray-600">PK</div>
              </div>
              <div>
                <div className="text-sm font-medium">First Name</div>
                <div className="text-sm text-gray-600">Muheeb</div>
              </div>
              <div>
                <div className="text-sm font-medium">Last Name</div>
                <div className="text-sm text-gray-600">Rahman</div>
              </div>
              <div>
                <div className="text-sm font-medium">Phone Number</div>
                <div className="text-sm text-gray-600">+923728939</div>
              </div>
              <div>
                <div className="text-sm font-medium">Address</div>
                <div className="text-sm text-gray-600">Lahore</div>
              </div>
              <div>
                <div className="text-sm font-medium">City</div>
                <div className="text-sm text-gray-600">Lahore</div>
              </div>
              <div>
                <div className="text-sm font-medium">Email</div>
                <div className="text-sm text-gray-600">akhasha@gmail.com</div>
              </div>
              <div>
                <div className="text-sm font-medium">IP Address</div>
                <div className="text-sm text-gray-600">192.168.0.100</div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white border p-5 rounded-md">
              <p className="font-semibold mb-1">Payment Details</p>
              <div className="border rounded-md">
                <div className="font-semibold p-3 space-y-2">
                  <div className="flex justify-between">
                    <p>Car Rent</p> <span>$300.00</span>
                  </div>
                  <div className="flex justify-between">
                    <p>Tax</p> <span>$10.00</span>
                  </div>
                  <div className="flex justify-between">
                    <p>Charges</p> <span>$5.00</span>
                  </div>
                  <p className="font-normal text-gray-500 text-sm text-center">
                    16% Taxes are included now
                  </p>
                </div>
                <div className="border-t p-3 flex justify-between">
                  <p>Total</p> <span>$315.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-7 p-4 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:space-x-14">
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
      <div className="flex justify-end my-5">
        <button className="bg-[#e1baf9] px-3 py-1 text-white rounded-full">
          Booked
        </button>
      </div>
    </div>
  );
};

export default BookCarAssignDrivers;
