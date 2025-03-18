import React, { useState } from "react";
import { usePage } from "@inertiajs/react";
import BookingHistory from "./BookingHistory";
import NewBooking from "./NewBooking";
import Favorites from "./Favorites";
import AccountSettings from "./AccountSettings";
function FeaturedProfile() {
  const { auth } = usePage().props;
  const orders = auth.orders;
  console.log(orders)
  const [activeTab, setActiveTab] = useState("history");

  return (
    <>
      <div className="bg-red-600 mx-4 rounded-lg sm:mx-20 mt-12">
        <div className="flex flex-col sm:grid sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 items-center py-4 text-center px-10 justify-center">
          {[
            { id: "history", label: "Booking History" },
            { id: "new", label: "New Booking" },
            { id: "favorites", label: "My Favourites" },
            { id: "settings", label: "Account Setting" },
          ].map((tab) => (
            <button
              key={tab.id}
              className={`py-2 px-4 lg:px-2 font-medium rounded-lg 
                ${activeTab === tab.id ? "bg-white text-red-600" : "hover:bg-gray-100 text-white hover:text-red-600"}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="block max-w-[1250px] mx-auto my-10">
        {activeTab === "history" && <BookingHistory orders={orders} />}
        {activeTab === "new" && <NewBooking orders={orders} />}
        {activeTab === "favorites" && <Favorites />}
        {activeTab === "settings" && <AccountSettings />}
      </div>
    </>
  );
}

export default FeaturedProfile;
