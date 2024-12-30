// import { useNavigate } from "react-router-dom";
// import user from "../../assets/user.png";
import { Link } from "@inertiajs/react";
import { MdOutlineArrowBackIos } from "react-icons/md";

const TourBookingProfile = () => {
  // const navigate = useNavigate();
  return (
    <div>
      <div className="bg-white flex justify-between items-center mb-6">
        <Link
          href="/dashboard/tour-booking"
          // onClick={() => navigate(-1)}
          className="text-gray-500 hover:text-gray-700 p-3"
        >
          <MdOutlineArrowBackIos size={20} />
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-5 rounded-lg shadow-lg px-6">
        <div className="lg:w-1/3 p-6 bg-white mb-4 lg:mb-0">
          <p className="text-right p-3">
            <span className="bg-[#2e2532] text-gray-400 px-1 text-sm rounded-full">
              Booked
            </span>
          </p>
          <div className="flex flex-col items-center p-4">
            <img
              src="/storage/images/user.png"
              alt="User"
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">
              Muhammad Aadlan
            </h2>
            <p className="text-gray-600">A101</p>
            <p className="text-white rounded-full px-1 bg-[#8288fc]">Male</p>
          </div>
          <div className="my-3">
            <h1 className="pb-3 border-b font-semibold text-lg">
              Order Detail
            </h1>
            <div className="grid grid-cols-2 gap-4 mt-5">
              <p>
                <p className="font-semibold">From</p>
                <span className="text-gray-500">28 September 2024</span>
              </p>
              <p>
                <p className="font-semibold">To</p>
                <span className="text-gray-500">28 September 2024</span>
              </p>
              <p>
                <p className="font-semibold">No. of members</p>
                <span className="text-gray-500">2</span>
              </p>
              <p>
                <p className="font-semibold">Price</p>
                <span className="text-gray-500">$200</span>
              </p>
              <p>
                <p className="font-semibold">Tour Location</p>
                <span className="text-gray-500">Lakhna</span>
              </p>
            </div>
            <div className="mt-6">
              <select
                id="booking"
                className="w-full p-3 font-semibold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"
              >
                <option value="" disabled selected>
                  Tour Detail
                </option>
                <option value="Booking1">Booking 1</option>
              </select>
            </div>
          </div>
        </div>
        <div className="lg:w-2/3 p-6 bg-white">
          <h3 className="text-xl border-b pb-2 font-semibold text-gray-800 mb-4">
            Personal Information
          </h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h1 className="block text-sm font-medium">Name</h1>
              <p className="text-gray-500 mt-2">Muhammad Aadlan</p>
            </div>
            <div>
              <h1 className="block text-sm font-medium">Identity Number</h1>
              <p className="text-gray-500 mt-2">3520294317803</p>
            </div>
            <div>
              <h1 className="block text-sm font-medium">Email</h1>
              <p className="text-gray-500 mt-2">john.doe@example.com</p>
            </div>
            <div>
              <h1 className="block text-sm font-medium">Contact No</h1>
              <p className="text-gray-500 mt-2">+1 234 567 890</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg border-b pb-2 font-semibold text-gray-800 mb-4">
              Members
            </h3>
            {["01", "02", "03"].map((member) => (
              <div key={member} className="mb-6">
                <h4 className="text-2xl font-semibold text-gray-700 mb-4">
                  Member {member}
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h1 className="block text-lg font-medium">Name</h1>
                    <p className="text-gray-500 mt-2">John Doe {member}</p>
                  </div>
                  <div>
                    <h1 className="block text-lg font-medium">
                      Identity Number
                    </h1>
                    <p className="text-gray-500 mt-2">1234567890{member}</p>
                  </div>
                  <div>
                    <h1 className="block text-lg font-medium">Email</h1>
                    <p className="text-gray-500 mt-2">
                      member{member}@example.com
                    </p>
                  </div>
                  <div>
                    <h1 className="block text-lg font-medium">Contact No</h1>
                    <p className="text-gray-500 mt-2">+1 987 654 32{member}</p>
                  </div>
                  <div>
                    <h1 className="block text-lg font-medium">Gender</h1>
                    <p className="text-gray-500 mt-2">Male</p>
                  </div>
                  <div>
                    <h1 className="block text-lg font-medium">Age</h1>
                    <p className="text-gray-500 mt-2">
                      {20 + parseInt(member)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourBookingProfile;
