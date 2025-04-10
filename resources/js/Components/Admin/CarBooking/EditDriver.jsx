import React, { useEffect, useState } from 'react';
import { Link, useForm } from "@inertiajs/react";
import { FaArrowLeft, FaSave } from 'react-icons/fa';

const EditDriver = ({ driver, cars }) => {
  const [profileImage, setProfileImage] = useState(null);

  const { data, setData, put, post, processing, errors } = useForm({
    profile_image: driver?.profile_image || null,
    name: driver?.name || "",
    identity_no: driver?.identity_no || "",
    email: driver?.email || "",
    gender: driver?.gender || "",
    contact_no: driver?.contact_no || "",
    license_no: driver?.license_no || "",
    license_category: driver?.license_category || "",
    experience: driver?.experience || "",
    status: driver?.status || "active",
    car_id: driver.car_id,
    bank_name: driver?.bank_name || "",
    account_number: driver?.account_number || "",
    sort_code: driver?.sort_code || ""
  });

  useEffect(() => {
    console.log(data)
  }, [data])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData(name, value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // setData((data) => ({
      //     ...data,
      //     profile_image: file,
      // }));
      setData("profile_image", file)
      setProfileImage(URL.createObjectURL(file));
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("driver.update", driver.id), {
      onError: (errors) => {
        console.log("Validation Errors:", errors);
        console.log("data is", data)
      },
    });
  };

  return (
    <div>
      {/* Header Section */}
      <div className="m-6 p-2 bg-white flex justify-between items-center mb-6">
        <Link href="/dashboard/car-booking/driver-listing" className="flex items-center text-gray-600 hover:text-gray-800">
          <FaArrowLeft className="mr-2" />
          <span>Back</span>
        </Link>
        <button
          type="submit"
          form="DriverForm"
          disabled={processing}
          className="flex items-center bg-[#e4baff] text-white px-4 py-2 rounded-md hover:bg-[#d19aed]"
        >
          <FaSave className="mr-2" />
          {processing ? "Updating..." : "Update Driver"}
        </button>
      </div>
      {/* Form Section */}
      <div className="flex flex-col lg:flex-row lg:space-x-5 rounded-lg shadow-lg px-6 pb-10">
        <div className="lg:w-1/3 p-6 bg-white">
          <div className="flex flex-col items-center p-4">
            <div className="relative w-32 h-32 rounded-full mb-4 flex items-center justify-center bg-gray-200 text-gray-500">
              {profileImage || data.profile_image ? (
                <img src={profileImage || `/storage/${data.profile_image}`} alt="User" className="w-32 h-32 rounded-full object-cover" />
              ) : (
                <span className="text-sm">Choose Profile Pic</span>
              )}
              <input type="file" accept="image/*" onChange={handleFileChange} className="absolute inset-0 opacity-0 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="lg:w-2/3 p-7 bg-white">
          <form id="DriverForm" onSubmit={handleSubmit}>
            <h3 className="text-xl border-b pb-2 font-semibold text-gray-800 mb-4">Personal Information</h3>
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
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
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
                {errors.identity_no && <p className="text-red-500 text-sm mt-1">{errors.identity_no}</p>}
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
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
                {errors.contact_no && <p className="text-red-500 text-sm mt-1">{errors.contact_no}</p>}
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
                {errors.license_no && <p className="text-red-500 text-sm mt-1">{errors.license_no}</p>}
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
                {errors.license_category && <p className="text-red-500 text-sm mt-1">{errors.license_category}</p>}
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
                {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
              </div>
              <div>
                <h1 className="block text-sm font-medium">Gender</h1>
                <select
                  name="gender"
                  value={data.gender}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg w-full focus:outline-none"
                >
                  <option value="" disabled>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
              </div>
              <div>
                <h1 className="block text-sm font-medium">Status</h1>
                <select
                  name="status"
                  value={data.status}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg w-full focus:outline-none"
                >
                  <option value="active">Active</option>
                  <option value="disabled">Disabled</option>
                </select>
              </div>
              <div>
                <h1 className="block text-sm font-medium">Cars</h1>
                <select
                  name="car_id"
                  value={data.car_id}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg w-full focus:outline-none"
                >
                  {cars.map((car) => {
                    return <option key={car.id} value={car.id}>{car.car_name}</option>;
                  })}
                </select>
              </div>
              <div>
                <h1 className="block text-sm font-medium">Bank Name</h1>
                <input
                  type="text"
                  name="bank_name"
                  value={data.bank_name}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg w-full focus:outline-none"
                />
                {errors.bank_name && <p className="text-red-500 text-sm mt-1">{errors.bank_name}</p>}
              </div>
              <div>
                <h1 className="block text-sm font-medium">Account Number</h1>
                <input
                  type="text"
                  name="account_number"
                  value={data.account_number}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg w-full focus:outline-none"
                />
                {errors.account_number && <p className="text-red-500 text-sm mt-1">{errors.account_number}</p>}
              </div>
              <div>
                <h1 className="block text-sm font-medium">Sort Code</h1>
                <input
                  type="text"
                  name="sort_code"
                  value={data.sort_code}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg w-full focus:outline-none"
                />
                {errors.sort_code && <p className="text-red-500 text-sm mt-1">{errors.sort_code}</p>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditDriver;