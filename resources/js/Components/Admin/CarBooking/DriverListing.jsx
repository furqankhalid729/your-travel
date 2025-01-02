import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

const driversData = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    contact: "+1234567890",
    identityNo: "ID12345",
    licenseNo: "LN56789",
    licenseCategory: "Cars",
    status: "Available",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    contact: "+0987654321",
    identityNo: "ID67890",
    licenseNo: "LN12345",
    licenseCategory: "Cargo",
    status: "Not Avail",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bobjohnson@example.com",
    contact: "+1122334455",
    identityNo: "ID11223",
    licenseNo: "LN99887",
    licenseCategory: "Cars",
    status: "Available",
  },
  {
    id: 4,
    name: "Alice Williams",
    email: "alicewilliams@example.com",
    contact: "+9988776655",
    identityNo: "ID99876",
    licenseNo: "LN22334",
    licenseCategory: "Cargo",
    status: "Not Avail",
  },
];

const DriverListing = () => {
  return (
    <div className="md:min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-semibold text-[#808080]">Driver List</h2>
        <button className="bg-[#bb8dd9] text-white px-4 py-2 rounded-lg ">
          Add New Driver
        </button>
      </div>
      <div className="p-3 bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              {[
                "ID",
                "Name",
                "Email",
                "Contact",
                "Identity No",
                "License No",
                "License Cate",
                "Status",
                "Action",
              ].map((header, idx) => (
                <th
                  key={idx}
                  className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {driversData.map((driver) => (
              <tr key={driver.id}>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-[#808080]">
                  {driver.id}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-[#808080]">
                  {driver.name}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-[#808080]">
                  {driver.email}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-[#808080]">
                  {driver.contact}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-[#808080]">
                  {driver.identityNo}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-[#808080]">
                  {driver.licenseNo}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-[#808080]">
                  {driver.licenseCategory.split(" ").map((word, index) => (
                    <>
                      {index > 0 && <br />}
                      {word}
                    </>
                  ))}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-900">
                  <span
                    className={`rounded-xl inline-block px-2 py-[2px] text-sm ${
                      driver.status === "Available"
                        ? "bg-[#2e2532] text-white"
                        : "bg-[#f5a7ab] text-[#e30510]"
                    }`}
                  >
                    {driver.status}
                  </span>
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm flex space-x-2">
                  <button className="text-green-500">
                    <FaEdit />
                  </button>
                  <button className="text-blue-500 px-1">
                    <FaEye />
                  </button>
                  <button className="text-red-500">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DriverListing;
