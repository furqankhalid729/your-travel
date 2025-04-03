import { Link } from "@inertiajs/react";
const Customers = ({customers}) => {
  console.log(customers)
  
  return (
      <div className="m-3 lg:m-9 p-4 border border-gray-300 bg-white min-h-screen">
        <h2 className="text-2xl md:text-3xl font-semibold text-left mb-4">
          Customers
        </h2>
        <div className="overflow-x-auto  max-w-[1200px]">
          <table className="min-w-full border-collapse border-t border-gray-300">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b text-left font-semibold">
                  ID
                </th>
                <th className="px-4 py-2 border-b text-left font-semibold">
                  Customer Name
                </th>
                <th className="px-4 py-2 border-b text-left font-semibold">
                  Email
                </th>
                <th className="px-4 py-2 border-b text-left font-semibold">
                  Contact
                </th>
                <th className="px-4 py-2 border-b text-left font-semibold">
                  Spending
                </th>
                <th className="px-4 py-2 border-b text-left font-semibold">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr className="text-[#909090]" key={customer.id}>
                  <td className="px-4 py-2 border-b">{customer.id}</td>
                  <td className="px-4 py-2 border-b">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                        alt="Customer"
                        className="w-8 h-8 rounded-full"
                      />
                      <span>{customer.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-2 border-b">{customer.email}</td>
                  <td className="px-4 py-2 border-b">{customer.phone_number}</td>
                  <td className="px-4 py-2 border-b">{customer.spending}</td>
                  <td className="px-4 py-2 border-b">
                    <Link href={route('customer.order.index',customer.id)} className="text-black underline">View</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default Customers;
