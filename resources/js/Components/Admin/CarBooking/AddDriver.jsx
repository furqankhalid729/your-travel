import { Link } from "@inertiajs/react";
import { useState } from "react";
import { useForm } from "@inertiajs/react"; // Correct import
import { FaSave } from "react-icons/fa";
import { MdOutlineArrowBackIos } from "react-icons/md";

const AddDriver = () => {
    const [profileImage, setProfileImage] = useState(null);

    const { data, setData, post, processing, errors } = useForm({
        profile_image: null,
        name: "",
        identity_number: "",
        email: "",
        gender: "",
        contact_no: "",
        license_no: "",
        license_category: "",
        experience: "",
        status:"active"
    });
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
            const fileData = {
                file,
                url: URL.createObjectURL(file),
            };
            console.log(fileData)
            setData((prevData) => ({
                ...prevData,
                profile_image: fileData,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("identity_no", data.identity_no);
        formData.append("email", data.email);
        formData.append("gender", data.gender);
        formData.append("contact_no", data.contact_no);
        formData.append("license_no", data.license_no);
        formData.append("license_category", data.license_category);
        formData.append("experience", data.experience);
        formData.append("profile_image", profileImage);

        try {
            await post(route('driver.store'), formData, {
                onSuccess: () => {
                    alert("Driver added successfully!");
                },
            });
        } catch (error) {
            console.error("Error while adding driver:", error);
            alert("An error occurred while adding the driver.");
        }

    };
    return (
        <div>
            {/* header section */}
            <div className="m-6 p-2 bg-white flex justify-between items-center mb-6">
                <Link
                    href={route('driver.index')}
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
                            {data.profile_image?.url ? (
                                <img
                                    src={data.profile_image.url}
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
                            {/* name */}
                            <div>
                                <h1 className="block text-sm font-medium">Name</h1>
                                <input
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded-lg w-full focus:outline-none"
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>
                            {/* identity_no */}
                            <div>
                                <h1 className="block text-sm font-medium">Identity Number</h1>
                                <input
                                    type="text"
                                    name="identity_no"
                                    value={data.identity_no}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded-lg w-full focus:outline-none"
                                />
                                {errors.identity_no && <p className="text-red-500 text-sm mt-1">{errors.identity_no}</p>}
                            </div>
                            {/* email */}
                            <div>
                                <h1 className="block text-sm font-medium">Email</h1>
                                <input
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded-lg w-full focus:outline-none"
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>
                            {/* Gender */}
                            <div>
                                <h1 className="block text-sm font-medium">Gender</h1>
                                <select
                                    name="gender"
                                    value={data.gender || ""}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded-lg w-full focus:outline-none"
                                >
                                    <option value="" disabled>
                                        Select Gender
                                    </option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                                {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
                            </div>
                            {/* Contace_no */}
                            <div>
                                <h1 className="block text-sm font-medium">Contact No</h1>
                                <input
                                    type="text"
                                    name="contact_no"
                                    value={data.contact_no}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded-lg w-full focus:outline-none"
                                />
                                {errors.contact_no && <p className="text-red-500 text-sm mt-1">{errors.contact_no}</p>}
                            </div>
                            {/* license_no */}
                            <div>
                                <h1 className="block text-sm font-medium">License No.</h1>
                                <input
                                    type="text"
                                    name="license_no"
                                    value={data.license_no}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded-lg w-full focus:outline-none"
                                />
                                {errors.license_no && <p className="text-red-500 text-sm mt-1">{errors.license_no}</p>}
                            </div>
                            {/* license_category */}
                            <div>
                                <h1 className="block text-sm font-medium">License Category</h1>
                                <input
                                    type="text"
                                    name="license_category"
                                    value={data.license_category}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded-lg w-full focus:outline-none"
                                />
                                {errors.license_category && <p className="text-red-500 text-sm mt-1">{errors.license_category}</p>}
                            </div>
                            {/* experience */}
                            <div>
                                <h1 className="block text-sm font-medium">Experience</h1>
                                <input
                                    type="text"
                                    name="experience"
                                    value={data.experience}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded-lg w-full focus:outline-none"
                                />
                                {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
                            </div>
                            <div>
                                <h1 className="block text-sm font-medium">Status</h1>
                                <select
                                    name="status"
                                    value={data.status || ""}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded-lg w-full focus:outline-none"
                                >
                                    <option value="active">Active</option>
                                    <option value="disabled">Disabled</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddDriver
