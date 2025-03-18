import { Link } from "@inertiajs/react";
import { FaSnowflake, FaCarSide, FaLanguage, FaUser } from "react-icons/fa";
import { MdOutlineArrowBackIos } from "react-icons/md";

const DriverProfile = ({driver, car}) => {
  console.log(car)
  const images = JSON.parse(car.car_images);
  console.log(images)
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
      <div className="bg-white flex justify-between items-center mb-6">
        <Link
          href="/dashboard/car-booking"
          // onClick={() => navigate(-1)}
          className="text-gray-500 hover:text-gray-700 p-3"
        >
          <MdOutlineArrowBackIos size={20} />
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-5 rounded-lg shadow-lg px-6 pb-10">
        <div className="lg:w-1/3 p-6 bg-white">
          <p className="text-right p-3">
            <span className="bg-[#2e2532] text-gray-400 px-1 text-sm rounded-full">
              Booked
            </span>
          </p>
          <div className="flex flex-col items-center p-4">
            <img
              src={`/storage/${driver.profile_image}`}
              alt="User"
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">
              {driver.name}
            </h2>
            <p className="text-gray-600">{driver.id}</p>
            <p className="text-white rounded-full px-1 bg-[#7077f2]">{driver.gender}
            </p>
          </div>
          <img src={`/storage/${images[0]}`} className="my-2" alt="car" />
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">{car.car_name}</h1>
            <p className="text-sm text-gray-500">{car.car_number}</p>
          </div>
          <p className="mt-4 font-semibold">Economy</p>
          <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="flex items-center gap-1">
              <FaSnowflake className="text-[#bb8dd9]" />
              <span className="text-gray-500">AC</span>
            </div>
            <div className="flex items-center gap-1">
              <FaCarSide className="text-[#bb8dd9]" />
              <span className="text-gray-500">Auto</span>
            </div>
            <div className="flex items-center gap-1">
              <FaCarSide className="text-[#bb8dd9]" />
              <span className="text-gray-500">4 Doors</span>
            </div>
          </div>
          <div className="flex gap-3 mt-3">
            <div className="flex items-center gap-1">
              <FaLanguage className="text-[#bb8dd9]" />
              <span className="text-gray-500">2 Laguage</span>
            </div>
            <div className="flex items-center gap-1">
              <FaUser className="text-[#bb8dd9]" />
              <span className="text-gray-500">4 Persons</span>
            </div>
          </div>
        </div>
        <div className="lg:w-2/3 p-7 bg-white">
          <h3 className="text-xl border-b pb-2 font-semibold text-gray-800 mb-4">
            Personal Information
          </h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h1 className="block text-sm font-medium">Name</h1>
              <p className="text-gray-500 mt-2">{driver.name}</p>
            </div>
            <div>
              <h1 className="block text-sm font-medium">Identity Number</h1>
              <p className="text-gray-500 mt-2">{driver.identity_no}</p>
            </div>
            <div>
              <h1 className="block text-sm font-medium">Email</h1>
              <p className="text-gray-500 mt-2">{driver.email}</p>
            </div>
            <div>
              <h1 className="block text-sm font-medium">Contact No</h1>
              <p className="text-gray-500 mt-2">{driver.contact_no}</p>
            </div>
            <div>
              <h1 className="block text-sm font-medium">License No.</h1>
              <p className="text-gray-500 mt-2">{driver.license_no}</p>
            </div>
            <div>
              <h1 className="block text-sm font-medium">License Category</h1>
              <p className="text-gray-500 mt-2">{driver.license_category}</p>
            </div>
            <div>
              <h1 className="block text-sm font-medium">Experience</h1>
              <p className="text-gray-500 mt-2">{driver.experience} Years</p>
            </div>
          </div>
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
                          className={`rounded-lg px-2 py-[3px] ${
                            data.status === "Approved"
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
  );
};

export default DriverProfile;
