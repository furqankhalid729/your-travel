import { FaArrowLeft, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "@inertiajs/react";
import DeleteModal from "../../../Components/deleteModal";
import { useState } from "react";

const AllHotelBooking = ({ allBooking }) => {
  // const navigate = useNavigate();
  console.log(allBooking)
  const [modalOpen, setModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [allBookings, setAllBookings] = useState(allBooking);

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
      const response = await axios.delete(route('booking.delete', { id }));
      console.log(response.data.message);
      setAllBookings((prevItems) => prevItems.filter((item) => item.id !== id));
      closeModal();
    } catch (error) {
      console.error("Error deleting item:", error.response?.data?.message || error.message);
    }
    closeModal();
  };

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
        <div className="rounded-lg border-t overflow-x-auto  max-w-[1200px]">
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
              {allBookings.map((booking, index) => (
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
                      href={route('hotelbooking.show', booking.booking_id)}
                      className="text-blue-500 px-1"
                    >
                      <FaEye />
                    </Link>
                    <button onClick={() => openModal(booking.booking_id)} className="text-red-500">
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
    </div>
  );
};

export default AllHotelBooking;
