import { FaUserCircle } from "react-icons/fa";

const General = () => {
  return (
    <div className="p-2 lg:p-4">
      <h2 className="text-2xl font-semibold text-gray-800">General</h2>
      <div className="mt-6 flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center text-white">
          <FaUserCircle className="text-4xl" />
        </div>
        <div className="space-x-2">
          <button className="bg-[#2e2532] text-white px-4 py-2 rounded-md">
            Update Now
          </button>
          <button className="border px-4 py-2 rounded-md">Delete</button>
        </div>
      </div>
      <form className="mt-8 space-y-4">
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-sm text-gray-600">Business Name</label>
            <input
              type="text"
              className="w-full p-2 mt-2 border border-gray-300 rounded-md"
              placeholder="Business Name"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm text-gray-600">Email</label>
            <input
              type="email"
              className="w-full p-2 mt-2 border border-gray-300 rounded-md"
              placeholder="Email Address"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-sm text-gray-600">Phone Number</label>
            <input
              type="tel"
              className="w-full p-2 mt-2 border border-gray-300 rounded-md"
              placeholder="Phone Number"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm text-gray-600">Fax</label>
            <input
              type="text"
              className="w-full p-2 mt-2 border border-gray-300 rounded-md"
              placeholder="Fax Number"
            />
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <label className="block text-sm text-gray-600">Address</label>
          <div className="flex gap-4">
            <input
              type="text"
              className="w-1/3 p-2 border border-gray-300 rounded-md"
              placeholder="Switzerland"
            />
            <input
              type="text"
              className="w-1/3 p-2 border border-gray-300 rounded-md"
              placeholder="Geneva"
            />
            <input
              type="text"
              className="w-1/3 p-2 border border-gray-300 rounded-md"
              placeholder="Unit"
            />
          </div>
          <div className="flex gap-4 mt-2">
            <input
              type="text"
              className="w-1/3 p-2 border border-gray-300 rounded-md"
              placeholder="Street"
            />
            <input
              type="number"
              className="w-1/3 p-2 border border-gray-300 rounded-md"
              placeholder="Number"
            />
            <input
              type="text"
              className="w-1/3 p-2 border border-gray-300 rounded-md"
              placeholder="Postcode"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button className="bg-[#2e2532] text-white px-6 py-2 mt-3 rounded-md">
            Update Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default General;
