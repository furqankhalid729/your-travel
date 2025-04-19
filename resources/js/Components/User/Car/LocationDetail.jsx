import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaUser, FaCheck } from "react-icons/fa";
export default function LocationDetail({ from, to, startDate, passengers, distance, duration }) {
    const items = [
        "Taxes and Tolls",
        "Flight Monitoring",
        "Waiting Time and Parking",
        "Free Amendments",
        "Free Cancellations",
    ];

    return (
        <>
            <div className="max-w-sm p-4 bg-white rounded-lg shadow-md border">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold text-red-600">Trip Details</h2>

                </div>

                <div className="space-y-3 text-gray-700">
                    <div className="flex items-start gap-2">
                        <FaMapMarkerAlt className="mt-1 text-red-600" />
                        <p>{from}</p>
                    </div>

                    <div className="flex items-start gap-2">
                        <FaMapMarkerAlt className="mt-1 text-red-600" />
                        <p>{to}</p>
                    </div>

                    <hr className="border-red-200" />

                    <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                            <FaCalendarAlt className="text-red-600" />
                            <span>{startDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <FaClock className="text-red-600" />
                            <span>13h·30m</span>
                        </div>
                    </div>

                    <hr className="border-red-200" />

                    <div className="flex items-center gap-2">
                        <FaUser className="text-red-600" />
                        <span>{passengers}</span>
                    </div>
                </div>
            </div>

            <div className="mt-5 max-w-sm p-4 bg-white rounded-lg shadow-md border">
                <h2 className="text-lg font-semibold text-red-600 mb-2">Trip Details</h2>

                <div className="text-gray-700 text-sm mb-2">
                    <p><span className="font-semibold">Transfer Time:</span>{duration}</p>
                    <p><span className="font-semibold">Distance:</span> {distance} km</p>
                </div>

                <div className="rounded overflow-hidden">
                    <iframe
                        className="w-full h-52 rounded"
                        frameBorder="0"
                        src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d55273.26596421353!2d7.57327!3d47.5596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791b9d4f67e3cb1%3A0xa710e279c1d23c6c!2sBasel%20SBB!5e0!3m2!1sen!2sch!4v1646400000000"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>

            <div className="mt-5 max-w-sm p-4 bg-white rounded-lg shadow-md border">
                <h2 className="text-lg font-semibold text-red-600 mb-4">Price included</h2>
                <ul className="space-y-2 text-gray-700">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                            <FaCheck className="text-red-600 mt-1" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}