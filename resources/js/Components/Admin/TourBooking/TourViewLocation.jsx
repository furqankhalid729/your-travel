import {
  FaArrowLeft,
  FaCheck,
  FaEdit,
  FaParking,
  FaSave,
  FaSwimmingPool,
  FaTimes,
  FaWifi,
} from "react-icons/fa";

// import mapImg from "../../assets/map.png";
import { BiCoffee } from "react-icons/bi";
import { FaTv } from "react-icons/fa6";
import { Link } from "@inertiajs/react";
// import { useNavigate } from "react-router-dom";

const TourViewLocation = () => {
  // const navigate = useNavigate();
  const itinerary = [
    {
      day: "Day 01",
      title: "Arrival – Lake Lucerne",
      description:
        "Upon arrival at Karachi’s Quaid-e-Azam Airport, we will be transferred to a carefully chosen hotel. After settling in, we embark on a short panoramic tour of the city, taking in its vibrant atmosphere. Our first stop is the iconic Mausoleum of Muhammad Ali Jinnah, a tribute to the founder of Pakistan. We then visit the Masjid-i Toba Mosque, Empress Market, The Mohatta Palace, and the National Museum, immersing ourselves in Karachi’s rich history and culture.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkVFDr_2jI_mSLbePjBRY9gmUJgr-fHG1PfA&s",
    },
    {
      day: "Day 02",
      title: "Beckenried",
      description:
        "Upon arrival at Karachi’s Quaid-e-Azam Airport, we will be transferred to a carefully chosen hotel. After settling in, we embark on a short panoramic tour of the city, taking in its vibrant atmosphere. Our first stop is the iconic Mausoleum of Muhammad Ali Jinnah, a tribute to the founder of Pakistan. We then visit the Masjid-i Toba Mosque, Empress Market, The Mohatta Palace, and the National Museum, immersing ourselves in Karachi’s rich history and culture.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Sydney_skyline_from_the_north_aerial_2010.jpg/800px-Sydney_skyline_from_the_north_aerial_2010.jpg",
    },
    {
      day: "Day 03",
      title: "Weggis",
      description:
        "Begin your journey with a warm welcome at Lake Lucerne. Explore the stunning lakeside views and soak in the serene atmosphere as you prepare for an unforgettable adventure.Upon arrival at Karachi’s Quaid-e-Azam Airport, we will be transferred to a carefully chosen hotel. After settling in, we embark on a short panoramic tour of the city, taking in its vibrant atmosphere. Our first stop is the iconic Mausoleum of Muhammad Ali Jinnah, a tribute to the founder of Pakistan.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkVFDr_2jI_mSLbePjBRY9gmUJgr-fHG1PfA&s",
    },
    {
      day: "Day 04",
      title: "Rutli",
      description:
        "Conclude your tour with a visit to Beckenried, a charming lakeside village known for its breathtaking vistas and peaceful ambiance.Begin your journey with a warm welcome at Lake Lucerne. Explore the stunning lakeside views and soak in the serene atmosphere as you prepare for an unforgettable adventure.Upon arrival at Karachi’s Quaid-e-Azam Airport, we will be transferred to a carefully chosen hotel. After settling in.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Sydney_skyline_from_the_north_aerial_2010.jpg/800px-Sydney_skyline_from_the_north_aerial_2010.jpg",
    },
  ];

  return (
    <div className="space-y-3 p-3 lg:p-5 bg-white m-3 lg:m-5">
      <div className="flex justify-between items-center">
        <Link
          href="/dashboard/tour-booking"
          // onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-800"
        >
          <FaArrowLeft className="mr-2" />
          <span>Back</span>
        </Link>
        <div className="flex space-x-2">
          <button className="flex items-center bg-[#e4baff] text-white px-3 py-1 rounded-md">
            <FaEdit className="mr-1" />
            Edit
          </button>
          <button className="flex items-center bg-[#e4baff] text-white px-3 py-1 rounded-md">
            <FaSave className="mr-1" />
            Save
          </button>
        </div>
      </div>
      <h1 className="text-2xl font-semibold text-gray-800">
        Lake Lucerne : Bodies of water
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-2 row-span-2">
          <img
            src="https://cdn.britannica.com/36/145836-050-5F793639/basins-Lake-Uri-one-Switzerland-Lucerne.jpg"
            alt="Room 1"
            className="w-full h-auto rounded-md shadow object-cover"
          />
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYjPFzvNhOnHBQpqMkhtfVhEJClfs5wdSMnA&s"
            alt="Room 2"
            className="w-full h-auto rounded-md shadow"
          />
        </div>
        <div className="relative">
          <img
            src="/storage/images/map.png"
            alt="Map"
            className="w-full h-auto rounded-md shadow"
          />
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#e0bafb] rounded-lg text-white px-3 py-2">
            Show on map
          </button>
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUTKvj-lLn251xHxgqwh4sP2QVU-B84MtUjA&s"
            alt="Room 3"
            className="w-full h-auto rounded-md shadow"
          />
        </div>
        <div className="bg-[#e6c0ff] p-4 rounded-md shadow lg:row-span-2">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Details</h3>
          <ul className="space-y-5">
            <li className="flex justify-between">
              <span>Duration</span> 4 days
            </li>
            <li className="flex justify-between">
              <span>Location</span> Lahore
            </li>
            <li className="flex justify-between">
              <span>Food</span> 2 Times a day
            </li>
            <li className="flex justify-between">
              <span>Food Types</span> Family tour
            </li>
            <li className="flex justify-between">
              <span>Person</span> 3 Person
            </li>
            <li className="flex justify-between">
              <span>Price(per head)</span> $200
            </li>
          </ul>
        </div>
        <div className="flex flex-col lg:flex-row space-x-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLS_3WWCLJEHOWIZoHfLc9n0lAsT-nmji0gw&s"
            alt="Room 4"
            className="rounded-md shadow"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5vMc9YUmRzPViGV7fjmUirPUZc990pZo52g&s"
            alt="Room 5"
            className="rounded-md shadow"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb0X6MNqjAoDoHfpRSrz0FRkxPzipp90ixAA&s"
            alt="Room 6"
            className="rounded-md shadow"
          />
        </div>
      </div>
      <h1 className="text-2xl font-semibold text-gray-800 pt-5">Summary</h1>
      <p className="text-sm text-gray-600 pb-4">
        Start and end in San Francisco! With the in-depth cultural tour Northern
        California Summer 2024, you have a 6 day tour package taking you through
        San Francisco, USA and 9 other destinations in USA. Northern California
        Summer 2024 includes accommodation as well as an expert guide, meals,
        transport and more.
      </p>
      <h1 className="text-2xl font-semibold text-gray-800">Facilities</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        <p className="flex items-center gap-2 p-4">
          <span className="text-[#e4baff]">
            <FaWifi />
          </span>{" "}
          Free Wifi
        </p>
        <p className="flex items-center gap-2 p-4">
          <span className="text-[#e4baff]">
            <BiCoffee />
          </span>{" "}
          Coffee & Tea
        </p>
        <p className="flex items-center gap-2 p-4">
          <span className="text-[#e4baff]">
            <FaParking />
          </span>{" "}
          Parking
        </p>
        <p className="flex items-center gap-2 p-4">
          <span className="text-[#e4baff]">
            <FaSwimmingPool />
          </span>{" "}
          Swimming Pool
        </p>
        <p className="flex items-center gap-2 p-4">
          <span className="text-[#e4baff]">
            <FaTv />
          </span>{" "}
          TV
        </p>
      </div>
      <h1 className="text-2xl font-semibold text-gray-800">
        Included/Excluded
      </h1>
      <div className="grid grid-cols-2 gap-2">
        <p className="flex items-center gap-2 p-1">
          <span className="text-[#e4baff]">
            <FaCheck />
          </span>{" "}
          Specialized bilingual guide
        </p>
        <p className="flex items-center gap-2 p-1">
          <span className="text-[#e4baff]">
            <FaTimes />
          </span>{" "}
          Additional Services
        </p>
        <p className="flex items-center gap-2 p-1">
          <span className="text-[#e4baff]">
            <FaCheck />
          </span>{" "}
          Entrance fees (Cable and car and Moon Valley)
        </p>
        <p className="flex items-center gap-2 p-1">
          <span className="text-[#e4baff]">
            <FaTimes />
          </span>{" "}
          Drink
        </p>
        <p className="flex items-center gap-2 p-1">
          <span className="text-[#e4baff]">
            <FaCheck />
          </span>{" "}
          Private Transport
        </p>
        <p className="flex items-center gap-2 p-1">
          <span className="text-[#e4baff]">
            <FaTimes />
          </span>{" "}
          Insurance
        </p>
        <p className="flex items-center gap-2 p-1">
          <span className="text-[#e4baff]">
            <FaCheck />
          </span>{" "}
          Box lunch water, banana apple and chocolate
        </p>
        <p className="flex items-center gap-2 p-1">
          <span className="text-[#e4baff]">
            <FaTimes />
          </span>{" "}
          Tickets
        </p>
      </div>
      <div>
        <h1 className="text-2xl font-semibold text-gray-800 pt-5 mb-3">
          Condition
        </h1>
        <p>
          Booking possible 48 hours prior departure. Cancellation up to 48 hours
          before (9 AM – 2 days prior): Free of charge. Afterwards: No refund.
          With medical certificate / flight proof: CHF 10.00 cancellation fee.
          Rebooking: Free of charge. If there are fewer than 15 registrations 48
          hours before departure, the excursion will be cancelled, and a full
          refund will be issued.
        </p>
      </div>
      <div className="py-10">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Tour Itinerary
        </h1>
        <div className="space-y-6">
          {itinerary.map((item, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-4/5 pr-4 pb-4 lg:pb-0">
                <h1 className="text-lg font-semibold text-gray-800">
                  {item.day}:
                </h1>
                <h1 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h1>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
              <div className="lg:w-1/5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto rounded-md shadow object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourViewLocation;
