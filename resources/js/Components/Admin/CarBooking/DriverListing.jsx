import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "@inertiajs/react";
import DeleteModal from "@/Components/deleteModal";
import { useState } from "react";
import axios from "axios";

const DriverListing = ({ drivers }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [driversData, setDriversData] = useState(drivers);

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
      const response = await axios.delete(route('driver.delete', { id }));
      console.log(response.data.message);
      setDriversData((prevItems) => prevItems.filter((item) => item.id !== id));
      closeModal();
    } catch (error) {
      console.error("Error deleting item:", error.response?.data?.message || error.message);
    }
    closeModal();
  };

  return (
    <>
      <div className="p-2 md:p-4 m-2 md:m-6 bg-white md:min-h-screen">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-semibold text-[#808080]">Driver List</h2>
          <Link href={route('driver.create')} className="bg-[#bb8dd9] text-white px-4 py-2 rounded-lg ">
            Add New Driver
          </Link>
        </div>
        <div className="p-3 bg-white rounded-lg shadow overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                {[
                  "ID",
                  "Name",
                  "Email",
                  "Contact",
                  "Identity No",
                  "License No",
                  "License Cate",
                  "Status",
                  "Action",
                ].map((header, idx) => (
                  <th
                    key={idx}
                    className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {driversData.map((driver, index) => (
                <tr key={driver.id}>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-[#808080]">
                    {index + 1}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-[#808080]">
                    {driver.name}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-[#808080]">
                    {driver.email}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-[#808080]">
                    {driver.contact_no}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-[#808080]">
                    {driver.identity_no}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-[#808080]">
                    {driver.license_no}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-[#808080]">
                    {driver.license_category}
                    {/* {driver.licenseCategory.split(" ").map((word, index) => (
                      <>
                        {index > 0 && <br />}
                        {word}
                      </>
                    ))} */}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-900">
                    <span
                      className={`rounded-xl inline-block px-2 py-[2px] text-sm ${driver.status === "active"
                        ? "bg-green-100 text-green-800"
                        : "bg-[#f5a7ab] text-[#e30510]"
                        }`}
                    >
                      {driver.status}
                    </span>
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm flex space-x-2">
                    <Link href={route('driver.edit', driver.id)} className="text-green-500">
                      <FaEdit />
                    </Link>
                    <button className="text-blue-500 px-1">
                      <FaEye />
                    </button>
                    <button onClick={() => openModal(driver.id)} className="text-red-500">
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

export default DriverListing;
