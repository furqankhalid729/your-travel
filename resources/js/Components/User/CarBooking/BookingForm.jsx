import React, { useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import { useSelector, useDispatch } from "react-redux";
import { clearBookings } from "../../../store/bookingSlice";

const ExtraItem = ({ icon, label, value, onChange }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="flex items-center gap-2">
      <span className="text-gray-600">{icon}</span>
      <span className="font-semibold text-sm">{label}</span>
    </div>
    <div className="flex items-center gap-2">
      <button
        onClick={() => onChange(Math.max(0, value - 1))}
        className="px-2 py-1 border rounded disabled:opacity-50"
        disabled={value <= 0}
        type="button"
      >
        −
      </button>
      <span className="w-6 text-center">{value}</span>
      <button
        onClick={() => onChange(value + 1)}
        className="px-2 py-1 border rounded"
        type="button"
      >
        +
      </button>
    </div>
  </div>
);

const BookingForm = ({ disabled }) => {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.booking.bookings);

  const { data, setData, post, processing } = useForm({
    first_name: "",
    last_name: "",
    gender: "",
    identification_number: "",
    email: "",
    address: "",
    city: "",
    postal_code: "",
    country: "",
    phone_code: "+92",
    phone_number: "",
    cardholder_name: "",
    card_type: "",
    card_number: "",
    expiry_date: "",
    cvc: "",
    terms_agreed: false,
    payment_id: "37864837434",
    bookings: bookings,
    additional_members: [],
    luggage: 0,
    baby_seat: 0,
    child_seat: 0,
    booster_seat: 0,
    additional_info: ""
  });

  console.log(data)

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const handleExtraChange = (field, value) => {
    setData(field, Math.max(0, value));
  };

  const handleInfoChange = (e) => {
    setData('additional_info', e.target.value);
  };

  const handleAddMember = () => {
    setData("additional_members", [
      ...data.additional_members,
      {
        first_name: "",
        last_name: "",
        gender: "",
        identification_number: "",
        email: "",
        phone_number: ""
      }
    ]);
  };

  const handleRemoveMember = (index) => {
    setData(
      "additional_members",
      data.additional_members.filter((_, i) => i !== index)
    );
  };

  const handleMemberChange = (index, event) => {
    const { name, value } = event.target;
    const updatedMembers = [...data.additional_members];
    updatedMembers[index][name] = value;
    setData("additional_members", updatedMembers);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    post("/api/add/booking", {
      preserveScroll: true,
      onSuccess: () => {
        alert("Form submitted successfully!");
        reset();
      },
      onError: (errors) => {
        console.error("Form submission failed:", errors);
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full lg:w-[70%] py-5 lg:py-0">
      <div className="flex-col">
        <div className="bg-white border border-gray-300 rounded-lg p-6">
          <h1 className="text-xl font-semibold text-gray-800 mb-4">Enter your detail</h1>

          {/* Name Fields */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-600 text-sm mb-2">First Name</label>
              <input required type="text" name="first_name" value={data.first_name} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500" />
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-2">Last Name</label>
              <input required type="text" name="last_name" value={data.last_name} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500" />
            </div>
          </div>

          {/* Gender and ID */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-600 text-sm mb-2">Gender</label>
              <select name="gender" value={data.gender} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-2">Identification Number</label>
              <input required type="text" name="identification_number" value={data.identification_number} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500" />
            </div>
          </div>

          {/* Email */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <div className="mb-4">
                <label className="block text-gray-600 text-sm mb-2">Email</label>
                <input required type="email" name="email" value={data.email} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500" />
              </div>
              <p className="text-sm text-gray-600 mb-4">Email verification is sent to this address.</p>
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-2">Phone Number</label>
              <input required type="text" name="phone_number" value={data.phone_number} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500" />
            </div>
          </div>
          <hr className="border-gray-300 mb-4" />

          <div className="mb-4">
            {data.additional_members.map((member, index) => (
              <div key={index} className="border p-4 rounded-lg mb-4">
                <h3 className="text-lg font-semibold mb-2">Additional Member {index + 1}</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-600 text-sm mb-2">First Name</label>
                    <input
                      required
                      type="text"
                      name="first_name"
                      value={member.first_name}
                      onChange={(e) => handleMemberChange(index, e)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 text-sm mb-2">Last Name</label>
                    <input
                      required
                      type="text"
                      name="last_name"
                      value={member.last_name}
                      onChange={(e) => handleMemberChange(index, e)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-600 text-sm mb-2">Gender</label>
                    <select
                      name="gender"
                      value={member.gender}
                      onChange={(e) => handleMemberChange(index, e)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-600 text-sm mb-2">Identification Number</label>
                    <input
                      required
                      type="text"
                      name="identification_number"
                      value={member.identification_number}
                      onChange={(e) => handleMemberChange(index, e)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-600 text-sm mb-2">Email</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={member.email}
                      onChange={(e) => handleMemberChange(index, e)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 text-sm mb-2">Phone Number</label>
                    <input
                      required
                      type="text"
                      name="phone_number"
                      value={member.phone_number}
                      onChange={(e) => handleMemberChange(index, e)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveMember(index)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Remove Member
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={handleAddMember}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Add Additional Member
            </button>
          </div>

          <hr className="border-gray-300 mb-4" />

          {/* Address Details */}
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Address Details</h2>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2">Address</label>
            <input required type="text" name="address" value={data.address} onChange={handleChange} className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500" />
          </div>

          <div className="grid grid-cols-1 gap-4 mb-4">
            <div>
              <label className="block text-gray-600 text-sm mb-2">City</label>
              <input required type="text" name="city" value={data.city} onChange={handleChange} className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500" />
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-2">Postal Code</label>
              <input required type="text" name="postal_code" value={data.postal_code} onChange={handleChange} className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500" />
            </div>
          </div>

          {/* Country and Phone */}
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div>
              <label className="block text-gray-600 text-sm mb-2">Country/Region</label>
              <input required type="text" name="country" value={data.country} onChange={handleChange} className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500" />
            </div>
          </div>

          <div className="bg-white rounded-md shadow p-4 mx-auto">
            <h2 className="text-lg font-semibold border-b pb-2 mb-4 text-gray-800">
              Luggage and extras
            </h2>

            <div className="grid grid-cols-3 gap-4">
              <ExtraItem
                icon="🧳"
                label="Luggage"
                value={data.luggage}
                onChange={(val) => handleExtraChange('luggage', val)}
              />
              <ExtraItem
                icon="👶"
                label="Baby Seat"
                value={data.baby_seat}
                onChange={(val) => handleExtraChange('baby_seat', val)}
              />
              <ExtraItem
                icon="🧒"
                label="Child Seat"
                value={data.child_seat}
                onChange={(val) => handleExtraChange('child_seat', val)}
              />
              <ExtraItem
                icon="🪑"
                label="Booster Seat"
                value={data.booster_seat}
                onChange={(val) => handleExtraChange('booster_seat', val)}
              />
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                More information
              </label>
              <textarea
                value={data.additional_info}
                onChange={handleInfoChange}
                rows={3}
                className="w-full border rounded px-3 py-2 text-sm text-gray-700"
                placeholder="Add any special requests here..."
              />
            </div>
          </div>

          {/* Payment Details */}
          <div className="bg-white border border-gray-300 rounded-lg p-6 w-full mt-4">
            <h1 className="text-xl font-semibold text-gray-800 mb-4">How would you like to pay?</h1>

            <div className="grid grid-cols-1 gap-4 mb-4">
              <div>
                <label className="block text-gray-600 text-sm mb-2">Cardholder’s Name*</label>
                <input required type="text" name="cardholder_name" value={data.cardholder_name} onChange={handleChange} className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500" />
              </div>
              <div>
                <label className="block text-gray-600 text-sm mb-2">Card Type</label>
                <select name="card_type" value={data.card_type} onChange={handleChange} className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500">
                  <option value="">--Select--</option>
                  <option value="visa">Visa</option>
                  <option value="paypal">PayPal</option>
                  <option value="debit">Debit</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-600 text-sm mb-2">Card Number*</label>
                <input required type="text" name="card_number" value={data.card_number} onChange={handleChange} className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500" />
              </div>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-start space-x-2 my-2">
            <input required type="checkbox" name="terms_agreed" checked={data.terms_agreed} onChange={handleChange} className="mt-1 accent-red-500" />
            <p className="text-sm text-gray-600">You agree with our <span className="text-red-500">Terms & conditions</span> and <span className="text-red-500">Privacy statement</span></p>
          </div>

          <button type="submit" disabled={processing || disabled} className="bg-red-500 text-white px-6 py-2 rounded-lg mt-4">
            {processing ? "Processing..." : "Submit Booking"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default BookingForm;
