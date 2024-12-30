import {
  FaArrowLeft,
  FaSnowflake,
  FaCarSide,
  FaLanguage,
  FaUser,
} from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

const ViewCar = () => {
  // const navigate = useNavigate();
  return (
    <div className="m-3 lg:m-6">
      <div className="flex justify-between items-center bg-white p-2 rounded-lg shadow">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-800"
        >
          <FaArrowLeft className="mr-2" />
          <span>Back</span>
        </button>
        <span></span>
      </div>
      <div className="p-6 rounded-lg shadow">
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
          <div className="lg:w-3/5 bg-white p-6 rounded-lg shadow text-gray-800">
            <h2 className="text-xl font-semibold mb-4">
              Audi E-tron GT XR Details
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <p className="text-sm">
                <strong>Brand:</strong>
                <p className="mt-2 border p-1 rounded-lg text-gray-500">Audi</p>
              </p>
              <p className="text-sm">
                <strong>Model:</strong>
                <p className="mt-2 border p-1 rounded-lg text-gray-500">
                  E-tron GT XR
                </p>
              </p>
              <p className="text-sm">
                <strong>Fuel:</strong>
                <p className="mt-2 border p-1 rounded-lg text-gray-500">Auto</p>
              </p>
              <p className="text-sm">
                <strong>Car No.:</strong>
                <p className="mt-2 border p-1 rounded-lg text-gray-500">
                  UK23AJ403
                </p>
              </p>
              <p className="text-sm">
                <strong>Transmission:</strong>
                <p className="mt-2 border p-1 rounded-lg text-gray-500">
                  Electric
                </p>
              </p>
              <p className="text-sm">
                <strong>Capacity:</strong>
                <p className="mt-2 border p-1 rounded-lg text-gray-500">
                  4 Persons
                </p>
              </p>
              <p className="text-sm">
                <strong>Status:</strong>
                <p className="mt-2 border p-1 rounded-lg text-gray-500">
                  Available
                </p>
              </p>
              <p className="text-sm">
                <strong>Price (per day):</strong>
                <p className="mt-2 border p-1 rounded-lg text-gray-500">$200</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCar;
