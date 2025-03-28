import { Link } from "@inertiajs/react";
import { MdOutlineArrowBackIos } from "react-icons/md";

const TourBookingProfile = ({ booking, tour }) => {
  console.log(booking, tour)
  return (
    <div>
      <div className="bg-white flex justify-between items-center mb-6">
        <Link
          href={route('tour.dashboard')}
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
              {booking.first_name} {booking.last_name}
            </h2>
            <p className="text-gray-600">{booking.id}</p>
            <p className="text-white rounded-full px-1 bg-[#8288fc]">{booking.gender}</p>
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
                <span className="text-gray-500">{tour.persons}</span>
              </p>
              <p>
                <p className="font-semibold">Price</p>
                <span className="text-gray-500">$ {tour.price}</span>
              </p>
              <p>
                <p className="font-semibold">Tour Location</p>
                <span className="text-gray-500">{tour.location}</span>
              </p>
            </div>
            <div className="mt-6">

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
              <p className="text-gray-500 mt-2">{booking.first_name} {booking.last_name}</p>
            </div>
            <div>
              <h1 className="block text-sm font-medium">Identity Number</h1>
              <p className="text-gray-500 mt-2">{booking.identification_number}</p>
            </div>
            <div>
              <h1 className="block text-sm font-medium">Email</h1>
              <p className="text-gray-500 mt-2">{booking.email}</p>
            </div>
            <div>
              <h1 className="block text-sm font-medium">Contact No</h1>
              <p className="text-gray-500 mt-2">{booking.phone_number}</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg border-b pb-2 font-semibold text-gray-800 mb-4">
              Members
            </h3>
            {booking.customer_data?.map((customer, index) => (
              <div key={index} className="mb-6">
                <h4 className="text-2xl font-semibold text-gray-700 mb-4">
                  Member {index +1}
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h1 className="block text-lg font-medium">Name</h1>
                    <p className="text-gray-500 mt-2">{customer.first_name} {customer.last_name}</p>
                  </div>
                  <div>
                    <h1 className="block text-lg font-medium">
                      Identity Number
                    </h1>
                    <p className="text-gray-500 mt-2">{customer.identification_number}</p>
                  </div>
                  <div>
                    <h1 className="block text-lg font-medium">Email</h1>
                    <p className="text-gray-500 mt-2">
                    {customer.email}
                    </p>
                  </div>
                  <div>
                    <h1 className="block text-lg font-medium">Contact No</h1>
                    <p className="text-gray-500 mt-2">{customer.phone_number}</p>
                  </div>
                  <div>
                    <h1 className="block text-lg font-medium">Gender</h1>
                    <p className="text-gray-500 mt-2">{customer.gender}</p>
                  </div>
                  
                </div>
              </div>
            )
            )}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourBookingProfile;
