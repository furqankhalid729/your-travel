import { Link } from "@inertiajs/react";
import { useState } from "react";
import { FaSave } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
import { MdVerified, MdRemoveCircleOutline, MdOutlineArrowBackIos } from "react-icons/md";

const AddTourBooking = () => {
  // const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guestCount, setGuestCount] = useState(1);
  const [roomType, setRoomType] = useState("");
  const [price, setPrice] = useState(0);

  const calculateDays = (checkInDate, checkOutDate) => {
    if (!checkInDate || !checkOutDate) return { days: 0, nights: 0 };

    const checkInDateObj = new Date(checkInDate);
    const checkOutDateObj = new Date(checkOutDate);
    const diffTime = Math.abs(checkOutDateObj - checkInDateObj);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return {
      days: diffDays,
      nights: diffDays > 0 ? diffDays - 1 : 0,
    };
  };

  const handleSave = () => {
  };

  const handleRoomTypeChange = (e) => {
    const selectedRoomType = e.target.value;
    setRoomType(selectedRoomType);
    setPrice(
      selectedRoomType === "Deluxe"
        ? 200
        : selectedRoomType === "Standard"
          ? 100
          : 50
    );
  };

  const handleGuestCountChange = (e) => {
    const count = parseInt(e.target.value, 10) || 1;
    setGuestCount(count);
  };

  const { days, nights } = calculateDays(checkIn, checkOut);

  return (
    <div>
      <div className="bg-white flex justify-between items-center mb-6 p-3">
        <Link
          href="/dashboard/tour-booking"
          // onClick={() => navigate(-1)}
          className="text-gray-500 hover:text-gray-700"
        >
          <MdOutlineArrowBackIos size={20} />
        </Link>
        <button
          onClick={handleSave}
          className="text-white px-1 bg-[#e0b0ff] flex items-center"
        >
          <FaSave size={20} /> Save
        </button>
      </div>
      <div className="m-5 p-4 pb-10 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            General Information
          </h2>
          <p className="flex items-center gap-3">
            <p className="bg-[#2e2532] rounded-full text-[#c2b2cc] px-1">
              Booked
            </p>
            <span className="bg-[#e4e4e4] p-1 text-[#808080]">A101</span>
          </p>
        </div>
        <form>
          <div className="grid lg:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                className="mt-1 p-3 w-full border border-gray-300 rounded-md"
                placeholder="Mohammad"
              />
            </div>
            <div>
              <input
                type="text"
                className="mt-1 p-3 w-full border border-gray-300 rounded-md"
                placeholder="Adlan"
              />
            </div>
            <div className="relative">
              <div className="flex items-center">
                <input
                  type="email"
                  className="mt-1 p-3 w-[73%] border border-gray-300 rounded-md"
                  placeholder="M.aadlan9@gmail.com"
                />
                <button className="p-3 border absolute right-0 rounded-md text-sm bg-[#e4e4e4] text-gray-500 flex items-center">
                  Non-Verified <MdRemoveCircleOutline className="ml-1" />
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center">
                <input
                  type="tel"
                  className="mt-1 p-3 w-[80%] border border-gray-300 rounded-md"
                  placeholder="+13 337 65 95 335"
                />
                <button className="p-3 border absolute rounded-md right-0 text-sm bg-[#e0b0ff] text-white flex items-center">
                  Verified <MdVerified className="ml-1" />
                </button>
              </div>
            </div>
            <div>
              <input
                type="text"
                className="mt-1 p-3 w-full border border-gray-300 rounded-md"
                placeholder="Identity Number"
              />
            </div>
            <div>
              <select
                value={roomType}
                onChange={handleRoomTypeChange}
                className="mt-1 p-3 w-full border border-gray-300 rounded-md"
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
        </form>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          Details
        </h2>
        <form>
          <div className="grid lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-500">
                From
              </label>
              <input
                type="datetime-local"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 text-gray-500 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">
                To
              </label>
              <input
                type="datetime-local"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 text-gray-500 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">
                Duration
              </label>
              <input
                type="text"
                value={`${days} days, ${nights} night${nights === 1 ? "" : "s"
                  }`}
                readOnly
                className="mt-1 p-2 w-full border border-gray-300 rounded-md bg-[#e0b0ff] text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">
                Tour location
              </label>
              <input
                type="text"
                readOnly
                className="mt-1 p-2 w-full border text-gray-500 border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">
                Number of Member
              </label>
              <input
                type="number"
                value={guestCount}
                onChange={handleGuestCountChange}
                className="mt-1 p-2 w-full border border-gray-300 text-gray-500 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">
                Price
              </label>
              <input
                type="text"
                value={`$${price * guestCount}`}
                readOnly
                className="mt-1 p-2 w-full border border-gray-300 text-gray-500 rounded-md bg-gray-100"
              />
            </div>
          </div>
        </form>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          Members
        </h2>
        {[1, 2, 3].map((member) => (
          <div key={member} className="mb-4">
            <h3 className="text-lg font-medium text-gray-700">
              Member {member.toString().padStart(2, "0")}
            </h3>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-3 w-full border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-3 w-full border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 w-full border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="p-3 w-full border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Identity Number"
                  className="p-3 w-full border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex justify-center w-full gap-2">
                <select className="p-3 w-full border border-gray-300 rounded-md">
                  <option value="">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <input
                  type="number"
                  placeholder="Age"
                  className="p-3 w-full border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddTourBooking;
