import { FaCogs, FaUserAlt } from "react-icons/fa";
import { FaCar, FaSnowflake, FaSuitcase } from "react-icons/fa6";
import { MdArrowBackIos } from "react-icons/md";
// import { useNavigate } from "react-router-dom";

const TourDraftPage = () => {
  // const navigate = useNavigate();
  return (
    <div className="m-3 lg:m-6 p-2 bg-white">
      <button
        onClick={() => navigate(-1)}
        className="text-gray-600 hover:text-gray-800 p-2 mb-2"
      >
        <MdArrowBackIos />
      </button>
      <div className="flex flex-col lg:flex-row lg:space-x-5">
        <div className="lg:w-[36%] space-y-6">
          <div className="p-4 rounded-lg border">
            <p className="text-sm text-gray-500">Business Class</p>
            <h3 className="text-lg font-semibold text-gray-800">
              Audi A4 2022
            </h3>
            <p className="text-sm text-gray-500">Lahore, Punjab, Pakistan</p>
            <p className="text-sm text-gray-500">Great choice</p>
            <p className="flex items-center gap-2 my-3">
              <span className="bg-[#2e2532] text-white px-1 py-[3px] rounded-tl-lg rounded-br-lg">
                4.2
              </span>
              <span className="text-sm">Good (2365 reviews)</span>
            </p>
            <div className="grid grid-cols-3 py-2 gap-3">
              <p className="text-sm text-gray-600 flex items-center">
                <FaUserAlt className="mr-2" /> 4 Passengers
              </p>
              <p className="text-sm text-gray-600 flex items-center">
                <FaCar className="mr-2" /> Auto
              </p>
              <p className="text-sm text-gray-600 flex items-center">
                <FaCogs className="mr-2" /> 4 Seats
              </p>
              <p className="text-sm text-gray-600 flex items-center">
                <FaSnowflake className="mr-2" /> AC
              </p>
              <p className="text-sm text-gray-600 flex items-center">
                <FaSuitcase className="mr-2" /> Luggage
              </p>
            </div>
          </div>
          <div className="p-4 rounded-lg border">
            <h3 className="text-lg font-semibold text-gray-800">
              Your Booking Detail
            </h3>
            <div className="flex items-center gap-5 my-4">
              <div>
                <h1>Start Date:</h1>
                <div className="border rounded-lg px-2">
                  <p className="text-sm font-semibold border-r pr-5">
                    01 Jan 2024
                  </p>
                  <span className="text-sm">From 12:00 AM</span>
                </div>
              </div>
              <div>
                <h1>End Date:</h1>
                <div className="border rounded-lg px-2">
                  <p className="text-sm font-semibold border-r pr-5">
                    01 Sept 2024
                  </p>
                  <span className="text-sm">From 12:00 AM</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600">Total Length of Stay:</p>
            <p className="font-semibold">3 Days 2 Night</p>
          </div>
          <div className="p-4 rounded-lg border space-y-2">
            <h3 className="text-lg font-semibold text-gray-800">
              Price Summary
            </h3>
            <p className="flex justify-between text-sm text-gray-600">
              Car Charges: <span>$100</span>
            </p>
            <p className="flex justify-between text-sm text-gray-600">
              Service Charges: <span>$50</span>
            </p>
            <p className="flex justify-between text-sm text-gray-600">
              GST Tax: <span>$30</span>
            </p>
            <p className="border-t pt-2 border-black flex justify-between text-sm text-gray-600">
              Total Price of 3 Days: <span>$180</span>
            </p>
          </div>
          <div className="p-4 rounded-lg border">
            <h3 className="text-lg font-semibold text-gray-800 pb-3">
              Do you have a promo code?
            </h3>
            <div className="space-y-2">
              <p>Enter Promo code</p>
              <input
                type="text"
                className="p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"
                placeholder="Enter promo code"
              />
              <button className="px-4 py-2 bg-[#2e2532] text-white rounded-lg">
                Apply
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-[64%] space-y-6">
          <div className="p-4 lg:p-6 rounded-lg border">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Enter Your Details
            </h3>
            <form className="space-y-4">
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block text-sm  text-gray-500">
                    First Name*
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm  text-gray-500">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm  text-gray-500">
                  Enter your email*
                </label>
                <input
                  type="email"
                  className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Email verification is sent to this address.
                </p>
              </div>
              <div>
                <label className="block text-sm  text-gray-500">
                  Identification number*
                </label>
                <input
                  type="text"
                  className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"
                />
              </div>
              <h3 className="text-lg font-semibold border-t pt-3 text-gray-800 mb-4">
                Your address
              </h3>
              <div>
                <label className="block text-sm  text-gray-500">Address*</label>
                <input
                  type="text"
                  className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"
                />
              </div>
              <div>
                <label className="block text-sm  text-gray-500">City*</label>
                <input
                  type="text"
                  className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"
                />
              </div>
              <div>
                <label className="block text-sm  text-gray-500">
                  Zip/Postal Code*
                </label>
                <input
                  type="text"
                  className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"
                />
              </div>
              <div>
                <label className="block text-sm  text-gray-500">
                  Country/Region*
                </label>
                <input
                  type="text"
                  className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"
                />
              </div>
              <div>
                <div className="w-1/3">
                  <label className="block text-sm text-gray-500">
                    Phone Number*
                  </label>
                </div>
                <div className="flex w-2/3 space-x-2">
                  <select className="w-1/3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]">
                    <option value="+92">+92</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                  </select>
                  <input
                    type="text"
                    className="w-2/3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm text-gray-500">
                  Save my details so I can book faster next time
                </label>
              </div>
              <div className="border-b pb-4 mt-4 space-y-3">
                <h3 className="text-lg font-semibold text-gray-800">
                  How would you like to pay?
                </h3>
                <div>
                  <label className="block text-sm  text-gray-500">
                    Cardholder’s Name*
                  </label>
                  <input
                    type="text"
                    className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"
                  />
                </div>
                <div>
                  <label className="block text-sm  text-gray-500">
                    Card Type*
                  </label>
                  <select className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]">
                    <option value="visa">Visa</option>
                    <option value="mastercard">Mastercard</option>
                    <option value="amex">American Express</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm  text-gray-500">
                    Card Number*
                  </label>
                  <input
                    type="text"
                    className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm  text-gray-500">
                      Expiry Date*
                    </label>
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"
                        placeholder="MM"
                      />
                      <input
                        type="text"
                        className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"
                        placeholder="YY"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm  text-gray-500">CVC*</label>
                  <input
                    type="text"
                    className="w-1/3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb8dd9]"
                    placeholder="CVC"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm text-gray-500">
                  You agree with our{" "}
                  <a href="/terms" className="text-blue-600">
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a href="/privacy" className="text-blue-600">
                    Privacy Statement
                  </a>
                  .
                </label>
              </div>
              <div className="flex justify-end">
                <button className="py-2 px-3 bg-[#2e2532] text-white rounded-lg mt-4">
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDraftPage;
