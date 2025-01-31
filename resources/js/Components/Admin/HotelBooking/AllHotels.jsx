import { FaArrowLeft, FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "@inertiajs/react";
// import { useNavigate } from "react-router-dom";

const AllHotels = ({ hotelRooms }) => {
  console.log(hotelRooms);

  // const navigate = useNavigate();
  const hotelData = [
    {
      id: 1,
      name: "Hotel California",
      location: "Los Angeles, CA",
      price: "$200/night",
      rating: "4.5",
    },
    {
      id: 2,
      name: "Grand Palace Hotel",
      location: "New York, NY",
      price: "$250/night",
      rating: "4.7",
    },
    {
      id: 3,
      name: "The Ritz-Carlton",
      location: "San Francisco, CA",
      price: "$300/night",
      rating: "5.0",
    },
    {
      id: 4,
      name: "Beachfront Resort",
      location: "Miami, FL",
      price: "$180/night",
      rating: "4.3",
    },
    {
      id: 5,
      name: "Mountain View Lodge",
      location: "Denver, CO",
      price: "$150/night",
      rating: "4.2",
    },
  ];

  return (
    <div>
      <Link
        href="/dashboard/hotel-booking"
        // onClick={() => navigate(-1)}
        className="m-4 flex items-center text-gray-600 hover:text-gray-800"
      >
        <FaArrowLeft className="mr-2" />
        <span>Back</span>
      </Link>
      <div className="p-2 md:p-4 mx-2 md:mx-6 bg-white">
        <h1 className="text-2xl text-[#808080] mb-4">All Hotels</h1>
        <div className="rounded-lg border-t overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                {[
                  "ID",
                  "Hotel Name",
                  "Location",
                  "Price",
                  "Rating",
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
              {hotelData.map((hotel, index) => (
                <tr key={index}>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {hotel.id}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {hotel.name}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {hotel.location}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {hotel.price}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {hotel.rating}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-base flex space-x-2">
                    <Link
                      href="/dashboard/hotel-booking/add-hotel-room"
                      className="text-green-500"
                    >
                      <FaEdit />
                    </Link>
                    <Link
                      href="/dashboard/hotel-booking/view-rooms"
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
      {/* <div className="p-2 md:p-4 mx-2 md:mx-6 bg-white">
        <h1 className="text-2xl text-[#808080] mb-4">All Hotels</h1>
        <div className="rounded-lg border-t overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                {[
                  "ID",
                  "Hotel Name",
                  "Location",
                  "Price",
                  "Rating",
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
              {hotelData.map((hotel, index) => (
                <tr key={index}>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {hotel.id}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {hotel.name}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {hotel.location}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {hotel.price}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {hotel.rating}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-base flex space-x-2">
                    <Link
                      href="/dashboard/hotel-booking/add-hotel-room"
                      className="text-green-500"
                    >
                      <FaEdit />
                    </Link>
                    <Link
                      href="/dashboard/hotel-booking/view-rooms"
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
      </div> */}
    </div>
  );
};

export default AllHotels;
