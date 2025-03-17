import { Link } from "@inertiajs/react";
import {
  FaArrowLeft,
  FaSnowflake,
  FaCarSide,
  FaLanguage,
  FaUser,
} from "react-icons/fa";

const ViewCar = ({ car }) => {
  console.log(car)
  const images = JSON.parse(car.car_images);
  return (
    <div className="m-3 lg:m-6">
      <div className="flex justify-between items-center bg-white p-2 rounded-lg shadow">
        <Link
          href="/dashboard/car-booking"
          className="flex items-center text-gray-600 hover:text-gray-800"
        >
          <FaArrowLeft className="mr-2" />
          <span>Back</span>
        </Link>
        <span></span>
      </div>
      <div className="p-6 rounded-lg shadow">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-2/5 p-4">
            <div className="rounded-lg overflow-hidden">
              <img
                src={`/storage/${images[0]}`}
                alt={car.car_name}
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
            </div>
            <h1 className="text-center">
              <span className="text-2xl py-2 px-4 bg-[#2e2532] font-bold text-white my-2">
                {car.car_name}
              </span>
            </h1>
            <div className="mt-4 text-lg text-center">Economy</div>
            <div className="mt-4 space-y-2">
              {car.features.map((item, index) => (
                <div className="flex items-center gap-2">
                  <item.icon className="text-[#bb8dd9]" />
                  <span>{item.name}</span>
                </div>

              ))}
              
            </div>
          </div>
          <div className="lg:w-3/5 bg-white p-6 rounded-lg shadow text-gray-800">
            <h2 className="text-xl font-semibold mb-4">
              Audi E-tron GT XR Details
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <p className="text-sm">
                <strong>Brand:</strong>
                <p className="mt-2 border p-1 rounded-lg text-gray-500">{car.brand}</p>
              </p>
              <p className="text-sm">
                <strong>Model:</strong>
                <p className="mt-2 border p-1 rounded-lg text-gray-500">
                  {car.model}
                </p>
              </p>
              <p className="text-sm">
                <strong>Fuel:</strong>
                <p className="mt-2 border p-1 rounded-lg text-gray-500">{car.fuel}</p>
              </p>
              <p className="text-sm">
                <strong>Car No.:</strong>
                <p className="mt-2 border p-1 rounded-lg text-gray-500">
                  {car.car_number}
                </p>
              </p>
              <p className="text-sm">
                <strong>Transmission:</strong>
                <p className="mt-2 border p-1 rounded-lg text-gray-500">

                  {car.transmission}
                </p>
              </p>
              <p className="text-sm">
                <strong>Capacity:</strong>
                <p className="mt-2 border p-1 rounded-lg text-gray-500">
                  {car.capacity}
                </p>
              </p>
              <p className="text-sm">
                <strong>Status:</strong>
                <p className="mt-2 border p-1 rounded-lg text-gray-500">
                  {car.status}
                </p>
              </p>
              <p className="text-sm">
                <strong>Price (per day):</strong>
                <p className="mt-2 border p-1 rounded-lg text-gray-500">{car.price}</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCar;
