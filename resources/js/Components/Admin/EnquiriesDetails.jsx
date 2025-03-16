import { Link } from "@inertiajs/react";
import { MdOutlineArrowBackIos } from "react-icons/md";
// import { useNavigate } from "react-router-dom";

const EnquiriesDetails = ({enquiry}) => {
  console.log(enquiry)
  return (
    <div className="m-7 lg:m-12">
      <div className="flex items-center mb-6">
        <Link
          href="/dashboard/enquiries"
          // onClick={() => navigate(-1)}
          className="text-gray-600 hover:text-gray-800"
        >
          <MdOutlineArrowBackIos className="text-xl" />
        </Link>
        <h1 className="ml-4 text-2xl md:text-3xl font-semibold text-gray-800">
          Message
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            value={enquiry.name}
            disabled
            placeholder="Muneeb Ur Rehman"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={enquiry.email}
            disabled
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"
          />
        </div>
        <div>
          <label
            htmlFor="contact"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Contact Number<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="contact"
            placeholder="+923072632736"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"
          />
        </div>
        <div>
          <label
            htmlFor="booking"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Booking<span className="text-red-500">*</span>
          </label>
          <select
            id="booking"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"
          >
            <option value="" disabled selected>
              Select Booking Option
            </option>
            <option value="Booking1">Booking 1</option>
            <option value="Booking2">Booking 2</option>
            <option value="Booking3">Booking 3</option>
          </select>
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="comment"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Comment
        </label>
        <textarea
          id="comment"
          placeholder="Enter your comment"
          rows="5"
          value={enquiry.message}
            disabled
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"
        ></textarea>
      </div>
      <div className="border-t border-gray-300 my-6"></div>
      <div className="items-center ">
        <textarea
          placeholder="Reply"
          rows="2"
          className="w-full mb-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"
        ></textarea>
      </div>
      <div className="flex justify-end">
        <button className="px-8 py-2 bg-[#2e2532] text-white rounded-md">
          Send
        </button>
      </div>
    </div>
  );
};

export default EnquiriesDetails;
