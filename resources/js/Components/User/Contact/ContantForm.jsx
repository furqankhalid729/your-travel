import React, { useState } from "react";
import { useForm, usePage } from "@inertiajs/react";

const ContactForm = () => {
  const { props } = usePage();
  const successMessage = props.flash?.success;
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post("/api/contact", {
      onSuccess: () => reset(), // Reset form after successful submission
    });
  };

  return (
    <div className="bg-white rounded-lg p-6 w-full lg:h-[300px] lg:w-1/2">
      {/* Title */}
      {successMessage && (
        <div className="bg-green-500 text-white p-3 rounded-md mb-4">
          {successMessage}
        </div>
      )}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Get in touch</h2>

      {/* Subtitle */}
      <p className="text-gray-600 mb-2">
        Send us a note, and our staff will be pleased to help.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name and Email Fields */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={data.name}
              onChange={(e) => setData("name", e.target.value)}
              required
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div className="w-full">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={data.email}
              onChange={(e) => setData("email", e.target.value)}
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
        </div>

        {/* Message Text Area */}
        <div>
          <textarea
            placeholder="Message"
            rows="3"
            className="w-full p-3 border border-gray-300 rounded-md"
            value={data.message}
            onChange={(e) => setData("message", e.target.value)}
            required
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 disabled:bg-red-300"
          disabled={processing}
        >
          {processing ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
