import { Link, useForm } from "@inertiajs/react";
import {
    FaArrowLeft,
    FaCheck,
    FaEdit,
    FaEye,
    FaParking,
    FaPlus,
    FaSave,
    FaSpa,
    FaSwimmingPool,
    FaTrash,
    FaTimes,
    FaUtensils,
    FaWifi,
} from "react-icons/fa";
import { useState } from "react";
import Modal from 'react-modal';

const iconMapping = {
    FaWifi: <FaWifi />,
    FaUtensils: <FaUtensils />,
    FaSpa: <FaSpa />,
    FaSwimmingPool: <FaSwimmingPool />,
    FaParking: <FaParking />,
};

const TypeIconMapping = {
    FaCheck: <FaCheck />,
    FaTimes: <FaTimes />,
};

const EditHotelBooking = ({ hotelRoom }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [typeModalOpen, setTypeModalOpen] = useState(false);
    const [roomModalOpen, setRoomModalOpen] = useState(false);
    const [newFacility, setNewFacility] = useState('');
    const [featureIcon, setFeatureIcon] = useState('FaWifi');
    const [newType, setNewType] = useState('');
    const [typeStatus, setTypeStatus] = useState('FaCheck');
    const [newRoom, setNewRoom] = useState({
        room_id: '',
        room_type: '',
        available_rooms: '',
        price: '',
    });
    const [editingRoomIndex, setEditingRoomIndex] = useState(null);
    const [facilities, setFacilities] = useState(Array.isArray(hotelRoom.facilities) ? hotelRoom.facilities : []);
    const [types, setTypes] = useState(Array.isArray(hotelRoom.types) ? hotelRoom.types : []);

    const { data, setData, put, processing, errors } = useForm({
        duration: hotelRoom.duration || '',
        location: hotelRoom.location || '',
        food: hotelRoom.food || '',
        tour_type: hotelRoom.tour_type || '',
        persons: hotelRoom.persons || '',
        price: hotelRoom.price || '',
        summary: hotelRoom.summary || '',
        types: types,
        facilities: facilities,
        rooms: Array.isArray(hotelRoom.rooms) ? hotelRoom.rooms : [],
        images: hotelRoom.images || {
            image1: '',
            image2: '',
            image3: '',
            image4: '',
            image5: '',
            image6: '',
        }
    });

    const [imagePreviews, setImagePreviews] = useState({
        image1: hotelRoom.images?.image1 || '',
        image2: hotelRoom.images?.image2 || '',
        image3: hotelRoom.images?.image3 || '',
        image4: hotelRoom.images?.image4 || '',
        image5: hotelRoom.images?.image5 || '',
        image6: hotelRoom.images?.image6 || '',
    });



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleImageChange = (e) => {
        const { id, files } = e.target;
        if (files.length > 0) {
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreviews((prevPreviews) => ({
                    ...prevPreviews,
                    [id]: reader.result,
                }));
                setData('images', {
                    ...data.images,
                    [id]: reader.result,
                });
            };
            reader.readAsDataURL(files[0]);
        }
    };

    const handleRemoveImage = (imageKey) => {
        setImagePreviews((prevPreviews) => ({
            ...prevPreviews,
            [imageKey]: '',
        }));
        setData('images', {
            ...data.images,
            [imageKey]: '',
        });
    };

    const handleFacilitiesAdd = () => {
        if (newFacility.trim() !== "") {
            const newFacilityObject = {
                name: newFacility,
                icon: featureIcon,
            };
            setFacilities([...facilities, newFacilityObject]);
            setNewFacility("");
            setIsModalOpen(false);
            setData("facilities", [...facilities, newFacilityObject]);
        }
    };

    const removeFacility = (index) => {
        const updatedFacilities = facilities.filter((_, i) => i !== index);
        setFacilities(updatedFacilities);
        setData("facilities", updatedFacilities);
    };

    const handleTypeAdd = () => {
        if (newType.trim() !== "") {
            const newTypeObject = {
                name: newType,
                icon: typeStatus,
            };
            setTypes([...types, newTypeObject]);
            setNewType("");
            setTypeModalOpen(false);
            setData("types", [...types, newTypeObject]);
        }
    };

    const removeType = (index) => {
        const updatedTypes = types.filter((_, i) => i !== index);
        setTypes(updatedTypes);
        setData("types", updatedTypes);
    };

    const handleRoomInputChange = (e) => {
        const { name, value } = e.target;
        setNewRoom((prevRoom) => ({
            ...prevRoom,
            [name]: value,
        }));
    };

    const handleAddRoom = () => {
        setData('rooms', [...data.rooms, newRoom]);
        setNewRoom({
            room_id: '',
            room_type: '',
            available_rooms: '',
            price: '',
        });
        setRoomModalOpen(false);
    };

    const handleEditRoom = (index) => {
        setNewRoom(data.rooms[index]);
        setEditingRoomIndex(index);
        setRoomModalOpen(true);
    };

    const handleUpdateRoom = () => {
        const updatedRooms = [...data.rooms];
        updatedRooms[editingRoomIndex] = newRoom;
        setData('rooms', updatedRooms);
        setNewRoom({
            room_id: '',
            room_type: '',
            available_rooms: '',
            price: '',
        });
        setEditingRoomIndex(null);
        setRoomModalOpen(false);
    };

    const handleDeleteRoom = (index) => {
        const updatedRooms = data.rooms.filter((_, i) => i !== index);
        setData('rooms', updatedRooms);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("hotelRooms.update", hotelRoom.id));
    };

    return (
        <div className="m-3 lg:m-5">
            <div className="space-y-3 mb-5 bg-white p-4">
                <div className="flex justify-between items-center">
                    <Link
                        href="/dashboard/hotel-booking/all-hotels"
                        className="flex items-center text-gray-600 hover:text-gray-800"
                    >
                        <FaArrowLeft className="mr-2" />
                        <span>Back</span>
                    </Link>
                    <div className="flex space-x-2">
                        <button className="flex items-center bg-[#e4baff] text-white px-3 py-1 rounded-md">
                            <FaEdit className="mr-1" />
                            Edit
                        </button>
                        <button onClick={handleSubmit} className="flex items-center bg-[#e4baff] text-white px-3 py-1 rounded-md">
                            <FaSave className="mr-1" />
                            Update
                        </button>
                    </div>
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">Luxury Room</h2>
                {/* images */}
                <div className="grid grid-cols-4 gap-4">
                    {/* Image 1 */}
                    <div className="col-span-2 row-span-2 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md">
                        {imagePreviews.image1 && (
                            <div className="relative">
                                <img
                                    src={imagePreviews.image1}
                                    alt="image1"
                                    className="object-cover rounded-md"
                                />
                                <button
                                    onClick={() => handleRemoveImage('image1')}
                                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
                                >
                                    X
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Image 2 */}
                    <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md">
                        {imagePreviews.image2 && (
                            <div className="relative">
                                <img
                                    src={imagePreviews.image2}
                                    alt="image2"
                                    className="object-cover rounded-md"
                                />
                                <button
                                    onClick={() => handleRemoveImage('image2')}
                                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
                                >
                                    X
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Map Image */}
                    <div className="relative">
                        <img
                            src="/storage/images/map.png"
                            alt="Map"
                            className="w-full h-auto rounded-md shadow"
                        />
                        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#e0bafb] rounded-lg text-white px-2 py-2">
                            Show on map
                        </button>
                    </div>

                    {/* Image 3 */}
                    <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md">
                        {imagePreviews.image3 && (
                            <div className="relative">
                                <img
                                    src={imagePreviews.image3}
                                    alt="image3"
                                    className="object-cover rounded-md"
                                />
                                <button
                                    onClick={() => handleRemoveImage('image3')}
                                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
                                >
                                    X
                                </button>
                            </div>
                        )}
                    </div>
                    {/* Details */}
                    <div className="bg-[#e6c0ff] p-4 rounded-md shadow row-span-2">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            Details
                        </h3>
                        <ul className="space-y-5">
                            <li className="flex justify-between items-center">
                                <span>Duration</span>
                                <input
                                    type="text"
                                    name="duration"
                                    value={data.duration}
                                    onChange={handleInputChange}
                                    className="bg-[#e6c0ff] rounded px-1 py-[2px]"
                                />
                            </li>
                            <li className="flex justify-between">
                                <span>Location</span>
                                <input
                                    type="text"
                                    name="location"
                                    value={data.location}
                                    onChange={handleInputChange}
                                    className="bg-[#e6c0ff] rounded px-1 py-[2px]"
                                />
                            </li>
                            <li className="flex justify-between">
                                <span>Food</span>
                                <input
                                    type="text"
                                    name="food"
                                    value={data.food}
                                    onChange={handleInputChange}
                                    className="bg-[#e6c0ff] rounded px-1 py-[2px]"
                                />
                            </li>
                            <li className="flex justify-between">
                                <span>Tour type</span>
                                <input
                                    type="text"
                                    name="tour_type"
                                    value={data.tour_type}
                                    onChange={handleInputChange}
                                    className="bg-[#e6c0ff] rounded px-1 py-[2px]"
                                />
                            </li>
                            <li className="flex justify-between">
                                <span>Person</span>
                                <input
                                    type="text"
                                    name="persons"
                                    value={data.persons}
                                    onChange={handleInputChange}
                                    className="bg-[#e6c0ff] rounded px-1 py-[2px]"
                                />
                            </li>
                            <li className="flex justify-between">
                                <span>Price</span>
                                <input
                                    type="text"
                                    name="price"
                                    value={data.price}
                                    onChange={handleInputChange}
                                    className="bg-[#e6c0ff] rounded px-1 py-[2px]"
                                />
                            </li>
                        </ul>
                    </div>
                    {/* Image 4 */}
                    <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md">
                        {imagePreviews.image4 && (
                            <div className="relative">
                                <img
                                    src={imagePreviews.image4}
                                    alt="image4"
                                    className="object-cover rounded-md"
                                />
                                <button
                                    onClick={() => handleRemoveImage('image4')}
                                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
                                >
                                    X
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Image 5 */}
                    <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md">
                        {imagePreviews.image5 && (
                            <div className="relative">
                                <img
                                    src={imagePreviews.image5}
                                    alt="image5"
                                    className="object-cover rounded-md"
                                />
                                <button
                                    onClick={() => handleRemoveImage('image5')}
                                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
                                >
                                    X
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Image 6 (Only Uploadable Image) */}
                    <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md">
                        <label htmlFor={"image6"} className="flex flex-col items-center cursor-pointer">
                            {imagePreviews.image6 ? (
                                <div className="relative">
                                    <img
                                        src={imagePreviews.image6}
                                        alt="Image 6 Preview"
                                        className="object-cover rounded-md"
                                    />
                                    <button
                                        onClick={() => handleRemoveImage('image6')}
                                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
                                    >
                                        X
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16V8a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 10.7a4.5 4.5 0 01-8 0M12 12v2" />
                                    </svg>
                                    <span className="text-gray-600 text-sm">Click to upload images</span>
                                </>
                            )}
                        </label>
                        <input
                            id={"image6"}
                            type="file"
                            accept="image/*"
                            multiple
                            className="hidden"
                            onChange={handleImageChange}
                        />
                    </div>
                </div>
                {/* Summary */}
                <h1 className="text-2xl font-semibold text-gray-800">Summary</h1>
                <textarea
                    name="summary"
                    value={data.summary}
                    onChange={handleInputChange}
                    placeholder="Add Summary"
                    rows="3"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"
                ></textarea>
                {/* Types */}
                <div className="flex justify-between pt-3">
                    <h1 className="text-2xl font-semibold text-gray-800">
                        Types
                    </h1>
                    <button
                        className="flex items-center gap-1 bg-[#bb8dd9] px-1 text-white rounded-lg"
                        onClick={() => setTypeModalOpen(true)}
                    >
                        <FaPlus />
                        Add Type
                    </button>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4">
                    {types.map((type, index) => (
                        <p key={index} className="flex items-center gap-2 p-4">
                            <span className="text-[#e4baff]">
                                {TypeIconMapping[type.icon] || <FaCheck />}
                            </span>
                            {type.name}
                            <button
                                onClick={() => removeType(index)}
                                className="text-red-500 ml-2"
                            >
                                ✖
                            </button>
                        </p>
                    ))}
                </div>
                {/* Facilities */}
                <div className="flex justify-between pt-3">
                    <h1 className="text-2xl font-semibold text-gray-800">Facilities</h1>
                    <button
                        className="flex items-center gap-1 bg-[#bb8dd9] px-1 text-white rounded-lg"
                        onClick={() => setIsModalOpen(true)}
                    >
                        <FaPlus />
                        Add Facilities
                    </button>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {facilities.map((feature, index) => (
                        <p key={index} className="flex items-center gap-2 p-4">
                            <span className="text-[#e4baff]">
                                {iconMapping[feature.icon] || <FaWifi className="mr-2" />}
                            </span>
                            {feature.name}
                            <button
                                onClick={() => removeFacility(index)}
                                className="text-red-500 ml-2"
                            >
                                ✖
                            </button>
                        </p>
                    ))}
                </div>
            </div>
            <div className="bg-white mt-6 p-4">
                <div className="flex justify-between items-center mb-4 pt-5">
                    <h2 className="text-2xl lg:text-4xl text-[#808080]">
                        Available Rooms
                    </h2>
                    <button
                        className="flex items-center gap-1 bg-[#bb8dd9] text-white px-2 py-2 rounded-lg"
                        onClick={() => setRoomModalOpen(true)}
                    >
                        <FaPlus />
                        Add More Rooms
                    </button>
                </div>
                <div className="bg-white rounded-lg overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                {['ID', 'Room Type', 'Available Rooms', 'Price', 'Action'].map((header, index) => (
                                    <th
                                        key={index}
                                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
                                    >
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {data.rooms.map((room, index) => (
                                <tr key={index}>
                                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">{room.room_id}</td>
                                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">{room.room_type}</td>
                                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">{room.available_rooms}</td>
                                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">${room.price}</td>
                                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <div className="flex items-center space-x-2">
                                            <button onClick={() => handleEditRoom(index)} className="text-green-500">
                                                <FaEdit />
                                            </button>
                                            <button className="text-blue-500 px-1">
                                                <FaEye />
                                            </button>
                                            <button onClick={() => handleDeleteRoom(index)} className="text-red-500">
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* models */}
            <div>
                {/* Modal for Adding facilities */}
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={() => setIsModalOpen(false)}
                    contentLabel="Add New facilities Modal"
                    className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-[400px] mx-auto mt-20"
                    overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                >
                    <h2 className="text-xl font-bold mb-4">Add New Facility</h2>

                    {/* Dropdown for Icons */}
                    <label htmlFor="icon-select" className="block text-gray-600 mb-2">
                        Select Icon:
                    </label>
                    <select
                        id="icon-select"
                        value={featureIcon}
                        onChange={(e) => setFeatureIcon(e.target.value)}
                        className="w-full border rounded-lg p-2 mb-4"
                    >
                        <option value="FaWifi">FaWifi</option>
                        <option value="FaUtensils">FaUtensils</option>
                        <option value="FaSpa">FaSpa</option>
                        <option value="FaSwimmingPool">FaSwimmingPool</option>
                        <option value="FaParking">FaParking</option>
                    </select>

                    {/* Input for Feature Name */}
                    <label htmlFor="Facility-name" className="block text-gray-600 mb-2">
                        Facility Name:
                    </label>
                    <input
                        id="Facility-name"
                        type="text"
                        value={newFacility}
                        onChange={(e) => setNewFacility(e.target.value)}
                        className="w-full border rounded-lg p-2 mb-4"
                        placeholder="Enter Facility name"
                    />

                    {/* Buttons */}
                    <div className="flex justify-end gap-4">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleFacilitiesAdd}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Save
                        </button>
                    </div>
                </Modal>
                {/* Modal for adding types type */}
                <Modal
                    isOpen={typeModalOpen}
                    onRequestClose={() => setTypeModalOpen(false)}
                    contentLabel="Add types Type"
                    className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-[400px] mx-auto mt-20"
                    overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                >
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Add Type</h2>
                    <input
                        type="text"
                        name="newType"
                        value={newType}
                        onChange={(e) => setNewType(e.target.value)}
                        placeholder="Type name"
                        className="w-full p-2 border border-gray-300 rounded-md mb-4"
                    />
                    <div className="flex space-x-2">
                        <button
                            onClick={() => setTypeStatus("FaCheck")}
                            className={`p-2 ${typeStatus === "FaCheck" ? "bg-[#bb8dd9]" : "bg-gray-300"} rounded-md`}
                        >
                            <FaCheck />
                        </button>
                        <button
                            onClick={() => setTypeStatus("FaTimes")}
                            className={`p-2 ${typeStatus === "FaTimes" ? "bg-[#bb8dd9]" : "bg-gray-300"} rounded-md`}
                        >
                            <FaTimes />
                        </button>
                    </div>
                    <button
                        onClick={handleTypeAdd}
                        className="mt-4 bg-[#bb8dd9] text-white p-2 rounded-md w-full"
                    >
                        Add Type
                    </button>
                </Modal>
                {/* Modal for Adding/Editing Rooms */}
                <Modal
                    isOpen={roomModalOpen}
                    onRequestClose={() => setRoomModalOpen(false)}
                    contentLabel="Add Room"
                    className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-[400px] mx-auto mt-20"
                    overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                >
                    <h2 className="text-xl font-semibold mb-4">{editingRoomIndex !== null ? 'Edit Room' : 'Add Room'}</h2>
                    <input
                        type="text"
                        name="room_id"
                        placeholder="Room ID"
                        value={newRoom.room_id}
                        onChange={handleRoomInputChange}
                        className="border p-2 mb-4 w-full"
                    />
                    <input
                        type="text"
                        name="room_type"
                        placeholder="Room Type"
                        value={newRoom.room_type}
                        onChange={handleRoomInputChange}
                        className="border p-2 mb-4 w-full"
                    />
                    <select
                        name="available_rooms"
                        value={newRoom.available_rooms}
                        onChange={handleRoomInputChange}
                        className="border p-2 mb-4 w-full"
                    >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={newRoom.price}
                        onChange={handleRoomInputChange}
                        className="border p-2 mb-4 w-full"
                    />
                    <button
                        className="bg-[#bb8dd9] text-white px-4 py-2 rounded-lg"
                        onClick={editingRoomIndex !== null ? handleUpdateRoom : handleAddRoom}
                    >
                        {editingRoomIndex !== null ? 'Update Room' : 'Add Room'}
                    </button>
                    <button className="bg-gray-500 text-white px-4 py-2 rounded-lg ml-2" onClick={() => setRoomModalOpen(false)}>
                        Cancel
                    </button>
                </Modal>
            </div>
        </div>
    )
}

export default EditHotelBooking
