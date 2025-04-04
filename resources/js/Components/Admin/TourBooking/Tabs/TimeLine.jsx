import React, { useState } from 'react'
import { FaPlus, FaTrash } from 'react-icons/fa'

const TimeLine = () => {
    const [days, setDays] = useState([{ day: 1, location: '', hotel: '', arrivalTime: '', description: '' }]);

    const addDay = () => {
        setDays([...days, { day: days.length + 1, location: '', hotel: '', arrivalTime: '', description: '' }]);
    };

    const removeDay = (indexToRemove) => {
        const updatedDays = days.filter((_, index) => index !== indexToRemove);
        setDays(updatedDays.map((day, index) => ({ ...day, day: index + 1 }))); // Recalculate day numbers
    };

    return (
        <div className='w-[96%] mx-auto'>
            <h2 className='font-[600] text-[20px] mb-6'>TimeLine</h2>
            {days.map((day, index) => (
                <div key={index} className='flex gap-2 w-full h-full mb-4'>
                    <div className='w-[6%] flex justify-start items-center'>
                        <h6 className='font-[400] text-[16px] text-[#808080]'>Day {day.day < 10 ? `0${day.day}` : day.day}</h6>
                    </div>
                    <div className='w-[50%] bg-white rounded-lg shadow-xl border px-7 py-5 flex flex-col gap-2'>
                        <div className='w-full flex gap-6'>
                            <div>
                                <label htmlFor={`location-${index}`} className='pl-1 font-[400] text-[14px]'>Location</label>
                                <input type="text" id={`location-${index}`} className='w-full py-1 px-4 rounded-xl outline-none' />
                            </div>
                            <div>
                                <label htmlFor={`hotel-${index}`} className='pl-1 font-[400] text-[14px]'>Hotel</label>
                                <input type="text" id={`hotel-${index}`} className='w-full py-1 px-4 rounded-xl outline-none' />
                            </div>
                        </div>
                        <div className='w-[75%] flex items-end gap-6'>
                            <div className='w-[50%]'>
                                <label htmlFor={`arrivalTime-${index}`} className='pl-1 font-[400] text-[14px]'>Arrival Time</label>
                                <input type="text" id={`arrivalTime-${index}`} className='py-1 px-4 rounded-xl outline-none w-full' />
                            </div>
                            <div className='w-[50%]'>
                                <input type="text" id={`departureTime-${index}`} className='py-1 px-4 rounded-xl outline-none w-full' />
                            </div>
                        </div>
                        <div className='w-full'>
                            <label htmlFor={`description-${index}`} className='pl-1 font-[400] text-[14px]'>Description</label>
                            <textarea rows={4} id={`description-${index}`} className='w-full py-3 px-4 rounded-xl outline-none' />
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <button
                                onClick={() => removeDay(index)}
                                className='bg-red-500 text-white px-3 py-1 rounded-xl mt-2 flex items-center gap-1'
                            >
                                <FaTrash /> Remove Day
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            <div className='w-[60%] flex justify-center items-center my-5'>
                <button
                    onClick={addDay}
                    className='bg-black flex items-center justify-center px-4 py-2 rounded-xl gap-1 text-white text-[14px]'
                >
                    <FaPlus className='text-white' /> Add Days
                </button>
            </div>
        </div>
    )
}

export default TimeLine