import { FaEdit, FaEye, FaPlus, FaTrash } from "react-icons/fa";
import { Link } from "@inertiajs/react";

const carsData = [
  {
    no: 1,
    name: "Toyota Corolla",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSY37yfcGshiDhLG5qQ_6xT3EgxbTlPor-Sw&s",
    brand: "Toyota",
    number: "ABC-1234",
    fuel: "Petrol",
    transmission: "Automatic",
    capacity: "4 Seats",
    license: "B",
    price: "$50/day",
    status: "Available",
  },
  {
    no: 2,
    name: "Honda Civic",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSY37yfcGshiDhLG5qQ_6xT3EgxbTlPor-Sw&s",
    brand: "Honda",
    number: "XYZ-5678",
    fuel: "Petrol",
    transmission: "Manual",
    capacity: "4 Seats",
    license: "B",
    price: "$45/day",
    status: "Unavailable",
  },
  {
    no: 3,
    name: "Tesla Model S",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSY37yfcGshiDhLG5qQ_6xT3EgxbTlPor-Sw&s",
    brand: "Tesla",
    number: "TES-2023",
    fuel: "Electric",
    transmission: "Automatic",
    capacity: "4 Seats",
    license: "A",
    price: "$80/day",
    status: "Available",
  },
  {
    no: 4,
    name: "Ford Ranger",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSY37yfcGshiDhLG5qQ_6xT3EgxbTlPor-Sw&s",
    brand: "Ford",
    number: "FOR-9090",
    fuel: "Diesel",
    transmission: "Manual",
    capacity: "4 Seats",
    license: "C",
    price: "$60/day",
    status: "Unavailable",
  },
  {
    no: 5,
    name: "BMW X5",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSY37yfcGshiDhLG5qQ_6xT3EgxbTlPor-Sw&s",
    brand: "BMW",
    number: "BMW-5555",
    fuel: "Petrol",
    transmission: "Automatic",
    capacity: "4 Seats",
    license: "D",
    price: "$100/day",
    status: "Available",
  },
];

const CarsListing = () => {
  return (
    <div className="p-4 bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-semibold text-[#808080]">Car List</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:flex gap-2">
          <Link
            href="/dashboard/car-booking/cars-collection"
            className="bg-[#bb8dd9] text-white px-2 py-2 rounded-lg "
          >
            Cars Collection
          </Link>
          <Link
            href="/dashboard/car-booking/view-car"
            className="bg-[#bb8dd9] text-white px-2 py-2 rounded-lg "
          >
            View Car
          </Link>
          <Link
            href="/dashboard/car-booking/driver-profile"
            className="bg-[#bb8dd9] text-white px-2 py-2 rounded-lg "
          >
            Driver Profile
          </Link>
          <Link
            href="/dashboard/car-booking/book-ride-assign-drivers"
            className="bg-[#bb8dd9] text-white px-2 py-2 rounded-lg "
          >
            BookRide Assign Drivers
          </Link>
          <Link
            href="/dashboard/car-booking/book-car-assign-drivers"
            className="bg-[#bb8dd9] text-white px-2 py-2 rounded-lg "
          >
            BookCar Assign Drivers
          </Link>
          <Link
            href="/dashboard/car-booking/add-car"
            className="flex items-center gap-1 bg-[#bb8dd9] text-white px-2 py-2 rounded-lg "
          >
            <FaPlus />
            Add New Cars
          </Link>
        </div>
      </div>
      <div className="rounded-lg border-t overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              {[
                "No",
                "Car Name",
                "Brand",
                "Car Number",
                "Fuel",
                "Transmission",
                "Capacity",
                "License",
                "Price",
                "Status",
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
            {carsData.map((car, index) => (
              <tr key={index}>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                  {car.no}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm flex items-center gap-1">
                  <img
                    src={car.img}
                    alt={car.name}
                    className="w-5 h-4 rounded-md object-cover"
                  />
                  <span className="text-gray-500">{car.name}</span>
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                  {car.brand}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                  {car.number}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                  {car.fuel}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                  {car.transmission}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                  {car.capacity}
                </td>
                <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-500">
                  {car.license}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                  {car.price}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                  {car.status}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm flex space-x-2">
                  <button className="text-green-500">
                    <FaEdit />
                  </button>
                  <button className="text-blue-500 px-1">
                    <FaEye />
                  </button>
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

export default CarsListing;
