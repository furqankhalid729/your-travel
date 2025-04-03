export default function NewBooking({ orders }) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 rounded-lg shadow-md">
                <thead className="bg-gray-100">
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
                    {orders.map((order) => (
                        <tr key={order.id} className="text-center">
                            <td className="border border-gray-300 px-4 py-2">{order.id}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                {order.items[0]?.type}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                {new Date(order.created_at).toLocaleDateString()}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                {order.items.reduce((sum, item) => sum + (item.price || 0), 0)}
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
                    ))}
                </tbody>
            </table>
        </div>

    )
}