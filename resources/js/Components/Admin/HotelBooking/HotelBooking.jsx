import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { GoKey } from "react-icons/go";
// import { LuAlarmClock } from "react-icons/lu";
import { MdOutlinePayment } from "react-icons/md";
import { Link } from "@inertiajs/react";

const bookingData = [
  {
    id: 1,
    room: "Deluxe Suite",
    checkIn: "2024-11-21",
    checkOut: "2024-11-25",
    price: "$200",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@mail.com",
    phone: "+123456789",
  },
  {
    id: 2,
    room: "Standard Room",
    checkIn: "2024-11-20",
    checkOut: "2024-11-23",
    price: "$150",
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@mail.com",
    phone: "+987654321",
  },
  {
    id: 3,
    room: "Single Room",
    checkIn: "2024-11-22",
    checkOut: "2024-11-24",
    price: "$100",
    firstName: "Alice",
    lastName: "Johnson",
    email: "alice.johnson@mail.com",
    phone: "+1122334455",
  },
];

const topMenuItems = [
  {
    name: "Available Rooms",
    icon: <GoKey />,
    bgColor: "#bceaff",
    count: 5,
    text: "View Rooms",
    link: "/dashboard/hotel-booking/all-hotels",
  },
  {
    name: "Confirmed Bookings",
    icon: <AiOutlineLike />,
    bgColor: "#e0b0ff",
    count: 5,
    text: "View Details",
    link: "/dashboard/hotel-booking/all-hotel-booking",
  },
  {
    name: "Payments",
    icon: <MdOutlinePayment />,
    bgColor: "#c66060",
    count: 5,
    text: "View Details",
    link: "/dashboard/hotel-booking",
  },
  // {
  //   name: "Special Offers",
  //   icon: <LuAlarmClock />,
  //   bgColor: "#522864",
  //   count: 5,
  //   text: "Special Offers",
  //   link: "/dashboard/hotel-booking",
  // },
];

const HotelBooking = () => {
  return (
    <div className="p-2 md:p-4 m-2 md:m-6 bg-white">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-5">
        {topMenuItems.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="border flex flex-col items-center text-base font-semibold cursor-pointer"
          >
            <div
              className="shadow p-2 md:p-4 flex flex-col items-center justify-center w-full"
              style={{ backgroundColor: item.bgColor }}
            >
              <div className="flex items-center justify-between w-full px-2">
                <span
                  className={`text-4xl ${
                    item.name === "Available Rooms"
                      ? "text-[#808080]"
                      : "text-white"
                  }`}
                >
                  {item.icon}
                </span>
                <span
                  className={`font-medium text-4xl ${
                    item.name === "Available Rooms"
                      ? "text-[#808080]"
                      : "text-white"
                  }`}
                >
                  {item.count}
                </span>
              </div>
              <p
                className={`mt-4 w-full text-right font-normal ${
                  item.name === "Available Rooms"
                    ? "text-[#808080]"
                    : "text-white"
                }`}
              >
                {item.name}
              </p>
            </div>
            <p
              style={{ color: item.bgColor }}
              className="py-[2px] px-4 text-sm text-gray-800 w-full text-left"
            >
              {item.text}
            </p>
          </Link>
        ))}
      </div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl md:text-4xl text-[#808080]">Latest Bookings</h2>
        <Link
          to="/dashboard/drafts"
          className="flex items-center gap-1 bg-[#bb8dd9] text-white px-2 md:px-3 py-1 md:py-2 rounded-lg"
        >
          <FaPlus />
          Create New Bookings
        </Link>
      </div>
      <div className="rounded-lg border-t overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              {[
                "ID",
                "Room",
                "Check-In",
                "Check-Out",
                "Price",
                "First Name",
                "Last Name",
                "Email",
                "Phone",
                "Action",
              ].map((header, index) => (
                <th
                  key={index}
                  className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {bookingData.map((booking, index) => (
              <tr key={index}>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                  {booking.id}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className="rounded-xl inline-block px-1 py-[1px] text-sm bg-[#e0b0ff] text-wite">
                    {booking.room}
                  </span>
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                  {booking.checkIn}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                  {booking.checkOut}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                  {booking.price}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                  {booking.firstName}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                  {booking.lastName}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                  {booking.email}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                  {booking.phone}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-base flex space-x-2">
                  <Link
                    to="/dashboard/hotel-booking/hotel-booking-form"
                    className="text-green-500"
                  >
                    <FaEdit />
                  </Link>
                  <Link
                    to="/dashboard/hotel-booking/hotel-booking-profile"
                    className="text-blue-500 px-1"
                  >
                    <FaEye />
                  </Link>
                  <button className="text-red-500">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HotelBooking;
