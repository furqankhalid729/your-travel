import {
  FaArrowLeft,
  FaCheck,
  FaEdit,
  FaEye,
  FaParking,
  FaPlus,
  FaSave,
  FaSpa,
  FaSwimmingPool,
  FaTrash,
  FaUtensils,
  FaWifi,
} from "react-icons/fa";
// import img1 from "../../assets/img1.png";
// import img2 from "../../assets/img2.png";
// import img3 from "../../assets/img3.png";
// import img4 from "../../assets/img4.png";
// import img5 from "../../assets/img5.png";
// import img6 from "../../assets/img6.png";
// import mapImg from "../../assets/map.png";
import { Link } from "@inertiajs/react";
// import { useNavigate } from "react-router-dom";

const roomData = [
  {
    id: 1,
    roomType: "Luxury Room",
    numberOfRooms: 5,
    availableRooms: 3,
    price: "$250/night",
  },
  {
    id: 2,
    roomType: "Standard Room",
    numberOfRooms: 10,
    availableRooms: 6,
    price: "$150/night",
  },
  {
    id: 3,
    roomType: "Deluxe Room",
    numberOfRooms: 8,
    availableRooms: 4,
    price: "$200/night",
  },
];

const ViewRooms = () => {
  // const navigate = useNavigate();
  return (
    <div className="m-3 lg:m-5">
      <div className="space-y-3 mb-5 bg-white p-4">
        <div className="flex justify-between items-center">
          <Link
            href="/dashboard/hotel-booking"
            // onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-gray-800"
          >
            <FaArrowLeft className="mr-2" />
            <span>Back</span>
          </Link>
          <div className="flex space-x-2">
            <button className="flex items-center bg-[#e4baff] text-white px-3 py-1 rounded-md">
              <FaEdit className="mr-1" />
              Edit
            </button>
            <button className="flex items-center bg-[#e4baff] text-white px-3 py-1 rounded-md">
              <FaSave className="mr-1" />
              Save
            </button>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800">Luxury Room</h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-2 row-span-2">
            <img
              src="/storage/images/img1.png"
              alt="Room 1"
              className="w-full h-auto rounded-md shadow object-cover"
            />
          </div>
          <div>
            <img
              src="/storage/images/img2.png"
              alt="Room 2"
              className="w-full h-auto rounded-md shadow"
            />
          </div>
          <div className="relative">
            <img
              src="/storage/images/map.png"
              alt="Map"
              className="w-full h-auto rounded-md shadow"
            />
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#e0bafb] rounded-lg text-white px-3 py-2">
              Show on map
            </button>
          </div>
          <div>
            <img
              src="/storage/images/img3.png"
              alt="Room 3"
              className="w-full h-auto rounded-md shadow"
            />
          </div>
          <div className="bg-[#e6c0ff] p-4 rounded-md shadow row-span-2">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Details
            </h3>
            <ul className="space-y-5">
              <li className="flex justify-between">
                <span>Type</span> Luxury Room
              </li>
              <li className="flex justify-between">
                <span>Location</span> Lahore
              </li>
              <li className="flex justify-between">
                <span>Food</span> No Food
              </li>
              <li className="flex justify-between">
                <span>Accommodation</span> Fully
              </li>
              <li className="flex justify-between">
                <span>Person</span> 3 Person
              </li>
              <li className="flex justify-between">
                <span>Price</span> $200
              </li>
            </ul>
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-4">
            <img src="/storage/images/img4.png" alt="Room 4" className="rounded-md shadow" />
            <img src="/storage/images/img5.png" alt="Room 5" className="rounded-md shadow" />
            <img src="/storage/images/img6.png" alt="Room 6" className="rounded-md shadow" />
          </div>
        </div>
        <h1 className="text-2xl font-semibold text-gray-800">Summary</h1>
        <p className="text-sm text-gray-600">
          Avari Hotels was founded in 1944 by Dinshaw Avari. Avari Hotels first
          location was the Beach Luxury Hotel in Karachi which opened in 1948.
          Later, the company established the 17-story Avari Tower Hotel with 120
          suites in Karachi In May 2012, Avari Hotels partnered with Etihad to
          join the Etihad Guest loyalty program In 2013, the group announced the
          launch of a major expansion phase.In 2017, Avari Hotels announced the
          opening of two 4-star hotels in Multan. The hotel chain is owned by
          the Parsi Avari family and which was led by Byram D. Avari, who was
          the Chairman of the group. The hotel chain offers a dedicated
          toll-free round-the-clock reservations number in Pakistan, 0800-AVARI.
          For callers from overseas, the number is +92 333 0602743.{" "}
        </p>
        <h1 className="text-2xl font-semibold text-gray-800">Types</h1>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          <p className="flex items-center gap-2 p-4">
            <span className="text-[#e4baff]">
              <FaCheck />
            </span>{" "}
            Hotels
          </p>
          <p className="flex items-center gap-2 p-4">
            <span className="text-[#e4baff]">
              <FaCheck />
            </span>{" "}
            Resorts
          </p>
          <p className="flex items-center gap-2 p-4">
            <span className="text-[#e4baff]">
              <FaCheck />
            </span>{" "}
            Villa
          </p>
          <p className="flex items-center gap-2 p-4">
            <span className="text-[#e4baff]">
              <FaCheck />
            </span>{" "}
            Lodge
          </p>
          <p className="flex items-center gap-2 p-4">
            <span className="text-[#e4baff]">
              <FaCheck />
            </span>{" "}
            Hotels
          </p>
          <p className="flex items-center gap-2 p-4">
            <span className="text-[#e4baff]">
              <FaCheck />
            </span>{" "}
            Boutique
          </p>
          <p className="flex items-center gap-2 p-4">
            <span className="text-[#e4baff]">
              <FaCheck />
            </span>{" "}
            Hotels
          </p>
          <p className="flex items-center gap-2 p-4">
            <span className="text-[#e4baff]">
              <FaCheck />
            </span>{" "}
            Resorts
          </p>
          <p className="flex items-center gap-2 p-4">
            <span className="text-[#e4baff]">
              <FaCheck />
            </span>{" "}
            Villa
          </p>
          <p className="flex items-center gap-2 p-4">
            <span className="text-[#e4baff]">
              <FaCheck />
            </span>{" "}
            Lodge
          </p>
          <p className="flex items-center gap-2 p-4">
            <span className="text-[#e4baff]">
              <FaCheck />
            </span>{" "}
            Hotels
          </p>
          <p className="flex items-center gap-2 p-4">
            <span className="text-[#e4baff]">
              <FaCheck />
            </span>{" "}
            Boutique
          </p>
        </div>
        <h1 className="text-2xl font-semibold text-gray-800">Facilities</h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <p className="flex items-center gap-2 p-4">
            <span className="text-[#e4baff]">
              <FaWifi />
            </span>{" "}
            Free Wifi
          </p>
          <p className="flex items-center gap-2 p-4">
            <span className="text-[#e4baff]">
              <FaUtensils />
            </span>{" "}
            Restaurant
          </p>
          <p className="flex items-center gap-2 p-4">
            <span className="text-[#e4baff]">
              <FaParking />
            </span>{" "}
            Parking
          </p>
          <p className="flex items-center gap-2 p-4">
            <span className="text-[#e4baff]">
              <FaSwimmingPool />
            </span>{" "}
            Swimming Pool
          </p>
          <p className="flex items-center gap-2 p-4">
            <span className="text-[#e4baff]">
              <FaSpa />
            </span>{" "}
            Spa
          </p>
          <p className="flex items-center gap-2 p-4">
            <span className="text-[#e4baff]">
              <FaParking />
            </span>{" "}
            Parking
          </p>
          <p className="flex items-center gap-2 p-4">
            <span className="text-[#e4baff]">
              <FaSwimmingPool />
            </span>{" "}
            Swimming Pool
          </p>
          <p className="flex items-center gap-2 p-4">
            <span className="text-[#e4baff]">
              <FaSpa />
            </span>{" "}
            Spa
          </p>
        </div>
      </div>
      <div className="bg-white mt-6 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl lg:text-4xl text-[#808080]">
            Available Rooms
          </h2>
          <Link
            href={route('hotel.create')}
            className="flex items-center gap-1 bg-[#bb8dd9] text-white px-2 py-1 lg:py-2 rounded-lg"
          >
            <FaPlus />
            Add More Rooms
          </Link>
        </div>
        <div className="rounded-lg overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                {[
                  "ID",
                  "Room Type",
                  "Number of Rooms",
                  "Available Rooms",
                  "Price",
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
              {roomData.map((room, index) => (
                <tr key={index}>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {room.id}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {room.roomType}
                  </td>
                  <td className="px-16 py-4 whitespace-nowrap text-sm text-gray-500">
                    {room.numberOfRooms}
                  </td>
                  <td className="px-16 py-4 whitespace-nowrap text-sm text-gray-500">
                    {room.availableRooms}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {room.price}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm flex space-x-2">
                    <button className="text-green-500 hover:text-green-700">
                      <FaEdit />
                    </button>
                    <button className="text-blue-500 hover:text-blue-700">
                      <FaEye />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <FaTrash />
                    </button>
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

export default ViewRooms;
