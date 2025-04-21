import {
  FaArrowLeft,
  FaPhone,
  FaRegIdCard,
  FaRegMap,
} from "react-icons/fa6";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import OrderStatusDropdown from "../../OrderStatus";

const BookCarAssignDrivers = ({ order, car, drivers }) => {
  const carItems = order.items.filter(item => item.type === "car");
  const [price, setPrice] = useState(carItems[0].price);
  const additionalInfo = JSON.parse(carItems[0].additional_info);
  console.log(order)
  const [driverName, setDriverName] = useState(() => {
    if (additionalInfo?.driverName) {
      return additionalInfo.driverName;
    } else if (drivers.length > 0 && drivers[0]?.id) {
      return drivers[0].name;
    } else {
      return null;
    }
  });
  const [driverBank, setDriverBank] = useState("Test");
  const [driverId, setDriverId] = useState(() => {
    if (additionalInfo?.driver_id) {
      return additionalInfo.driver_id;
    } else if (drivers.length > 0 && drivers[0]?.id) {
      return drivers[0].id;
    } else {
      return null;
    }
  });

  const openInMaps = () => {
    const encodedLocation = encodeURIComponent(additionalInfo.dropout_location);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;
    window.open(googleMapsUrl, "_blank");
  }
  const assignRider = async () => {
    try {
      const response = await axios.post(route("driver.assign"), {
        driver_id: driverId,
        order_id: order.id,
        price: price,
        driverName: driverName,
        driverBank: driverBank,
        pickupLocation: additionalInfo.pickup_location,
        pickupData: new Date(additionalInfo.pickup_date).toLocaleString(),
        baseFare: carItems[0].price,
      });

      if (response.status === 200) {
        alert("Driver assigned successfully!");
      }
    } catch (error) {
      console.error("Error assigning driver:", error.response?.data || error);
      alert("Failed to assign driver");
    }
  };
  return (
    <div className="mx-4 lg:mx-10 my-3 lg:my-5">
      <div className="flex justify-between items-center p-2">
        <Link
          href="/dashboard/car-booking"
          className="flex items-center text-gray-600 hover:text-gray-800"
        >
          <FaArrowLeft className="mr-2" />
          <span className="text-black">#{order.id}</span>
        </Link>
        <div className="flex items-center gap-5">
          {/* <select
            id="booking"
            className="w-full px-2 py-1 border border-gray-300 bg-[#d9d9d9] rounded-lg focus:outline-none"
          >
            <option value="" disabled selected>
              More Action
            </option>
            <option value="Booking1">Booking 1</option>
          </select> */}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 mt-5">
        <div className="lg:w-[70%] space-y-4">
          <div className="bg-white border p-5 rounded-md">
            <div className="border rounded-md">
              <div className="p-4 border-b">
                <p className="font-semibold">Order</p>
                <p className="text-gray-500">{new Date(order.created_at).toLocaleDateString()}</p>
              </div>
              <div className="flex flex-col lg:flex-row justify-between px-4 pt-2">
                <div className="flex items-center gap-5">
                  <img src="/storage/images/car.png" className="w-16" alt="" />
                  <p>{carItems[0].name} </p>
                </div>
                <div className="flex flex-col lg:flex-row items-center">
                  <p>From :</p>
                  <p className="text-gray-500 border px-1 rounded-lg ml-2">
                    {new Date(additionalInfo.pickup_date).toLocaleString()}
                  </p>

                </div>
              </div>
              <div className="flex justify-center lg:justify-end px-4 pb-2">
                <p>Price: </p>
                <p className="text-gray-500 border px-1 rounded-lg ml-2">
                  ${carItems[0].price}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-1/2 bg-white border p-4 space-y-4">
              <div className="flex gap-1">
                <div>
                  <input
                    id="travel-time"
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                    placeholder="Los Angles Airport"
                    value={additionalInfo.pickup_location}
                    disabled
                  />
                </div>
                <div>
                  <input
                    id="distance"
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                    placeholder="California Airport"
                    value={additionalInfo.dropout_location}
                    disabled
                  />
                </div>
              </div>
              <div>
                <input
                  id="distance"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                  placeholder="$ 300.00 "
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <button className="bg-[#e1baf9] w-full text-white px-4 py-2 rounded-md">
                {additionalInfo?.pricingType === "km" ? (
                  <p>
                    Distance: {additionalInfo?.distance} km
                  </p>
                ) : (
                  <p>
                    Time Duration: {additionalInfo?.time}
                  </p>
                )}
              </button>
            </div>
            <div className="lg:w-1/2 relative">
              <img
                src="/storage/images/map.jpg"
                alt="Map"
                className="w-full rounded-md mb-3 shadow"
              />
              <button onClick={openInMaps} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 bg-[#e0bafb] rounded-lg text-white px-4 py-2">
                <FaRegMap /> Show on map
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-[30%] space-y-4">
          <div className="border p-4 rounded-md bg-white">

            <div className="space-y-2">
              <div>
                <div className="text-sm font-medium">Country Code</div>
                <div className="text-sm text-gray-600">PK</div>
              </div>
              <div>
                <div className="text-sm font-medium">First Name</div>
                <div className="text-sm text-gray-600">{order.first_name}</div>
              </div>
              <div>
                <div className="text-sm font-medium">Last Name</div>
                <div className="text-sm text-gray-600">{order.last_name}</div>
              </div>
              <div>
                <div className="text-sm font-medium">Address</div>
                <div className="text-sm text-gray-600">{order.address}</div>
              </div>
              <div>
                <div className="text-sm font-medium">City</div>
                <div className="text-sm text-gray-600">{order.city}</div>
              </div>
              <div>
                <div className="text-sm font-medium">Email</div>
                <div className="text-sm text-gray-600">{order.email}</div>
              </div>
            </div>
            <div>
              <div className="text-sm font-medium">Phone Number</div>
              <div className="text-sm text-gray-600">{order?.phone_number}</div>
            </div>
            {order?.extras && (
              <div className="mt-4 space-y-1 border-t pt-4">
                <div className="text-sm font-medium text-gray-800">Extras</div>
                <div className="text-sm text-gray-600">Luggage: {order.extras.luggage || 0}</div>
                <div className="text-sm text-gray-600">Baby Seat: {order.extras.baby_seat || 0}</div>
                <div className="text-sm text-gray-600">Child Seat: {order.extras.child_seat || 0}</div>
                <div className="text-sm text-gray-600">Booster Seat: {order.extras.booster_seat || 0}</div>
                {order.extras.additional_info && (
                  <div className="text-sm text-gray-600">Notes: {order.extras.additional_info}</div>
                )}
              </div>
            )}
            <div className="mt-5">
              <OrderStatusDropdown
                orderStatus={order.status}
                orderId={order.id}
              />
            </div>
          </div>

          <div>
            <div className="bg-white border p-5 rounded-md">
              <p className="font-semibold mb-1">Payment Details</p>
              <div className="border rounded-md">
                <div className="font-semibold p-3 space-y-2">
                  <div className="flex justify-between">
                    <p>Car Rent</p> <span>{parseFloat(carItems[0].price * 0.83).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <p>Tax</p> <span>{parseFloat(carItems[0].price * 0.17).toFixed(2)}</span>
                  </div>

                  <p className="font-normal text-gray-500 text-sm text-center">
                    17% Taxes are included now
                  </p>
                </div>
                <div className="border-t p-3 flex justify-between">
                  <p>Total</p> <span>${carItems[0].price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-7 p-4 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:space-x-14">
          {
            drivers.map((driver) => (
              <div className="text-center border rounded-lg p-3">
                <img
                  src={`/storage/${driver.profile_image}`}
                  alt="User"
                  className="w-16 h-16 mx-auto rounded-full object-cover mb-4"
                />
                <h2 className="font-semibold text-gray-800">{driver.name}</h2>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <FaRegIdCard className="text-gray-500" />
                  <p>{driver.license_no}</p>
                </div>
                <div className="flex my-1 items-center justify-center gap-2 text-sm text-gray-500">
                  <FaPhone className="text-gray-500" />
                  <p>{driver.contact_no}</p>
                </div>
                <button onClick={() => { setDriverId(driver.id); setDriverName(driver.name); setDriverBank("test") }} className={`${driverId === driver.id ? 'bg-[#e1baf9]' : 'bg-[#151516]'} rounded-xl text-white px-3`}>
                  Select
                </button>
              </div>
            ))
          }
        </div>
      </div>
      <div className="flex justify-end my-5">
        <button onClick={assignRider} className="bg-[#e1baf9] px-3 py-1 text-white rounded-full">
          Save
        </button>
      </div>
    </div>
  );
};

export default BookCarAssignDrivers;
