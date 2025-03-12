import React, { useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import { useSelector, useDispatch } from "react-redux";
import { clearBookings } from "../../../store/bookingSlice";

const BookingForm = ({disabled}) => {
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
    bookings: bookings
  });
  console.log(data)
  const [csrfToken, setCsrfToken] = useState("");
  
  useEffect(() => {
    const token = document.querySelector('meta[name="csrf-token"]')?.content;
    if (token) {
      setCsrfToken(token);
    }
  }, []);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/add/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": csrfToken, 
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        dispatch(clearBookings());
        alert("Form submitted successfully!");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
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
              <input required type="text" name="id_number" value={data.id_number} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500" />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2">Email</label>
            <input required type="email" name="email" value={data.email} onChange={handleChange} className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500" />
          </div>

          <p className="text-sm text-gray-600 mb-4">Email verification is sent to this address.</p>
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
