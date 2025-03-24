import { FaArrowLeft, FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "@inertiajs/react";
// import { useNavigate  } from "react-router-dom";

const AllHotelBooking = ({allBooking}) => {
  // const navigate = useNavigate();
  console.log(allBooking)
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
    {
      id: 4,
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
      id: 5,
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
      id: 6,
      room: "Single Room",
      checkIn: "2024-11-22",
      checkOut: "2024-11-24",
      price: "$100",
      firstName: "Alice",
      lastName: "Johnson",
      email: "alice.johnson@mail.com",
      phone: "+1122334455",
    },
    {
      id: 7,
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
      id: 8,
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
      id: 9,
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

  return (
    <div>
      <Link
        href={route('hotelbooking.index')}
        // onClick={() => navigate(-1)}
        className="m-4 flex items-center text-gray-600 hover:text-gray-800"
      >
        <FaArrowLeft className="mr-2" />
        <span>Back</span>
      </Link>
      <div className="p-2 md:p-4 mx-2 md:mx-6 bg-white">
        <h1 className="text-2xl text-[#808080] mb-4">All Hotel Bookings</h1>
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
              {allBooking.map((booking, index) => (
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
                   
                    <Link
                      href={route('hotelbooking.show',booking.booking_id)}
                      className="text-blue-500 px-1"
                    >
                      <FaEye />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllHotelBooking;
