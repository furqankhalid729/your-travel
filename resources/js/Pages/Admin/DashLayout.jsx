import { useState } from "react";
import { Link } from "@inertiajs/react";
// import { Outlet } from "react-router-dom";

import {
  FaBell,
  FaUserCircle,
  FaHome,
  FaCar,
  FaHotel,
  FaSuitcase,
  FaDraft2Digital,
  FaUsers,
  FaEnvelope,
  FaCreditCard,
  FaExchangeAlt,
  FaChartBar,
  FaCog,
  FaArrowRight,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const DashLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleRouteChange = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-[#2e2532] text-white flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white p-2"
          >
            <FaBars />
          </button>
          <h1 className="text-base font-bold">YOURTRIP24</h1>
        </div>
        <h1 className="text-xl font-bold hidden lg:block">YOURTRIP24</h1>
        <div className="flex items-center gap-6">
          <FaBell className="text-lg cursor-pointer" />
          <div className="flex items-center gap-2">
            <FaUserCircle className="text-2xl" />
            <span>Muneeb&apos;s</span>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex-1">
          <div className="bg-[#2e2532] w-64 h-full text-white lg:flex flex-col hidden">
            <nav className="flex-1 p-4 space-y-4">
              <Link
                to="/dashboard"
                end
                onClick={handleRouteChange}
                className={({ isActive }) =>
                  `relative flex items-center gap-4 px-4 py-2 rounded hover:bg-gray-700 transition ${
                    isActive ? "text-white" : "text-gray-400"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#e0b0ff] h-full w-1 p-1 rounded" />
                    )}
                    <FaHome />
                    <span>Dashboard</span>
                    <FaArrowRight className="ml-auto" />
                  </>
                )}
              </Link>
              {[
                {
                  to: "/dashboard/car-booking",
                  icon: <FaCar />,
                  name: "Car Booking",
                },
                {
                  to: "/dashboard/hotel-booking",
                  icon: <FaHotel />,
                  name: "Hotel Booking",
                },
                {
                  to: "/dashboard/tour-booking",
                  icon: <FaSuitcase />,
                  name: "Tour Booking",
                },
                {
                  to: "/dashboard/drafts",
                  icon: <FaDraft2Digital />,
                  name: "Drafts",
                },
                {
                  to: "/dashboard/customers",
                  icon: <FaUsers />,
                  name: "Customers",
                },
                {
                  to: "/dashboard/enquiries",
                  icon: <FaEnvelope />,
                  name: "Enquiries",
                },
                {
                  to: "/dashboard/payments",
                  icon: <FaCreditCard />,
                  name: "Payments",
                },
                {
                  to: "/dashboard/transaction",
                  icon: <FaExchangeAlt />,
                  name: "Transaction",
                },
                {
                  to: "/dashboard/reports",
                  icon: <FaChartBar />,
                  name: "Reports",
                },
                {
                  to: "/dashboard/settings",
                  icon: <FaCog />,
                  name: "Settings",
                },
              ].map((item) => (
                <Link
                  to={item.to}
                  key={item.name}
                  onClick={handleRouteChange}
                  className={({ isActive }) =>
                    `relative flex items-center gap-4 px-4 py-2 rounded hover:bg-gray-700 transition ${
                      isActive ? "text-white" : "text-gray-400"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#e0b0ff] h-full w-1 p-1 rounded" />
                      )}
                      {item.icon}
                      <span>{item.name}</span>
                      <FaArrowRight className="ml-auto" />
                    </>
                  )}
                </Link>
              ))}
            </nav>
          </div>
          <div
            className={`bg-[#2e2532] w-56 text-white flex flex-col fixed top-0 left-0 h-full z-50 transition-all duration-500 lg:hidden overflow-y-auto ${
              sidebarOpen ? "block" : "hidden"
            }`}
          >
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-white text-xl mx-2 p-4"
            >
              <FaTimes />
            </button>
            <nav className="flex-1 px-3 py-4 space-y-4">
              <Link
                to="/dashboard"
                end
                onClick={handleRouteChange}
                className={({ isActive }) =>
                  `relative flex items-center gap-4 px-4 py-2 rounded hover:bg-gray-700 transition ${
                    isActive ? "text-white" : "text-gray-400"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#e0b0ff] h-full w-1 p-1 rounded" />
                    )}
                    <FaHome />
                    <span>Dashboard</span>
                    <FaArrowRight className="ml-auto" />
                  </>
                )}
              </Link>
              {[
                {
                  to: "/dashboard/car-booking",
                  icon: <FaCar />,
                  name: "Car Booking",
                },
                {
                  to: "/dashboard/hotel-booking",
                  icon: <FaHotel />,
                  name: "Hotel Booking",
                },
                {
                  to: "/dashboard/tour-booking",
                  icon: <FaSuitcase />,
                  name: "Tour Booking",
                },
                {
                  to: "/dashboard/drafts",
                  icon: <FaDraft2Digital />,
                  name: "Drafts",
                },
                {
                  to: "/dashboard/customers",
                  icon: <FaUsers />,
                  name: "Customers",
                },
                {
                  to: "/dashboard/enquiries",
                  icon: <FaEnvelope />,
                  name: "Enquiries",
                },
                {
                  to: "/dashboard/payments",
                  icon: <FaCreditCard />,
                  name: "Payments",
                },
                {
                  to: "/dashboard/transaction",
                  icon: <FaExchangeAlt />,
                  name: "Transaction",
                },
                {
                  to: "/dashboard/reports",
                  icon: <FaChartBar />,
                  name: "Reports",
                },
                {
                  to: "/dashboard/settings",
                  icon: <FaCog />,
                  name: "Settings",
                },
              ].map((item) => (
                <Link
                  to={item.to}
                  key={item.name}
                  onClick={handleRouteChange}
                  className={({ isActive }) =>
                    `relative flex items-center gap-4 px-4 py-2 rounded hover:bg-gray-700 transition ${
                      isActive ? "text-white" : "text-gray-400"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#e0b0ff] h-full w-1 p-1 rounded" />
                      )}
                      {item.icon}
                      <span>{item.name}</span>
                      <FaArrowRight className="ml-auto" />
                    </>
                  )}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="w-full bg-[#f3f3f3]">
          {/* <Outlet /> */}
        </div>
      </div>
    </div>
  );
};

export default DashLayout;
