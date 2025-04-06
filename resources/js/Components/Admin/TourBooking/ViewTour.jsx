import { FaEdit, FaEye, FaPlus, FaTrash } from "react-icons/fa";
import DeleteModal from "../../../Components/deleteModal";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import axios from "axios";

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

const ViewTour = ({ tours }) => {
  console.log(tours);
  const [tourData, setTourData] = useState(tours);
  const [modalOpen, setModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

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
      const response = await axios.delete(route('tour.delete', { id }));
      console.log(response.data.message);
      setTourData((prevItems) => prevItems.filter((item) => item.id !== id));
      closeModal();
    } catch (error) {
      console.error("Error deleting item:", error.response?.data?.message || error.message);
    }
    closeModal();
  };

  return (
    <>
      <div className="p-3 lg:p-4">
        <div className="bg-white p-2 lg:p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-4xl text-[#808080]">Tours</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 lg:flex items-center gap-1">
              {/* <Link
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
              </Link> */}
              <Link
                href={route('tour.create')}
                className="flex items-center gap-1 bg-[#bb8dd9] text-white px-2 py-2 rounded-lg"
              >
                <FaPlus />
                Create New Tours
              </Link>
            </div>
          </div>
          <div className="rounded-lg border-t overflow-x-auto  max-w-[1200px]">
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
                {tourData.length > 0 ? (
                  tourData.map((tour, index) => {
                    const tourImages = tour.tour_images ? JSON.parse(tour.tour_images) : [];

                    return (
                      <tr key={index}>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                          {tour.id}
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm flex items-center gap-2">
                          <img
                            src={tourImages.length > 0 ? `/storage/${tourImages[0].replace(/\\/g, '')}` : ""}
                            alt={tour.location.name}
                            className="w-12 h-12 rounded-md object-cover"
                          />
                          <span className="text-[#cb92f1] underline">{tour.name}</span>
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                          {tour.duration}
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                          {tour.price}
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                          {tour.tour_type}
                        </td>
                        <td className="px-10 py-4 whitespace-nowrap text-sm text-gray-500">
                          {tour.persons}
                        </td>
                        <td className="px-12 py-4 whitespace-nowrap text-sm text-gray-500">
                          {tour.availableSeats}
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm">
                          <div className="flex space-x-2">
                            <Link href={route('tour.booking.show', tour.id)} target="_blank"
                              rel="noopener noreferrer" className="text-red-500">
                              <FaEye />
                            </Link>
                            <Link href={route('tour.edit', tour.id)} className="text-green-500">
                              <FaEdit />
                            </Link>
                            <button className="text-red-500" onClick={() => openModal(tour.id)}>
                              <FaTrash />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center py-4 text-gray-500">
                      No Tour Found
                    </td>
                  </tr>
                )}
              </tbody>

            </table>
          </div>
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

export default ViewTour;
