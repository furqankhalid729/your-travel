import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { GoKey } from "react-icons/go";
import { MdOutlinePayment } from "react-icons/md";
import { Link } from "@inertiajs/react";



const HotelBooking = ({ latestBooking, hotelRoomsCount, bookingCount }) => {
  const topMenuItems = [
    {
      name: "Available Rooms",
      icon: <GoKey />,
      bgColor: "#bceaff",
      count: hotelRoomsCount,
      text: "View Rooms",
      link: route('hotel.index'),
    },
    {
      name: "Confirmed Bookings",
      icon: <AiOutlineLike />,
      bgColor: "#e0b0ff",
      count: bookingCount,
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
  ];
  return (
    <div className="p-2 md:p-4 m-2 md:m-6 bg-white">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-5">
        {topMenuItems.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="border flex flex-col items-center text-base font-semibold cursor-pointer"
          >
            <div
              className="shadow p-2 md:p-4 flex flex-col items-center justify-center w-full"
              style={{ backgroundColor: item.bgColor }}
            >
              <div className="flex items-center justify-between w-full px-2">
                <span
                  className={`text-4xl ${item.name === "Available Rooms"
                    ? "text-[#808080]"
                    : "text-white"
                    }`}
                >
                  {item.icon}
                </span>
                <span
                  className={`font-medium text-4xl ${item.name === "Available Rooms"
                    ? "text-[#808080]"
                    : "text-white"
                    }`}
                >
                  {item.count}
                </span>
              </div>
              <p
                className={`mt-4 w-full text-right font-normal ${item.name === "Available Rooms"
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
        <div className="flex items-center gap-2">
          <Link
            href={route('hotel.create')}
            className="flex items-center gap-1 bg-[#bb8dd9] text-white px-2 md:px-3 py-1 md:py-2 rounded-lg"
          >
            <FaPlus />
            Add New Hotel
          </Link>
        </div>
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
            {latestBooking.map((booking, index) => (
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
                  {booking.first_name}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                  {booking.last_name}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                  {booking.email}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-base flex space-x-2">
                  {/* <Link
                    href="/dashboard/hotel-booking/hotel-booking-form"
                    className="text-green-500"
                  >
                    <FaEdit />
                  </Link> */}
                  <Link
                    href={route('hotelbooking.show',booking.booking_id)}
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
