const CustomerOrdersCom = ({ bookings }) => {
    console.log(bookings)
    return (
        <div className="m-3 lg:m-9 p-4 border border-gray-300 bg-white min-h-screen">
            <h2 className="text-2xl md:text-3xl font-semibold text-left mb-4">
                Customer Order
            </h2>
            <div className="overflow-x-auto max-w-[1200px]">
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
                                Date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking) => (
                            <tr className="text-[#909090]" key={booking.id}>
                                <td className="px-4 py-2 border-b">{booking.id}</td>
                                <td className="px-4 py-2 border-b">
                                    <div className="flex items-center gap-2">
                                        <img
                                            src="https://randomuser.me/api/portraits/men/1.jpg"
                                            alt="Customer"
                                            className="w-8 h-8 rounded-full"
                                        />
                                        <span>{booking.first_name}</span>
                                    </div>
                                </td>
                                <td className="px-4 py-2 border-b">{booking.email}</td>
                                <td className="px-4 py-2 border-b">{booking.phone_number}</td>
                                <td className="px-4 py-2 border-b">{new Date(booking.created_at).toDateString()}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CustomerOrdersCom;