import React, { useState } from "react";
import { FaSignInAlt, FaSignOutAlt, FaRegClipboard } from "react-icons/fa";

const RulesPolicy = () => {
  const [activeTab, setActiveTab] = useState("smokingFree");

  const items = [
    { icon: <FaSignInAlt className="text-red-500 w-5 h-5" />, text: "Check In" },
    { icon: <FaSignOutAlt className="text-red-500 w-5 h-5" />, text: "Check Out" },
    { icon: <FaRegClipboard className="text-red-500 w-5 h-5" />, text: "Policy" },
  ];

  const tabs = [
    { key: "smokingFree", label: "SMOKING-FREE" },
    { key: "candlesOils", label: "CANDLE, INCENSE, ESSENTIAL OILS" },
    { key: "reservations", label: "GUARANTEED RESERVATIONS" },
  ];

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-6">Rules & Policy</h2>

      {/* Check-In/Out Policy Icons */}
      <div className="w-2/6 mb-8">
        {items.map((item, index) => (
          <div className="flex items-center gap-4 mb-1 md:mb-4 text-[8px] md:text-sm" key={index}>
            {item.icon}
            <p className="font-semibold">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Tab Navigation */}
      <div className=" block sm:flex justify-center mb-8  space-y-2" >
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 font-semibold ${activeTab === tab.key
                ? "text-white bg-red-500"
                : "text-gray-700 bg-gray-200 hover:bg-gray-300"
              } rounded-lg mx-2`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="text-gray-700 text-sm md:text-base">
        {activeTab === "smokingFree" && (
          <div>
            <p className="font-bold mb-4">SMOKING-FREE</p>
            <p className="text-base">
              Mantasaly Resort has been Smoking-Free since the opening in August
              2016. For safety and to assure that our facility is not exposed to
              items or actions that create an odor which is unhealthy and
              objectionable to our guests and staff, and that is difficult to
              remove from the air, carpet, walls, and furniture we do not permit
              smoking tobacco, marijuana, illegal drugs, e-cigarettes, vape
              pens, and other substances. Notify Front Desk staff immediately
              if objectionable odors are noticed.
            </p>
          </div>
        )}

        {activeTab === "candlesOils" && (
          <div>
            <p className="font-bold mb-4">CANDLE, INCENSE, ESSENTIAL OILS</p>
            <p className="text-base">
              Candle, incense, essential oils (diffusing, vaporizing, etc.) are
              prohibited. These activities will be treated as smoking, fines
              accessed, and may lead to eviction without refunds. Open fires,
              barbecue grills, or fireworks are not allowed anywhere on hotel
              property.
            </p>
          </div>
        )}

        {activeTab === "reservations" && (
          <div>
            <p className="font-bold mb-4">GUARANTEED RESERVATIONS</p>
            <p className="text-base">
              All reservations must be guaranteed with a deposit account. A 50%
              deposit is charged at booking, and the remaining 50% at check-in.
              Cancellations must be made 72 hours in advance to avoid a
              one-night penalty.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RulesPolicy;
