import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import {
  FaSnowflake,
  FaCarSide,
  FaLanguage,
  FaUser,
  FaSave,
  FaRegIdCard,
  FaPhone,
} from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "@inertiajs/react";
// import user from "../../assets/user.png";
// import { useNavigate } from "react-router-dom";

const AssignDrivers = () => {
  // const navigate = useNavigate();

  Array(8).fill({
    name: "Muhammad Aadlan",
    id: "3520294317803",
    phone: "+13 337 95 65 335",
    isSelected: false,
  });

  return (
    <div className="flex justify-center p-3 lg:p-6">
      <div className="w-full max-w-screen-lg">
        <div className="flex justify-between items-center bg-white p-2 rounded-lg">
          <Link
            href="/dashboard/car-booking"
            // onClick={() => navigate(-1)}
            className="text-gray-600 hover:text-gray-800"
          >
            <IoIosArrowBack className="mr-2" />
          </Link>
          <button className="flex items-center bg-[#e4baff] text-white px-2 rounded-md hover:bg-[#d19aed]">
            <FaSave className="mr-2" />
            Save
          </button>
        </div>
        <div className="p-3 lg:p-6 rounded-lg">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-2/5 p-4">
              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcMYRg1gEBmY_FOrnwUPBy_Hh76x2pu_sHf5fS9odowMwUgeE236sBIXXaQCThWBTvKDg&usqp=CAU"
                  alt="Audi E-tron GT XR"
                  className="w-full h-[200px] object-cover rounded-t-lg"
                />
              </div>
              <h1 className="text-center">
                <span className="text-2xl py-2 px-4 bg-[#2e2532] font-bold text-white my-2">
                  Audi E-tron GT XR
                </span>
              </h1>
              <div className="mt-4 text-lg text-center">Economy</div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <FaSnowflake className="text-[#bb8dd9]" />
                  <span>AC</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCarSide className="text-[#bb8dd9]" />
                  <span>Auto</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCarSide className="text-[#bb8dd9]" />
                  <span>4 Doors</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaLanguage className="text-[#bb8dd9]" />
                  <span>2 Languages</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUser className="text-[#bb8dd9]" />
                  <span>4 Persons</span>
                </div>
              </div>
            </div>
            <div className="lg:w-3/5 bg-white p-3 lg:p-6 rounded-lg shadow text-gray-800">
              <h2 className="text-xl font-semibold mb-4">
                Audi E-tron GT XR Details
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-sm">
                  <strong>Brand:</strong>
                  <p className="mt-2 border p-1 rounded-lg text-gray-500">
                    Audi
                  </p>
                </div>
                <div className="text-sm">
                  <strong>Model:</strong>
                  <p className="mt-2 border p-1 rounded-lg text-gray-500">
                    E-tron GT XR
                  </p>
                </div>
                <div className="text-sm">
                  <strong>Fuel:</strong>
                  <p className="mt-2 border p-1 rounded-lg text-gray-500">
                    Auto
                  </p>
                </div>
                <div className="text-sm">
                  <strong>Car No.:</strong>
                  <p className="mt-2 border p-1 rounded-lg text-gray-500">
                    UK23AJ403
                  </p>
                </div>
                <div className="text-sm">
                  <strong>Transmission:</strong>
                  <p className="mt-2 border p-1 rounded-lg text-gray-500">
                    Electric
                  </p>
                </div>
                <div className="text-sm">
                  <strong>Capacity:</strong>
                  <p className="mt-2 border p-1 rounded-lg text-gray-500">
                    4 Persons
                  </p>
                </div>
                <div className="text-sm">
                  <strong>Status:</strong>
                  <p className="mt-2 border p-1 rounded-lg text-gray-500">
                    Available
                  </p>
                </div>
                <div className="text-sm">
                  <strong>Price (per day):</strong>
                  <p className="mt-2 border p-1 rounded-lg text-gray-500">
                    $200
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 mb-10 p-4 bg-white">
          <h1 className="mx-2 mb-2 font-semibold">Available Drivers</h1>
          <Swiper
            speed={500}
            grabCursor={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Pagination]}
            className="mySwiper"
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              768: { slidesPerView: 4, spaceBetween: 20 },
            }}
          >
            {Array(8)
              .fill(0)
              .map((_, index) => (
                <SwiperSlide key={index}>
                  <div className="text-center border rounded-lg p-3">
                    <img
                      src="/storage/images/user.png"
                      alt="User"
                      className="w-16 h-16 mx-auto rounded-full object-cover mb-4"
                    />
                    <h2 className="font-semibold text-gray-800">
                      Muhammad Aadlan
                    </h2>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                      <FaRegIdCard className="text-gray-500" />
                      <span>123456789</span>
                    </div>
                    <div className="flex my-1 items-center justify-center gap-2 text-sm text-gray-500">
                      <FaPhone className="text-gray-500" />
                      <span>+880 123 456 789</span>
                    </div>
                    <button
                      className={`rounded-xl text-white px-3 ${index === 0 ? "bg-[#e1baf9]" : "bg-[#808080]"
                        }`}
                    >
                      Select
                    </button>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AssignDrivers;
