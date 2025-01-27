import { FaEdit, FaEye, FaPlus, FaTrash } from "react-icons/fa";
import { Link, usePage } from "@inertiajs/react";
import DeleteModal from "@/Components/deleteModal";
import { useState } from "react";

const CarsListing = ({ cars }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const { appUrl } = usePage().props;
  
  const openModal = (id) => {
    setItemToDelete(id);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setItemToDelete(null);
  };

  const deleteItem = (id) => {
    console.log(`Deleting item with ID: ${id}`);
    closeModal();
  };
  return (
    <>
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
                  // "License",
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
              {cars.map((car, index) => (
                <tr key={index}>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {index + 1}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm flex items-center gap-1">
                    {car.car_images && car.car_images.length > 0 ? (
                      <img
                        src={`/storage/${car.car_images[0].replace(/\\/g, '')}`}
                        alt="Car"
                        className="w-16 h-16 object-cover rounded-md"
                      />
                    ) : (
                      <span className="text-gray-500">No Image Available</span>
                    )}
                    <span className="text-gray-500">{car.car_name}</span>
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {car.brand}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {car.car_number}
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
                  {/* <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-500">
                    {car.license}
                  </td> */}
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {car.price}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm">
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full font-medium ${car.status === "available"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                        }`}
                    >
                      {car.status}
                    </span>
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm flex space-x-2">
                    <Link href={route('car.edit',car.id)} className="text-green-500">
                      <FaEdit />
                    </Link>
                    <button className="text-blue-500 px-1">
                      <FaEye />
                    </button>
                    <button className="text-red-500" onClick={() => openModal(car.id)}>
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <DeleteModal
        isOpen={modalOpen}
        onClose={closeModal}
        onSubmit={deleteItem}
        itemId={itemToDelete}
      />
    </>
  );
};

export default CarsListing;
