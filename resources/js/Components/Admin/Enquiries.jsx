import { Link } from "@inertiajs/react";

const Messages = ({enquiries}) => {
  console.log(enquiries)
  const messages = [
    {
      id: "M101",
      name: "John Doe",
      email: "john@mail.com",
      contact: "123-456-7890",
      comment: "Excellent service!",
      yourComment: "Thank you for the feedback!",
      status: "Car Booking",
    },
    {
      id: "M102",
      name: "Jane Smith",
      email: "jane@mail.com",
      contact: "987-654-3210",
      comment: "Quick response time!",
      yourComment: "Happy to help!",
      status: "Hotel Booking",
    },
    {
      id: "M103",
      name: "Alice Brown",
      email: "alice@mail.com",
      contact: "555-123-4567",
      comment: "Could be better.",
      yourComment: "We'll improve, thanks for letting us know.",
      status: "Hotel Booking",
    },
    {
      id: "M104",
      name: "Bob White",
      email: "bob@mail.com",
      contact: "666-789-0123",
      comment: "Not satisfied.",
      yourComment: "We're sorry to hear that, let's resolve it.",
      status: "Car Booking",
    },
    {
      id: "M105",
      name: "Charlie Green",
      email: "charlie@mail.com",
      contact: "777-654-9870",
      comment: "Great experience!",
      yourComment: "Thank you for choosing us!",
      status: "Hotel Booking",
    },
  ];

  return (
    <div className="m-3 lg:m-9 p-4 border border-gray-300 bg-white min-h-screen">
      <h2 className="text-2xl md:text-3xl font-semibold text-left mb-4">
        Messages
      </h2>
      <div className="overflow-x-auto  max-w-[1200px]">
        <table className="min-w-full border-collapse border-t border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b text-left font-semibold">ID</th>
              <th className="px-4 py-2 border-b text-left font-semibold">
                Name
              </th>
              <th className="px-4 py-2 border-b text-left font-semibold">
                Email
              </th>
              <th className="px-4 py-2 border-b text-left font-semibold">
                Comment
              </th>
              <th className="px-4 py-2 border-b text-left font-semibold">
                Status
              </th>
              <th className="px-4 py-2 border-b text-left font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((message) => (
              <tr className="text-[#909090]" key={message.id}>
                <td className="px-4 py-2 border-b">{message.id}</td>
                <td className="px-4 py-2 border-b">{message.name}</td>
                <td className="px-4 py-2 border-b">{message.email}</td>
                <td className="px-4 py-2 border-b">
                  {message.message.slice(0, 9)}...
                </td>
                <td className="px-4 py-2 border-b">{message.status}</td>
                <td className="px-4 py-2 border-b">
                  <Link
                    href={route('enquiry.detail',message.id)}
                    className="text-black underline"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Messages;
