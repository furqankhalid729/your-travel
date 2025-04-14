import { FaEye, FaPlus, FaTrash } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import DeleteModal from "../../../Components/deleteModal";

const ViewTourBooking = ({ allBooking }) => {
  const [bookings, setBookings] = useState(allBooking);
  const [modalOpen, setModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  console.log(allBooking);
  const openModal = (id) => {
    console.log(id)
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
      setBookings((prevItems) => prevItems.filter((item) => item.MainID !== id));
      closeModal();
    } catch (error) {
      console.error("Error deleting item:", error.response?.data?.message || error.message);
    }
    closeModal();
  };
  // const navigate = useNavigate();
  return (
    <div className="my-5">
      <div className="mx-6 p-5 bg-white min-h-screen">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl lg:text-4xl text-[#808080]">
            View Tour Bookings
          </h2>
          <div className="flex items-center gap-2">
            <Link
              href="/dashboard/tour-booking/view-tour"
              className="flex items-center gap-1 bg-[#bb8dd9] text-white px-3 py-2 rounded-lg"
            >
              <FaPlus />
              View Tours
            </Link>
            <Link
              href="/dashboard/tour-booking/add-tour"
              className="flex items-center gap-1 bg-[#bb8dd9] text-white px-3 py-2 rounded-lg"
            >
              <FaPlus />
              Add New Tour
            </Link>
            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-md">
              <MdDateRange className="text-gray-500" />
              <select className="bg-transparent focus:outline-none text-sm text-gray-600">
                <option value="">Select Date</option>
                <option value="2024-11-01">2024-11-01</option>
                <option value="2024-11-15">2024-11-15</option>
              </select>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-x-auto  max-w-[1200px]">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="border-t">
              <tr>
                {[
                  "ID",
                  "Name",
                  "Email",
                  "Type",
                  "Members",
                  "Price",
                  "Status",
                  "Action",
                ].map((header, index) => (
                  <th
                    key={index}
                    className="px-4 py-3 text-left text-xs font-semibold tracking-wider whitespace-nowrap"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {bookings.map((tour, index) => (
                <tr key={index}>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {tour.MainID}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 font-semibold">
                    {tour.name}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {tour.email}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {tour.type}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {tour.members}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {tour.price}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${tour.status === "Booked"
                        ? "bg-[#2e2532] text-[#b38dcb]"
                        : "bg-[#f5a7ab] text-[#ea424a]"
                        }`}
                    >
                      {tour.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm flex gap-2">
                    <Link href={route('tour.booking.show', tour.MainID)} className="text-red-500">
                      <FaEye />
                    </Link>
                    {/* <button className="text-blue-500">
                      <FaEdit />
                    </button> */}
                    <button onClick={() => openModal(tour.MainID)} className="text-red-500">
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

export default ViewTourBooking;
