import { Link } from "@inertiajs/react";
import { useForm } from "@inertiajs/react"; // Correct import
import { useState } from "react";
import { FaSave } from "react-icons/fa";
import { MdVerified, MdRemoveCircleOutline, MdOutlineArrowBackIos } from "react-icons/md";
// import { useNavigate } from "react-router-dom";

const HotelBookingForm = () => {
  // const navigate = useNavigate();
  // const [checkIn, setCheckIn] = useState("");
  // const [checkOut, setCheckOut] = useState("");
  const [guestCount, setGuestCount] = useState(1);
  const [roomType, setRoomType] = useState("Standard");
  const [price, setPrice] = useState(100);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);

  const { data, setData, post, processing, errors } = useForm({
    firstName: "",
    lastName: "",
    email: "",
    email_verified: false,
    phoneNo: "",
    phoneNo_verified: false,
    identityNo: "",
    gender: "",
    fromDate: "",
    toDate: "",
    duration: "",
    tourLocation: "",
    noOfMember: 0,
    price: 0,
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // email verified functions
  const handleVerifyEmail = () => {
    setIsEmailVerified((prev) => !prev);
  };
  // phoneNo verified functions
  const handleVerifyPhone = () => {
    setIsPhoneVerified((prev) => !prev);
  };

  // Calculate days
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
  ;

  // date change
  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setData((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Update price based on room type and guest count
  const updatePrice = (guestCount) => {
    let roomPrice = 0;

    if (roomType === "Deluxe") {
      roomPrice = 200;
    } else if (roomType === "Standard") {
      roomPrice = 100;
    } else {
      roomPrice = 50;
    }

    setPrice(roomPrice * guestCount);
  };

  const handleGuestCountChange = (e) => {
    const count = parseInt(e.target.value, 10) || 1;
    setGuestCount(count);
    updatePrice(count);
  };

  const { days, nights } = calculateDays(data.fromDate, data.toDate);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("email_verified", isEmailVerified);
    formData.append("phoneNo", data.phoneNo);
    formData.append("phoneNo_verified", isPhoneVerified);
    formData.append("identityNo", data.identityNo);
    formData.append("gender", data.gender);
    formData.append("fromDate", data.fromDate);  // append fromDate
    formData.append("toDate", data.toDate);  // append toDate
    formData.append("duration", `${days} days, ${nights} night${nights === 1 ? "" : "s"}`);
    formData.append("tourLocation", data.tourLocation);  // append tour location
    formData.append("noOfMember", guestCount);
    formData.append("price", price);

    // Log the FormData entries
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    post("/hotel-booking-form", formData, {
      onSuccess: () => {
        setMessage("hotel-booking-form added successfully!");
      },
    });
  };

  return (
    <div>
      {/* link and Save btn */}
      <div className="bg-white flex justify-between items-center mb-6 p-3">
        <Link
          href="/dashboard/tour-booking"
          // onClick={() => navigate(-1)}
          className="text-gray-500 hover:text-gray-700"
        >
          <MdOutlineArrowBackIos size={20} />
        </Link>
        <button
          onClick={handleSubmit}
          className="text-white px-1 bg-[#e0b0ff] flex items-center"
        >
          <FaSave size={20} /> Save
        </button>
      </div>
      <div className="m-5 p-4 pb-10 bg-white rounded-lg shadow-lg">
        {/* heading div  */}
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
            {/* FirstName */}
            <div>
              <input
                type="text"
                className="mt-1 p-3 w-full border border-gray-300 rounded-md"
                name="firstName"
                value={data.firstName}
                onChange={handleInputChange}
                placeholder="Mohammad"
              />
            </div>
            {/* lastName */}
            <div>
              <input
                type="text"
                className="mt-1 p-3 w-full border border-gray-300 rounded-md"
                name="lastName"
                value={data.lastName}
                onChange={handleInputChange}
                placeholder="adlan"
              />
            </div>
            {/* email */}
            <div className="relative">
              <div className="flex items-center">
                <input
                  type="email"
                  className="mt-1 p-3 w-[73%] border border-gray-300 rounded-md"
                  name="email"
                  value={data.email}
                  onChange={handleInputChange}
                  placeholder="M.aadlan9@gmail.com"
                />
                <button onClick={handleVerifyEmail} className={`p-3 border absolute right-0 rounded-md text-sm  ${isEmailVerified ? " bg-[#e0b0ff] text-white" : "bg-[#e4e4e4] text-gray-500"} flex items-center`}>
                  {isEmailVerified ? "Verified" : "Non-Verified"}  <MdRemoveCircleOutline className="ml-1" />
                </button>
              </div>
            </div>
            {/* phoneNo */}
            <div className="relative">
              <div className="flex items-center">
                <input
                  type="tel"
                  className="mt-1 p-3 w-[80%] border border-gray-300 rounded-md"
                  name="phoneNo"
                  value={data.phoneNo}
                  onChange={handleInputChange}
                  placeholder="+13 337 65 95 335"
                />
                <button onClick={handleVerifyPhone} className={`p-3 border absolute rounded-md right-0 text-sm ${isPhoneVerified ? " bg-[#e0b0ff] text-white" : "bg-[#e4e4e4] text-gray-500"} flex items-center`}>
                  {isPhoneVerified ? "Verified" : "Non-Verified"}
                  <MdRemoveCircleOutline className="ml-1" />
                  {isPhoneVerified && <MdVerified className="ml-1" />}
                </button>
              </div>
            </div>
            {/* identityNo */}
            <div>
              <input
                type="text"
                className="mt-1 p-3 w-full border border-gray-300 rounded-md"
                name="identityNo"
                value={data.identityNo}
                onChange={handleInputChange}
                placeholder="Identity Number"
              />
            </div>
            {/* Gender */}
            <div>
              <select
                name="gender"
                value={data.gender}
                onChange={handleInputChange}
                className="mt-1 p-3 w-full border border-gray-300 rounded-md"
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </form>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          Details
        </h2>
        <form>
          <div className="grid lg:grid-cols-3 gap-4">
            {/* from date */}
            <div>
              <label className="block text-sm font-medium text-gray-500">
                From
              </label>
              <input
                type="datetime-local"
                name="fromDate"  // name should match the state property
                value={data.fromDate}  // value linked to the state
                onChange={handleDateChange}  // onChange to update state
                className="mt-1 p-2 w-full border border-gray-300 text-gray-500 rounded-md"
              />
            </div>
            {/* to date */}
            <div>
              <label className="block text-sm font-medium text-gray-500">
                To
              </label>
              <input
                type="datetime-local"
                name="toDate"  // name should match the state property
                value={data.toDate}  // value linked to the state
                onChange={handleDateChange}  // onChange to update state
                className="mt-1 p-2 w-full border border-gray-300 text-gray-500 rounded-md"
              />
            </div>
            {/* duraiotn */}
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
            {/* tour location */}
            <div>
              <label className="block text-sm font-medium text-gray-500">
                Tour location
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border text-gray-500 border-gray-300 rounded-md"
                name="tourLocation"
                value={data.tourLocation}
                onChange={handleInputChange}
                placeholder="Swat Valley"
              />
            </div>
            {/* no of member */}
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
            {/* price */}
            <div>
              <label className="block text-sm font-medium text-gray-500">
                Price
              </label>
              <input
                type="text"
                value={`$${price}`}
                className="mt-1 p-2 w-full border border-gray-300 text-gray-500 rounded-md bg-gray-100"
                readOnly
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HotelBookingForm;
