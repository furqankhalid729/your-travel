import { FaArrowLeft, FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "@inertiajs/react";
import DeleteModal from "../../../Components/deleteModal";
import { useState } from "react";
import axios from "axios";

const AllHotels = ({ hotels }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [hotelItems, setHotelItems] = useState(hotels);

  const openModal = (id) => {
    setItemToDelete(id);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setItemToDelete(null);
  };

  const deleteItem = async (id) => {
    console.log(`Deleting item with ID: ${id}`);
    try {
      const response = await axios.delete(route('hotelRoom.delete', { id }));
      console.log(response.data.message);
      setHotelItems((prevItems) => prevItems.filter((item) => item.id !== id));
      closeModal();
    } catch (error) {
      console.error("Error deleting item:", error.response?.data?.message || error.message);
    }
    closeModal();
  };

  return (
    <>
      <div className="p-4 bg-white">
        <Link
          href="/dashboard/hotel-booking"
          className="m-4 flex items-center text-gray-600 hover:text-gray-800"
        >
          <FaArrowLeft className="mr-2" />
          <span>Back</span>
        </Link>
        <h1 className="text-2xl text-[#808080] mb-4">All Hotels</h1>
        <div className="rounded-lg border-t overflow-x-auto  max-w-[1200px]">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                {[
                  "ID",
                  "Hotel Name",
                  "Location",
                  "Tour Type",
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
              {hotelItems.map((hotel, index) => (
                <tr key={index}>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {index+1}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {hotel.name}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {hotel.location}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {hotel.tour_type}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {hotel.price}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    4.2
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-base flex space-x-2">
                    <Link
                      href={route("hotel.edit", hotel.id)}
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
                    <button
                      className="text-red-500"
                      onClick={() => openModal(hotel.id)}
                    >
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
        onSubmit={() => deleteItem(itemToDelete)}
        itemId={itemToDelete}
      />
    </>
  );
};

export default AllHotels;