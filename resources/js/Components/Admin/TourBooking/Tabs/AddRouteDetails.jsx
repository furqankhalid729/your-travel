import React from 'react'
import HotelLocationPicker from "../../../HotelLocationPicker";


const AddRouteDetails = ({ cars, data, setData, handleInputChange }) => {
    console.log(cars)
    return (
        <div className='w-[96%] mx-auto'>
            <h3 className='font-[400] text-[24px] mb-5'>Add Route Details</h3>
            <div className='w-full flex gap-6'>
                <div className='w-[40%] flex flex-col gap-2'>
                    <div>
                        <label htmlFor="transporttime" className='pl-1 font-[400] text-[14px]'>Transport Time</label>
                        <input type="time" name='transport_time' className='w-full py-3 px-4 rounded-xl outline-none' value={data.transport_time} onChange={handleInputChange} />
                    </div>
                    <div className='flex justify-between items-center'>
                        <label htmlFor="transprovider" className='pl-1 font-[400] text-[14px]'>Transport Provider</label>
                        <select>
                            {cars.map((car) => (
                                <option key={car.id} value={car.id}>
                                    {car.car_name}
                                </option>
                            ))}
                        </select>
                        {/* <input type="text" name='transport_provider' className='w-full py-3 px-4 rounded-xl outline-none' value={data.transport_provider} onChange={handleInputChange} /> */}
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <div className='flex gap-2 items-center justify-between'>
                            <label htmlFor="Startlocation" className='pl-1 font-[400] text-[14px] text-nowrap'>Start Location</label>
                            <HotelLocationPicker value={data.start_location} name="start_location" handleInputChange={handleInputChange} />
                        </div>
                        <div className='flex gap-2 items-center justify-between'>
                            <label htmlFor="Endlocation" className='pl-1 font-[400] text-[14px] text-nowrap'>End Location</label>
                            <HotelLocationPicker value={data.end_location} name="end_location" handleInputChange={handleInputChange} />
                        </div>
                    </div>
                </div>
                {/* map */}
                <div></div>
            </div>
            {/* Trip Information */}
            <div className='w-full mx-auto  my-6'>

                <div className='grid grid-cols-4 gap-5'>
                    <div className='flex flex-col'>
                        <label htmlFor="tripName" className='text-[18px] font-[400]'>Start Date/Time</label>
                        <input type="date" id='tripName' className='border border-[#808080] rounded-xl px-4 py-3 font-[400] text-[18px] text-[#808080] outline-none' name='start_date' value={data.start_date} onChange={handleInputChange} />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="tripName" className='text-[18px] font-[400]'>End Date/Time</label>
                        <input type="date" id='tripName' className='border border-[#808080] rounded-xl px-4 py-3 font-[400] text-[18px] text-[#808080] outline-none' name='end_date' value={data.end_date} onChange={handleInputChange} />
                    </div>
                    {/* <div className='flex flex-col'>
                        <label htmlFor="tripName" className='text-[18px] font-[400]'>Duration/Time</label>
                        <input type="text" id='tripName' className='border border-[#808080] rounded-xl px-4 py-3 font-[400] text-[18px] text-[#808080] outline-none' placeholder='Text here' name='trip_duration' value={data.trip_duration} onChange={handleInputChange}/>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="tripName" className='text-[18px] font-[400]'>Estimated Date/Time</label>
                        <input type="text" id='tripName' className='border border-[#808080] rounded-xl px-4 py-3 font-[400] text-[18px] text-[#808080] outline-none' placeholder='Text here' name='estimated_time' value={data.estimated_time} onChange={handleInputChange}/>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default AddRouteDetails
