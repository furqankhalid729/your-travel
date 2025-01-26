import { Link } from "@inertiajs/react";
import { useState } from "react";
import { useForm } from "@inertiajs/react"; // Correct import
import { FaSnowflake, FaCarSide, FaLanguage, FaUser, FaSave } from "react-icons/fa";
// import user from "../../assets/user.png";
// import car from "../../assets/car.png";
import { MdOutlineArrowBackIos } from "react-icons/md";
// import { useNavigate } from "react-router-dom";

const AddDriver = () => {
    // const navigate = useNavigate();
    const [profileImage, setProfileImage] = useState(null);

    const { data, setData, post, processing, errors } = useForm({
        profile_image: null,
        name: "",
        identity_number: "",
        email: "",
        contact_no: "",
        license_no: "",
        license_category: "",
        experience: "",
    });

    // Handel input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setProfileImage(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("identity_no", data.identity_no);
        formData.append("email", data.email);
        formData.append("contact_no", data.contact_no);
        formData.append("license_no", data.license_no);
        formData.append("license_category", data.license_category);
        formData.append("experience", data.experience);
        formData.append("profile_image", profileImage);
        // Log the FormData entries
        for (let [key, value] of formData.entries()) {
            console.log(`${key}:`, value);
        }

        // try {
        //     await post("/api/car/add-driver", formData, {
        //         onSuccess: () => {
        //             setMessage("driver added successfully!");
        //         },
        //     });
        // } catch (error) {
        //     console.error("Error while adding driver:", error);
        //     setMessage("An error occurred while adding the driver.");
        // }

    };

    const fakeData = [
        {
            transaction: "TXN123456",
            amount: "$120.00",
            date: "23-11-2024",
            status: "Approved",
        },
        {
            transaction: "TXN654321",
            amount: "$85.00",
            date: "22-11-2024",
            status: "Pending",
        },
        {
            transaction: "TXN987654",
            amount: "$250.00",
            date: "21-11-2024",
            status: "Approved",
        },
        {
            transaction: "TXN321987",
            amount: "$50.00",
            date: "20-11-2024",
            status: "Pending",
        },
        {
            transaction: "TXN456789",
            amount: "$400.00",
            date: "19-11-2024",
            status: "Approved",
        },
    ];

    return (
        <div>
            {/* header section */}
            <div className="bg-white flex justify-between items-center mb-6">
                <Link
                    href="/dashboard/car-booking"
                    // onClick={() => navigate(-1)}
                    className="text-gray-500 hover:text-gray-700 p-3"
                >
                    <MdOutlineArrowBackIos size={20} />
                </Link>
                <button
                    type="submit"
                    form="driverForm"
                    className="flex items-center bg-[#e4baff] text-white px-4 py-2 rounded-md hover:bg-[#d19aed]"
                >
                    <FaSave className="mr-2" />
                    Save
                </button>
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-5 rounded-lg shadow-lg px-6 pb-10">
                <div className="lg:w-1/3 p-6 bg-white">
                    <p className="text-right p-3">
                        <span className="bg-[#2e2532] text-gray-400 px-1 text-sm rounded-full">
                            Booked
                        </span>
                    </p>
                    {/* Profile Image */}
                    <div className="flex flex-col items-center p-4">
                        <div className="relative w-32 h-32 rounded-full mb-4 flex items-center justify-center bg-gray-200 text-gray-500">
                            {profileImage ? (
                                <img
                                    src={profileImage}
                                    alt="User"
                                    className="w-32 h-32 rounded-full object-cover"
                                />
                            ) : (
                                <span className="text-sm">Choose Profile Pic</span>
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="absolute inset-0 opacity-0 cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
                <div className="lg:w-2/3 p-7 bg-white">
                    <form id="driverForm" onSubmit={handleSubmit}>
                        <h3 className="text-xl border-b pb-2 font-semibold text-gray-800 mb-4">
                            Personal Information
                        </h3>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div>
                                <h1 className="block text-sm font-medium">Name</h1>
                                <input
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded-lg w-full focus:outline-none"
                                />
                            </div>
                            <div>
                                <h1 className="block text-sm font-medium">Identity Number</h1>
                                <input
                                    type="text"
                                    name="identity_no"
                                    value={data.identity_no}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded-lg w-full focus:outline-none"
                                />
                            </div>
                            <div>
                                <h1 className="block text-sm font-medium">Email</h1>
                                <input
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded-lg w-full focus:outline-none"
                                />
                            </div>
                            <div>
                                <h1 className="block text-sm font-medium">Contact No</h1>
                                <input
                                    type="text"
                                    name="contact_no"
                                    value={data.contact_no}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded-lg w-full focus:outline-none"
                                />
                            </div>
                            <div>
                                <h1 className="block text-sm font-medium">License No.</h1>
                                <input
                                    type="text"
                                    name="license_no"
                                    value={data.license_no}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded-lg w-full focus:outline-none"
                                />
                            </div>
                            <div>
                                <h1 className="block text-sm font-medium">License Category</h1>
                                <input
                                    type="text"
                                    name="license_category"
                                    value={data.license_category}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded-lg w-full focus:outline-none"
                                />
                            </div>
                            <div>
                                <h1 className="block text-sm font-medium">Experience</h1>
                                <input
                                    type="text"
                                    name="experience"
                                    value={data.experience}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded-lg w-full focus:outline-none"
                                />
                            </div>
                        </div>
                    </form>
                    {/* payment table */}
                    <div className="bg-white shadow rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full border-collapse border border-gray-200">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border border-gray-300 px-4 py-2 text-left">
                                            Transaction
                                        </th>
                                        <th className="border border-gray-300 px-4 py-2 text-center">
                                            Amount
                                        </th>
                                        <th className="border border-gray-300 px-4 py-2 text-center">
                                            Date
                                        </th>
                                        <th className="border border-gray-300 px-4 py-2 text-center">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {fakeData.map((data, index) => (
                                        <tr key={index} className="hover:bg-gray-50">
                                            <td className="border border-gray-300 px-4 py-2">
                                                {data.transaction}
                                            </td>
                                            <td className="border border-gray-300 text-center px-4 py-2">
                                                {data.amount}
                                            </td>
                                            <td className="border border-gray-300 text-center px-4 py-2">
                                                {data.date}
                                            </td>
                                            <td className="border border-gray-300 text-center px-2 py-3 font-medium">
                                                <span
                                                    className={`rounded-lg px-2 py-[3px] ${data.status === "Approved"
                                                        ? "bg-[#a6c3a6] text-[#005500]"
                                                        : "bg-[#d5a7a7] text-[#870305]"
                                                        }`}
                                                >
                                                    {data.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddDriver
