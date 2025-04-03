import { FaArrowLeft, FaPlus } from "react-icons/fa6";
import { Link} from "@inertiajs/react";
// import { useNavigate } from "react-router-dom";

const carData = [
  {
    id: "01",
    carName: {
      name: "Tesla Model S",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSY37yfcGshiDhLG5qQ_6xT3EgxbTlPor-Sw&s",
    },
    brand: "Tesla",
    carNumber: "ABC1234",
    fuel: "Electric",
    transmission: "Automatic",
    capacity: "5 Seats",
    licenseCategory: "Luxury",
    status: "Available",
  },
  {
    id: "02",
    carName: {
      name: "BMW X5",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSY37yfcGshiDhLG5qQ_6xT3EgxbTlPor-Sw&s",
    },
    brand: "BMW",
    carNumber: "XYZ5678",
    fuel: "Petrol",
    transmission: "Automatic",
    capacity: "7 Seats",
    licenseCategory: "Deluxe",
    status: "Booked",
  },
  {
    id: "03",
    carName: {
      name: "Audi Q7",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSY37yfcGshiDhLG5qQ_6xT3EgxbTlPor-Sw&s",
    },
    brand: "Audi",
    carNumber: "LMN3456",
    fuel: "Diesel",
    transmission: "Manual",
    capacity: "5 Seats",
    licenseCategory: "Standard",
    status: "Available",
  },
  {
    id: "04",
    carName: {
      name: "Tesla Model S",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSY37yfcGshiDhLG5qQ_6xT3EgxbTlPor-Sw&s",
    },
    brand: "Tesla",
    carNumber: "ABC1234",
    fuel: "Electric",
    transmission: "Automatic",
    capacity: "5 Seats",
    licenseCategory: "Luxury",
    status: "Available",
  },
  {
    id: "05",
    carName: {
      name: "BMW X5",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSY37yfcGshiDhLG5qQ_6xT3EgxbTlPor-Sw&s",
    },
    brand: "BMW",
    carNumber: "XYZ5678",
    fuel: "Petrol",
    transmission: "Automatic",
    capacity: "7 Seats",
    licenseCategory: "Deluxe",
    status: "Booked",
  },
  {
    id: "06",
    carName: {
      name: "Audi Q7",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSY37yfcGshiDhLG5qQ_6xT3EgxbTlPor-Sw&s",
    },
    brand: "Audi",
    carNumber: "LMN3456",
    fuel: "Diesel",
    transmission: "Manual",
    capacity: "5 Seats",
    licenseCategory: "Standard",
    status: "Available",
  },
];

const CarsCollection = () => {
  // const navigate = useNavigate();
  return (
    <div>
        <Link
          href="/dashboard/car-booking"
          // onClick={() => navigate(-1)}
          className="flex items-center p-3 text-gray-600 hover:text-gray-800"
        >
          <FaArrowLeft className="mr-2" />
          <span>Back</span>
        </Link>
      <div className="px-4 md:px-7">
        <div className="bg-white p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-4xl text-[#808080]">Cars List</h2>
            <div className="flex items-center gap-2">
              <Link
                href="/dashboard/car-booking/add-car"
                className="flex items-center gap-1 bg-[#bb8dd9] text-white px-4 py-2 rounded-lg "
              >
                <FaPlus />
                Add New Car
              </Link>
              <Link
                href="/dashboard/car-booking/assign-drivers"
                className="flex items-center gap-1 bg-[#bb8dd9] text-white px-4 py-2 rounded-lg "
              >
                <FaPlus />
                Assign Drivers
              </Link>
            </div>
          </div>
          <div className="rounded-lg border-t overflow-x-auto  max-w-[1200px]">
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
                    "License Category",
                    "Status",
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
                {carData.map((car) => (
                  <tr key={car.id}>
                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                      {car.id}
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-sm flex items-center gap-2">
                      <img
                        src={car.carName.img}
                        alt={car.carName.name}
                        className="w-6 h-6 rounded-md object-cover"
                      />
                      <span className="text-gray-500">{car.carName.name}</span>
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                      {car.brand}
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                      {car.carNumber}
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
                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                      {car.licenseCategory}
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                      {car.status}
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-sm">
                      <button className="text-gray-500 underline">
                        Assign Driver
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsCollection;
