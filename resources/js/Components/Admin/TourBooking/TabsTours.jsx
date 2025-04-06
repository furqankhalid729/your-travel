import React, { useState } from 'react'
import { useForm, router } from "@inertiajs/react";
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import DetailsTab from './Tabs/DetailsTab';
import AddRouteDetails from './Tabs/AddRouteDetails';
import TimeLine from './Tabs/TimeLine';
import PricingTab from './Tabs/PricingTab';

const steps = [
    { number: 1, label: "Details" },
    { number: 2, label: "Planner" },
    { number: 3, label: "Timeline" },
    { number: 4, label: "Pricing" },
];

const TabsTours = ({cars}) => {
    const [currentPage, setCurrentPage] = useState(1);

    // Handel input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
        // If the input is for facilities, store it as a string
        if (name === "facilities") {
            setData(name, value);
        } else {
            setData(name, value);
        }
    };

    // Function to handle adding a new image
    const handleAddImage = () => {
        setData("tour_images", [...data.tour_images, { file: null }]);
    };

    // Function to handle removing an image
    const handleRemoveImage = (indexToRemove) => {
        const updatedImages = data.tour_images.filter((_, index) => index !== indexToRemove);
        setData("tour_images", updatedImages);
    };

    // Function to handle image file selection
    const handleImageChange = (index, event) => {
        const file = event.target.files[0];
        const updatedImages = [...data.tour_images];
        updatedImages[index] = { file };
        setData("tour_images", updatedImages);
    };

    const { data, setData, post, processing, errors } = useForm({
        duration: "",
        persons: 5,
        slots: "",
        price: 0,

        name: "",
        keywords: "",
        facilities: [],
        includedExcludedTypes: [],
        description: "",
        tour_images: [],

        transport_time: "",
        transport_provider: "",
        start_location: "",
        end_location: "",
        start_date: "",
        end_date: "",
        trip_duration: "",
        estimated_time: "",

        tour_itinerary: [],

        adult: 0,
        adult_cost: 0,
        adult_margin: 0,
        adult_total_price: 0,
        child: 0,
        child_cost: 0,
        child_margin: 0,
        child_total_price: 0,

        food: "food",
        tour_type: "tour_type",
        condition: "condition"
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("duration", data.duration);
        formData.append("persons", data.persons);
        formData.append("slots", data.slots);
        formData.append("price", data.price);
        formData.append("name", data.name);
        formData.append("keywords", data.keywords);
        formData.append("summary", data.description);
        formData.append("transport_time", data.transport_time);
        formData.append("transport_provider", data.transport_provider);
        formData.append("location", data.start_location);

        formData.append("start_location", data.start_location);
        formData.append("end_location", data.end_location);
        formData.append("start_date", data.start_date);
        formData.append("end_date", data.end_date);
        formData.append("trip_duration", data.trip_duration);
        formData.append("estimated_time", data.estimated_time);
        formData.append("adults", data.adult);
        formData.append("adult_cost", data.adult_cost);
        formData.append("adult_margin", data.adult_margin);
        formData.append("adult_total_price", data.adult_total_price);
        formData.append("children", data.child);
        formData.append("child_cost", data.child_cost);
        formData.append("child_margin", data.child_margin);
        formData.append("child_total_price", data.child_total_price);
        // const facilitiesArray = (data.facilities || "")
        //     .split(",")
        //     .map((facility) => facility.trim())
        //     .filter((facility) => facility !== "");
        formData.append("facilities", JSON.stringify(data.facilities));
        formData.append("includedExcludedTypes", JSON.stringify(data.includedExcludedTypes));

        data.tour_images.forEach((imageFile) => {
            formData.append("tour_images[]", imageFile.file);
        });
        formData.append("tour_itinerary", JSON.stringify(data.tour_itinerary));

        formData.append("food", "food");
        formData.append("tour_type", "tour_type");
        formData.append("condition", "condition");

        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
        try {
            router.post("/api/tour/add-tour", formData, {
                forceFormData: true,
                onSuccess: () => {
                    setMessage("tour added successfully!");
                },
            });
        } catch (error) {
            console.error("Error while adding tour:", error);
            setMessage("An error occurred while adding the tour.");
        }
    };

    return (
        <div className=" p-5 bg-white m-5">
            {/* Step Number div */}
            <div className='w-full mb-7 sm:w-[70%] mx-auto '>
                <div className='flex justify-between items-center gap-2 font-[600] text-[24px] leading-[29px]'>
                    {steps.map((step, index) => (
                        <div key={index} className='flex items-center gap-2'>
                            {/* Step Circle */}
                            <div className='flex flex-col items-center gap-1'>
                                <span
                                    className={`grid place-items-center w-[50px] h-[50px] rounded-full ${currentPage === step.number ? 'bg-black text-white' : 'border border-[#808080]'
                                        }`}
                                >
                                    {step.number}
                                </span>
                                <p className='font-[400] text-[14px] leading-[16px] text-[#808080]'>{step.label}</p>
                            </div>
                            {/* Line Between Steps */}
                            {index < steps.length - 1 && (
                                <div className='xl:w-[180px] w-[120px] border-t-[2px] mb-4 border-dashed border-[#808080]'></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Trip Information */}
            <div className='w-full mx-auto mb-7 bg-white rounded-lg shadow-xl border px-5 py-3'>
                <h2 className='text-[20px] font-[600] mb-4'>Trip Information</h2>
                <div className='grid grid-cols-4 gap-5'>
                    <div className='flex flex-col'>
                        <label htmlFor="duration" className='text-[18px] font-[400]'>Duration</label>
                        <input type="text" name='duration' className='border border-[#808080] rounded-xl px-3 py-1 font-[400] text-[18px] text-[#808080] outline-none' value={data.duration} onChange={handleInputChange} />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="persons" className='text-[18px] font-[400]'>Persons</label>
                        <input type="text" name='persons' className='border border-[#808080] rounded-xl px-3 py-1 font-[400] text-[18px] text-[#808080] outline-none' value={data.persons} onChange={handleInputChange} />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="slots" className='text-[18px] font-[400]'>Slots</label>
                        <input type="text" name='slots' className='border border-[#808080] rounded-xl px-3 py-1 font-[400] text-[18px] text-[#808080] outline-none' value={data.slots} onChange={handleInputChange} />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="price" className='text-[18px] font-[400]'>Price</label>
                        <input type="text" name='price' className='border border-[#808080] rounded-xl px-3 py-1 font-[400] text-[18px] text-[#808080] outline-none' value={data.price} onChange={handleInputChange} />
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div>
                {currentPage === 1 && <DetailsTab data={data} setData={setData} handleInputChange={handleInputChange} />}
                {currentPage === 2 && <AddRouteDetails cars={cars} data={data} setData={setData} handleInputChange={handleInputChange} />}
                {currentPage === 3 && <TimeLine data={data} setData={setData} handleInputChange={handleInputChange} />}
                {currentPage === 4 && <PricingTab data={data} setData={setData} handleInputChange={handleInputChange} />}
            </div>

            {/* btns */}
            <div className={`flex ${currentPage === 1 ? "justify-end" : "justify-between"} items-center my-5`}>
                {currentPage > 1 && (
                    <button onClick={() => setCurrentPage(currentPage - 1)} className='bg-black flex items-center justify-center px-4 py-2 rounded-xl gap-1 text-white text-[20px]'>
                        <FaArrowLeftLong className='text-white' /> Previous
                    </button>
                )}
                {currentPage < 4 && (
                    <button onClick={() => setCurrentPage(currentPage + 1)} className='bg-black flex items-center justify-center px-4 py-2 rounded-xl gap-1 text-white text-[20px]'>
                        Next <FaArrowRightLong className='text-white' />
                    </button>
                )}

                {currentPage === 4 && (
                    <button onClick={handleSubmit} className='bg-black flex items-center justify-center px-4 py-2 rounded-xl gap-1 text-white text-[20px]'>
                        Submit
                    </button>
                )}

            </div>
        </div>
    )
}

export default TabsTours
