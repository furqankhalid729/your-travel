const Customers = () => {
  const customers = [
    {
      id: "A102",
      name: "John Doe",
      email: "john@example.com",
      contact: "123-456-7890",
      spending: "$302.00",
    },
    {
      id: "A103",
      name: "Jane Smith",
      email: "jane@example.com",
      contact: "987-654-3210",
      spending: "$2781.00",
    },
    {
      id: "A104",
      name: "Alice Brown",
      email: "alice@example.com",
      contact: "555-123-4567",
      spending: "$560.00",
    },
    {
      id: "A105",
      name: "Bob White",
      email: "bob@example.com",
      contact: "666-789-0123",
      spending: "$1345.00",
    },
    {
      id: "A106",
      name: "Charlie Green",
      email: "charlie@example.com",
      contact: "777-654-9870",
      spending: "$890.00",
    },
  ];

  return (
      <div className="m-3 lg:m-9 p-4 border border-gray-300 bg-white min-h-screen">
        <h2 className="text-2xl md:text-3xl font-semibold text-left mb-4">
          Customers
        </h2>
        <div className="overflow-x-auto">
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
                  <td className="px-4 py-2 border-b">{customer.contact}</td>
                  <td className="px-4 py-2 border-b">{customer.spending}</td>
                  <td className="px-4 py-2 border-b">
                    <button className="text-black underline">View</button>
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
