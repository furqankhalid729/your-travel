import { FaPlus } from "react-icons/fa6";
import { Link } from "@inertiajs/react";

const tourData = [
  {
    id: "A101",
    location: {
      name: "Paris, France",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyf50FWjzCrVn17ybGwZDvkhyKsYDEexb4iw&s",
    },
    length: "04 Days",
    price: "$1200",
    type: "Luxury",
    totalSeats: 30,
    availableSeats: 10,
  },
  {
    id: "A102",
    location: {
      name: "Rome, Italy",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyf50FWjzCrVn17ybGwZDvkhyKsYDEexb4iw&s",
    },
    length: "03 Weeks",
    price: "$3000",
    type: "Deluxe",
    totalSeats: 50,
    availableSeats: 20,
  },
  {
    id: "A103",
    location: {
      name: "Tokyo, Japan",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyf50FWjzCrVn17ybGwZDvkhyKsYDEexb4iw&s",
    },
    length: "07 Days",
    price: "$2500",
    type: "Standard",
    totalSeats: 40,
    availableSeats: 15,
  },
  {
    id: "A104",
    location: {
      name: "Paris, France",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyf50FWjzCrVn17ybGwZDvkhyKsYDEexb4iw&s",
    },
    length: "04 Days",
    price: "$1200",
    type: "Luxury",
    totalSeats: 30,
    availableSeats: 10,
  },
  {
    id: "A105",
    location: {
      name: "Rome, Italy",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyf50FWjzCrVn17ybGwZDvkhyKsYDEexb4iw&s",
    },
    length: "03 Weeks",
    price: "$3000",
    type: "Deluxe",
    totalSeats: 50,
    availableSeats: 20,
  },
  {
    id: "A106",
    location: {
      name: "Tokyo, Japan",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyf50FWjzCrVn17ybGwZDvkhyKsYDEexb4iw&s",
    },
    length: "07 Days",
    price: "$2500",
    type: "Standard",
    totalSeats: 40,
    availableSeats: 15,
  },
];

const ViewTour = () => {
  return (
    <div className="p-3 lg:p-4">
      <div className="bg-white p-2 lg:p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-4xl text-[#808080]">Tours</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 lg:flex items-center gap-1">
            <Link
              href="/dashboard/tour-booking/steps"
              className="bg-[#bb8dd9] text-white px-2 py-2 rounded-lg"
            >
              Steps
            </Link>
            <Link
              href="/dashboard/tour-booking/view-location"
              className="bg-[#bb8dd9] text-white px-2 py-2 rounded-lg"
            >
              View Location
            </Link>
            <Link
              href="/dashboard/tour-booking/View-tour-booking"
              className="bg-[#bb8dd9] text-white px-2 py-2 rounded-lg"
            >
              View Tour Booking
            </Link>
            <Link
              href="/dashboard/tour-booking/add-tour-booking"
              className="flex items-center gap-1 bg-[#bb8dd9] text-white px-2 py-2 rounded-lg"
            >
              <FaPlus />
              Add Tour Booking
            </Link>
            <Link
              href="/dashboard/tour-booking/profile"
              className="bg-[#bb8dd9] text-white px-2 py-2 rounded-lg"
            >
              Tour BookingProfile
            </Link>
            <Link
              href="/dashboard/tour-booking/tour-draft"
              className="bg-[#bb8dd9] text-white px-2 py-2 rounded-lg"
            >
              Tour Draft
            </Link>
            <Link
              href="/dashboard/tour-booking/steps"
              className="flex items-center gap-1 bg-[#bb8dd9] text-white px-2 py-2 rounded-lg"
            >
              <FaPlus />
              Create New Tours
            </Link>
          </div>
        </div>
        <div className="rounded-lg border-t overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                {[
                  "ID",
                  "Location",
                  "Length",
                  "Price(per head)",
                  "Type",
                  "Total Seats",
                  "Available Seats",
                  "Action",
                ].map((header, index) => (
                  <th
                    key={index}
                    className="px-2 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {tourData.map((tour, index) => (
                <tr key={index}>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {tour.id}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm flex items-center gap-2">
                    <img
                      src={tour.location.img}
                      alt={tour.location.name}
                      className="w-8 h-8 rounded-md object-cover"
                    />
                    <span className="text-[#cb92f1] underline">
                      {tour.location.name}
                    </span>
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {tour.length}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {tour.price}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {tour.type}
                  </td>
                  <td className="px-10 py-4 whitespace-nowrap text-sm text-gray-500">
                    {tour.totalSeats}
                  </td>
                  <td className="px-12 py-4 whitespace-nowrap text-sm text-gray-500">
                    {tour.availableSeats}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm">
                    <button className="text-[#e0b0ff] underline">
                      View Details
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

export default ViewTour;
