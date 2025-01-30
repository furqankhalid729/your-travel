import { FaCar, FaUserTie } from "react-icons/fa";
import { LiaDirectionsSolid } from "react-icons/lia";
// import { LuAlarmClock } from "react-icons/lu";
import { Link } from "@inertiajs/react";
// import { Outlet } from "react-router-dom";


const topMenuItems = [
  {
    name: "Car Listing",
    icon: <FaCar />,
    bgColor: "#bceaff",
    count: 5,
    text: "View Rooms",
    link: "/dashboard/car-booking",
    textColor: "#38738D",
  },
  {
    name: "Driver Listing",
    icon: <FaUserTie />,
    bgColor: "#e0b0ff",
    count: 5,
    text: "View Details",
    link:  route('driver.index'),
  },
  {
    name: "Orders",
    icon: <LiaDirectionsSolid />,
    bgColor: "#c66060",
    count: 30,
    text: "View Details",
    link: "/dashboard/car-booking/orders",
  },
  // {
  //   name: "Special Offers",
  //   icon: <LuAlarmClock />,
  //   bgColor: "#522864",
  //   count: 10,
  //   text: "Special Offers",
  //   link: "/dashboard/car-booking/special-offers",
  // },
];

const CarDash = () => {
  // console.log(topMenuItems)
  return (
    <div className="p-2 md:p-4 m-2 md:m-6 bg-white">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-5">
        {topMenuItems.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="border flex flex-col items-center text-base font-semibold cursor-pointer"
          >
            <div
              className="shadow p-2 md:p-4 flex flex-col items-center justify-center w-full"
              style={{ backgroundColor: item.bgColor }}
            >
              <div className="flex items-center justify-between w-full px-2">
                <span
                  className={`text-4xl ${
                    item.name === "Car Listing"
                      ? "text-[#808080]"
                      : "text-white"
                  }`}
                >
                  {item.icon}
                </span>
                <span
                  className={`font-medium text-4xl ${
                    item.name === "Car Listing"
                      ? "text-[#808080]"
                      : "text-white"
                  }`}
                >
                  {item.count}
                </span>
              </div>
              <p
                className={`mt-4 text-sm w-full text-right font-normal ${
                  item.name === "Car Listing" ? "text-[#808080]" : "text-white"
                }`}
              >
                {item.name}
              </p>
            </div>
            <p
              style={{ color: item.textColor || item.bgColor }}
              className="py-[2px] px-4 text-sm text-gray-800 w-full text-left"
            >
              {item.text}
            </p>
          </Link>
        ))}
      </div>
      {/* <Outlet /> */}
    </div>
  );
};

export default CarDash;
