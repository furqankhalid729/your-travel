export default function NewBooking({ orders }) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 rounded-lg shadow-md">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">Order ID</th>
                        <th className="border border-gray-300 px-4 py-2">User Name</th>
                        <th className="border border-gray-300 px-4 py-2">Email</th>
                        <th className="border border-gray-300 px-4 py-2">Identity No.</th>
                        <th className="border border-gray-300 px-4 py-2">Total Price</th>
                        <th className="border border-gray-300 px-4 py-2">Status</th>
                        <th className="border border-gray-300 px-4 py-2">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id} className="text-center">
                            <td className="border border-gray-300 px-4 py-2">{order.id}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                {order.first_name} {order.last_name}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">{order.email}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                {order.identification_number || "N/A"}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                ${order.total_price.toFixed(2)}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                <span
                                    className={`px-3 py-1 rounded text-white ${order.status === "active" ? "bg-green-500" : "bg-red-500"
                                        }`}
                                >
                                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                </span>
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                {new Date(order.created_at).toLocaleDateString()}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}