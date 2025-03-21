import { FaEdit, FaEye, FaPlus, FaTrash } from "react-icons/fa";
import { Link } from "@inertiajs/react";

const ordersData = [
  {
    id: "A101",
    car: "Toyota Corolla",
    from: "2024-11-20",
    to: "2024-11-22",
    price: "$100",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
    action: "View",
  },
  {
    id: "A102",
    car: "Honda Civic",
    from: "2024-11-22",
    to: "2024-11-24",
    price: "$90",
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    phone: "+1987654321",
    action: "View",
  },
  {
    id: "A103",
    car: "Toyota Corolla",
    from: "2024-11-20",
    to: "2024-11-22",
    price: "$100",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
    action: "View",
  },
  {
    id: "A104",
    car: "Honda Civic",
    from: "2024-11-22",
    to: "2024-11-24",
    price: "$90",
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    phone: "+1987654321",
    action: "View",
  },
];

const Orders = ({ activeBooking }) => {
  console.log(activeBooking)
  return (
    <div className="md:min-h-screen p-10">
      <div className="flex justify-between items-center my-2">
        <h2 className="text-3xl font-semibold text-[#808080]">Orders</h2>
      </div>
      <div className="p-3 bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              {[
                "ID",
                "Cars",
                "From",
                "To",
                "Price",
                "First Name",
                "Last Name",
                "Email",
                "Status",
                "Action",
              ].map((header, index) => (
                <th
                  key={index}
                  className="px-2 py-3 text-left text-xs font-medium text-black uppercase tracking-wider whitespace-nowrap"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {activeBooking.map((order, index) => {
              const additionalInfo = JSON.parse(JSON.parse(order.additional_info));
              return (
                <tr key={index}>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-[#808080]">
                    {order.mainID}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-[#808080]">
                    <span className="inline-block px-2 py-1 bg-[#e0b0ff] text-[#808080]">
                      {order.name}
                    </span>
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-[#808080]">
                    {additionalInfo.pickup_location}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-[#808080]">
                    {additionalInfo.dropout_location}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-[#808080]">
                    {order.price}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-[#808080]">
                    {order.first_name}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-[#808080]">
                    {order.last_name}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-[#808080]">
                    {order.email}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-[#808080] capitalize">
                    {order.status}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm flex space-x-2">
                    <button className="text-green-500">
                      <FaEdit />
                    </button>
                    <Link href={route('order.assignrider',order.mainID)} className="text-blue-500 px-1">
                      <FaEye />
                    </Link>
                    <button className="text-red-500">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
