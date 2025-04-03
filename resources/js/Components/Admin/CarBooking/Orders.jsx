import {FaEye } from "react-icons/fa";
import { useState } from "react";
import { Link, router } from "@inertiajs/react";
import { RiDeleteBinLine } from "react-icons/ri";
import DeleteModal from "../../../Components/deleteModal";

const Orders = ({ activeBooking }) => {
  console.log(activeBooking);
  const [modalOpen, setModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [bookings,setBooking] = useState(activeBooking);

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
      setBooking((prevItems) => prevItems.filter((item) => item.id !== id));
      closeModal();
    } catch (error) {
      console.error("Error deleting item:", error.response?.data?.message || error.message);
    }
    closeModal();
  };

  return (
    <div className="md:min-h-screen p-10">
      <div className="flex justify-between items-center my-2">
        <h2 className="text-3xl font-semibold text-[#808080]">Orders</h2>
      </div>
      <div className="p-3 bg-white rounded-lg shadow overflow-x-auto  max-w-[1200px]">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              {[
                "ID",
                "Cars",
                "From",
                "To",
                "Price",
                "First Name",
                "Last Name",
                "Email",
                "Status",
                "Action",
              ].map((header, index) => (
                <th
                  key={index}
                  className="px-2 py-3 text-left text-xs font-medium text-black uppercase tracking-wider whitespace-nowrap"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {bookings.map((order, index) => {
              const additionalInfo = JSON.parse(JSON.parse(order.additional_info));
              return (
                <tr key={index}>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-[#808080]">
                    {order.mainID}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-[#808080]">
                    <span className="inline-block px-2 py-1 bg-[#e0b0ff] text-[#808080]">
                      {order.name}
                    </span>
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-[#808080]">
                    {additionalInfo.pickup_location}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-[#808080]">
                    {additionalInfo.dropout_location}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-[#808080]">
                    {order.price}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-[#808080]">
                    {order.first_name}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-[#808080]">
                    {order.last_name}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-[#808080]">
                    {order.email}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-[#808080] capitalize">
                    {order.status}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm flex space-x-2">

                    <Link href={route('order.assignrider', order.mainID)} className="text-blue-500 px-1">
                      <FaEye />
                    </Link>

                    <button onClick={() => openModal(order.mainID)}>
                      <RiDeleteBinLine />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
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

export default Orders;
