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
                            <th className="border border-gray-300 px-4 py-2">Order Number</th>
                            <th className="border border-gray-300 px-4 py-2">Type</th>
                            <th className="border border-gray-300 px-4 py-2">Order Date</th>
                            <th className="border border-gray-300 px-4 py-2">Order Amount</th>
                            <th className="border border-gray-300 px-4 py-2">Item Name</th>
                            <th className="border border-gray-300 px-4 py-2">Date</th>
                            <th className="border border-gray-300 px-4 py-2">Location</th>
                            <th className="border border-gray-300 px-4 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((order) => (
                            <tr key={order.id} className="text-center">
                                <td className="border border-gray-300 px-4 py-2">{order.id}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {order.items[0]?.type}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {new Date(order.created_at).toLocaleDateString()}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {order.items.reduce((sum, item) => parseFloat(sum) + (parseFloat(item.price) || 0), 0)}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {order.items[0]?.name}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {order.items[0]?.type == "car" ? JSON.parse(order.items[0]?.additional_info)['pickup_date'] :
                                        order.items[0]?.type == "hotel" ? JSON.parse(order.items[0]?.additional_info)['checkInDate'] :
                                            order.items[0]?.type == "tour" ? JSON.parse(order.items[0]?.additional_info)['startDate'] : ""
                                    }
                                </td>
                                <td className="border border-gray-300 px-4 py-2 max-w-[260px]">
                                    {order.items[0]?.type == "car" ? JSON.parse(order.items[0]?.additional_info)['pickup_location'] :
                                        order.items[0]?.type == "hotel" ? JSON.parse(order.items[0]?.additional_info)['hotel_location'] :
                                            order.items[0]?.type == "tour" ? JSON.parse(order.items[0]?.additional_info)['tour_location'] : ""
                                    }
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <span
                                        className={`px-3 py-1 rounded text-white ${order.status === "active" ? "bg-green-500" : "bg-red-500"
                                            }`}
                                    >
                                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                    </span>
                                </td>

                            </tr>
                            // <tr className="text-[#909090]" key={booking.id}>
                            //     <td className="px-4 py-2 border-b">{booking.id}</td>
                            //     <td className="px-4 py-2 border-b">
                            //         <div className="flex items-center gap-2">
                            //             <img
                            //                 src="https://randomuser.me/api/portraits/men/1.jpg"
                            //                 alt="Customer"
                            //                 className="w-8 h-8 rounded-full"
                            //             />
                            //             <span>{booking.first_name}</span>
                            //         </div>
                            //     </td>
                            //     <td className="px-4 py-2 border-b">{booking.email}</td>
                            //     <td className="px-4 py-2 border-b">{booking.phone_number}</td>
                            //     <td className="px-4 py-2 border-b">{new Date(booking.created_at).toDateString()}</td>

                            // </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CustomerOrdersCom;