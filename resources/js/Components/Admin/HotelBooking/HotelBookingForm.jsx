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
  const [guestCount, setGuestCount] = useState(0);
  const [roomType, setRoomType] = useState("Standard");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);

  const { data, setData, post, processing, errors } = useForm({
    first_name: "",
    last_name: "",
    email: "",
    email_verified: false,
    phone_no: "",
    phone_no_verified: false,
    identity_no: "",
    gender: "",
    from_date: "",
    to_date: "",
    duration: "",
    tour_location: "",
    no_of_member: 0,
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

  const handleEmailVerify = () => {
    setIsEmailVerified(!isEmailVerified);
    setData('email_verified', !isEmailVerified);
  };

  const handlePhoneVerify = () => {
    setIsPhoneVerified(!isPhoneVerified);
    setData('phone_no_verified', !isPhoneVerified);
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


  // date change
  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setData(name, value);

    if (name === 'from_date' || name === 'to_date') {
      const { days, nights } = calculateDays(data.from_date, data.to_date);
      setData('duration', `${days} days, ${nights} night${nights === 1 ? '' : 's'}`);
    }
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

    setData('price', roomPrice * guestCount);
  };


  const handleGuestCountChange = (e) => {
    const count = parseInt(e.target.value, 10) || 1;
    setGuestCount(count);
    setData('no_of_member', count);
    updatePrice(count);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name);
    formData.append("email", data.email);
    formData.append("email_verified", data.email_verified);
    formData.append("phone_no", data.phone_no);
    formData.append("phone_no_verified", data.phone_no_verified);
    formData.append("identity_no", data.identity_no);
    formData.append("gender", data.gender);
    formData.append("from_date", data.from_date);  // append from_date
    formData.append("to_date", data.to_date);  // append to_date
    formData.append("duration", data.duration);
    formData.append("tour_location", data.tour_location);  // append tour location
    formData.append("no_of_member", data.no_of_member);
    formData.append("price", data.price);

    // Log the FormData entries
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      // Try sending the POST request
      await post(route("hotel.store"), formData, {
        onSuccess: () => {
          setMessage("Hotel Book successfully!");
        },
      });
    } catch (error) {
      // Catch and log any errors
      console.error("Error while adding Hotel book:", error);
      setMessage("An error occurred while adding the Hotel book.");
    }
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
            {/* first_name */}
            <div>
              <input
                type="text"
                className="mt-1 p-3 w-full border border-gray-300 rounded-md"
                name="first_name"
                value={data.first_name}
                onChange={handleInputChange}
                placeholder="Mohammad"
              />
              {errors.first_name && <p className="text-red-500 text-sm mt-1">{errors.first_name}</p>}
            </div>
            {/* last_name */}
            <div>
              <input
                type="text"
                className="mt-1 p-3 w-full border border-gray-300 rounded-md"
                name="last_name"
                value={data.last_name}
                onChange={handleInputChange}
                placeholder="adlan"
              />
              {errors.last_name && <p className="text-red-500 text-sm mt-1">{errors.last_name}</p>}
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
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                <button
                  type="button"
                  onClick={handleEmailVerify}
                  className={`p-3 border absolute rounded-md right-0 text-sm ${isEmailVerified ? " bg-[#e0b0ff] text-white" : "bg-[#e4e4e4] text-gray-500"} flex items-center`}
                >
                  {isEmailVerified ? 'Verified' : 'Not Verified'}
                </button>
              </div>
            </div>
            {/* phone_no */}
            <div className="relative">
              <div className="flex items-center">
                <input
                  type="tel"
                  className="mt-1 p-3 w-[80%] border border-gray-300 rounded-md"
                  name="phone_no"
                  value={data.phone_no}
                  onChange={handleInputChange}
                  placeholder="+13 337 65 95 335"
                />
                {errors.phone_no && <p className="text-red-500 text-sm mt-1">{errors.phone_no}</p>}
                <button
                  type="button"
                  onClick={handlePhoneVerify}
                  className={`p-3 border absolute rounded-md right-0 text-sm ${isPhoneVerified ? " bg-[#e0b0ff] text-white" : "bg-[#e4e4e4] text-gray-500"} flex items-center`}
                >
                  {isPhoneVerified ? 'Verified' : 'Not Verified'}
                </button>
              </div>
            </div>
            {/* identity_no */}
            <div>
              <input
                type="text"
                className="mt-1 p-3 w-full border border-gray-300 rounded-md"
                name="identity_no"
                value={data.identity_no}
                onChange={handleInputChange}
                placeholder="Identity Number"
              />
              {errors.identity_no && <p className="text-red-500 text-sm mt-1">{errors.identity_no}</p>}
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
              {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
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
                name="from_date"
                value={data.from_date}
                onChange={handleDateChange}
                className="mt-1 p-2 w-full border border-gray-300 text-gray-500 rounded-md"
              />
              {errors.from_date && <p className="text-red-500 text-sm mt-1">{errors.from_date}</p>}
            </div>
            {/* to date */}
            <div>
              <label className="block text-sm font-medium text-gray-500">
                To
              </label>
              <input
                type="datetime-local"
                name="to_date"
                value={data.to_date}
                onChange={handleDateChange}
                className="mt-1 p-2 w-full border border-gray-300 text-gray-500 rounded-md"
              />
              {errors.to_date && <p className="text-red-500 text-sm mt-1">{errors.to_date}</p>}
            </div>
            {/* duraiotn */}
            <div>
              <label className="block text-sm font-medium text-gray-500">Duration</label>
              <input
                type="text"
                value={data.duration}
                readOnly
                className="mt-1 p-2 w-full border border-gray-300 rounded-md bg-[#e0b0ff] text-white"
              />
              {errors.duration && <p className="text-red-500 text-sm mt-1">{errors.duration}</p>}
            </div>
            {/* tour location */}
            <div>
              <label className="block text-sm font-medium text-gray-500">
                Tour location
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border text-gray-500 border-gray-300 rounded-md"
                name="tour_location"
                value={data.tour_location}
                onChange={handleInputChange}
                placeholder="Swat Valley"
              />
              {errors.tour_location && <p className="text-red-500 text-sm mt-1">{errors.tour_location}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Number of Members</label>
              <input
                type="number"
                value={guestCount}
                onChange={handleGuestCountChange}
                className="mt-1 p-2 w-full border border-gray-300 text-gray-500 rounded-md"
              />
              {errors.no_of_member && <p className="text-red-500 text-sm mt-1">{errors.no_of_member}</p>}
            </div>
            {/* price */}
            <div>
              <label className="block text-sm font-medium text-gray-500">Price</label>
              <input
                type="number"
                name="price"
                value={data.price}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 text-gray-500 rounded-md"
              />
              {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HotelBookingForm;
