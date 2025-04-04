import React, { useState } from 'react'
import DetailsTab from './Tabs/DetailsTab';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import AddRouteDetails from './Tabs/AddRouteDetails';
import TimeLine from './Tabs/TimeLine';
import PricingTab from './Tabs/PricingTab';

const tripInfoData = [
    { title: "Duration" },
    { title: "Persons" },
    { title: "Slots" },
    { title: "Price" },
]

const steps = [
    { number: 1, label: "Details" },
    { number: 2, label: "Planner" },
    { number: 3, label: "Timeline" },
    { number: 4, label: "Pricing" },
];

const TabsTours = () => {
    const [currentPage, setCurrentPage] = useState(1);
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
                    {tripInfoData.map((item, index) => (
                        <div key={index} className='flex flex-col'>
                            <label htmlFor="tripName" className='text-[18px] font-[400]'>{item.title}</label>
                            <input type="text" id='tripName' className='border border-[#808080] rounded-xl px-3 py-1 font-[400] text-[18px] text-[#808080] outline-none' />
                        </div>
                    ))}
                </div>
            </div>

            {/* Tabs */}
            <div>
                {currentPage === 1 && (
                    <DetailsTab />
                )}
                {currentPage === 2 && (
                    <AddRouteDetails />
                )}
                {currentPage === 3 && (
                    <TimeLine />
                )}
                {currentPage === 4 && (
                    <PricingTab />
                )}
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

            </div>
        </div>
    )
}

export default TabsTours
