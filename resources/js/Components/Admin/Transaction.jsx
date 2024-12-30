import {
  FaMoneyBillWave,
  FaTimesCircle,
  FaFileInvoiceDollar,
  FaArrowDown,
  FaPlus,
} from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

const paymentsData = [
  {
    paymentNo: "8FBF88-2F1",
    name: "John Doe",
    status: "Paid",
    date: "2024-11-20",
    booking: "Car",
    amount: "150.00",
  },
  {
    paymentNo: "8FBF88-2F2",
    name: "Jane Smith",
    status: "Pending",
    date: "2024-11-19",
    booking: "Hotel",
    amount: "200.00",
  },
  {
    paymentNo: "8FBF88-2F3",
    name: "Jane Smith",
    status: "Unpaid",
    date: "2024-11-19",
    booking: "Tour",
    amount: "200.00",
  },
];

const Transaction = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4 py-3 px-4 bg-white">
        <h3 className="text-2xl font-semibold">Transaction</h3>
        <select
          className="border bg-[#2e2532] text-white border-gray-300 rounded px-3 py-1 text-sm"
          defaultValue="Last 30 Days"
        >
          <option value="Last 30 Days">Last 30 Days</option>
          <option value="Last 1 Year">Last 1 Year</option>
          <option value="Jan - Jul">Jan - Jul</option>
        </select>
      </div>
      <div className="m-3 lg:m-5">
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-6">
          <div className="lg:w-2/3 border-2 bg-white rounded-lg p-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-3 flex items-center justify-center gap-4 rounded-md shadow">
                <div>
                  <div className="flex items-center mb-1">
                    <FaFileInvoiceDollar className="text-lg text-blue-500" />
                    <span className="ml-2 text-gray-600 text-sm">
                      Total Invoices
                    </span>
                  </div>
                  <h4 className="text-2xl font-semibold">$152.9k</h4>
                  <p className="text-sm text-green-600">+1.50 /month</p>
                </div>
              </div>
              <div className="p-3 flex items-center justify-center gap-4 rounded-md shadow">
                <div>
                  <div className="flex items-center mb-1">
                    <FaMoneyBillWave className="text-lg text-green-500" />
                    <span className="ml-2 text-gray-600 text-sm">
                      Total Payments
                    </span>
                  </div>
                  <h4 className="text-2xl font-semibold">$109.9k</h4>
                  <p className="text-sm text-green-600">+0.49 /month</p>
                </div>
              </div>
              <div className="p-3 flex items-center justify-center gap-4 rounded-md shadow">
                <div>
                  <div className="flex items-center mb-1">
                    <FaTimesCircle className="text-lg text-red-500" />
                    <span className="ml-2 text-gray-600 text-sm">
                      Unpaid Payments
                    </span>
                  </div>
                  <h4 className="text-2xl font-semibold">$42.8k</h4>
                  <p className="text-sm text-red-600">+1.50 /month</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 bg-white border-2 rounded-lg p-3">
            <div className="mb-1">
              <h4 className="text-lg font-semibold mb-2">Total Transactions</h4>
              <p className="text-gray-500 text-sm">
                Total unpaid payments $42,872
              </p>
              <progress
                className="progress progress-primary w-full"
                value="45"
                max="100"
              ></progress>
            </div>
            <div className="flex justify-between items-center gap-4 border-t border-gray-200 pt-1">
              <div className="text-center border-r border-gray-200 pr-12">
                <p className="text-[#cb98eb] font-semibold">$109k</p>
                <span className="text-gray-500 text-sm">Currently Paid</span>
              </div>
              <div className="text-center">
                <p className="text-red-500 font-semibold">$65k</p>
                <span className="text-gray-500 text-sm">Overdue</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border-2 rounded-lg p-6 mt-4">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-semibold">All Transaction</h2>
            <button className="bg-[#2e2532] flex items-center gap-1 text-white p-2 rounded-lg ">
              <FaPlus />
              New Invoice
            </button>
          </div>
          <div className="rounded-lg overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="border-t">
                <tr>
                  <th className="px-2 py-3">
                    <input
                      type="checkbox"
                      className="form-checkbox text-[#bb8dd9]"
                      aria-label="Select All"
                    />
                  </th>
                  {[
                    "Payment No",
                    "Name",
                    "Status",
                    "Date",
                    "Booking",
                    "Amount",
                    "Download",
                  ].map((header, index) => (
                    <th
                      key={index}
                      className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {paymentsData.map((payment, index) => (
                  <tr key={index}>
                    <td className="px-2 py-4 whitespace-nowrap text-sm">
                      <input
                        type="checkbox"
                        className="form-checkbox text-[#bb8dd9]"
                        aria-label={`Select Payment ${payment.paymentNo}`}
                      />
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-sm text-[#c46aff]">
                      {payment.paymentNo}
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                      {payment.name}
                    </td>
                    <td
                      className={`px-2 py-4 font-semibold whitespace-nowrap text-sm ${
                        payment.status === "Paid"
                          ? "text-green-600"
                          : payment.status === "Pending"
                          ? "text-[#ff9320]"
                          : "text-[#810000]"
                      }`}
                    >
                      {payment.status}
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                      {payment.date}
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                      {payment.booking}
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                      ${payment.amount}
                    </td>
                    <td className="px-6 space-x-2 py-4 whitespace-nowrap text-sm">
                      <button className="text-blue-500 hover:text-blue-700">
                        <FaArrowDown />
                      </button>
                      <button>
                        <RiDeleteBinLine />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
