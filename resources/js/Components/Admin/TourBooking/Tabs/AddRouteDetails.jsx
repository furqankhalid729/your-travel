import React from 'react'



const AddRouteDetails = ({ data, setData, handleInputChange }) => {
    return (
        <div className='w-[96%] mx-auto'>
            <h3 className='font-[400] text-[24px] mb-5'>Add Route Details</h3>
            <div className='w-full flex gap-6'>
                <div className='w-[40%] flex flex-col gap-2'>
                    <div>
                        <label htmlFor="transporttime" className='pl-1 font-[400] text-[14px]'>Transport Time</label>
                        <input type="time" name='transport_time' className='w-full py-3 px-4 rounded-xl outline-none' value={data.transport_time} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label htmlFor="transprovider" className='pl-1 font-[400] text-[14px]'>Transport Provider</label>
                        <input type="text" name='transport_provider' className='w-full py-3 px-4 rounded-xl outline-none' value={data.transport_provider} onChange={handleInputChange} />
                    </div>
                    <div className='w-[75%] flex flex-col gap-2'>
                        <div className='flex gap-2 items-center justify-between'>
                            <label htmlFor="Startlocation" className='pl-1 font-[400] text-[14px] text-nowrap'>Start Location</label>
                            <input type="text" name='start_location' className=' py-3 px-4 rounded-xl outline-none ' placeholder='Type Here' value={data.start_location} onChange={handleInputChange} />
                        </div>
                        <div className='flex gap-2 items-center justify-between'>
                            <label htmlFor="Endlocation" className='pl-1 font-[400] text-[14px] text-nowrap'>End Location</label>
                            <input type="text" name='end_location' className=' py-3 px-4 rounded-xl outline-none ' placeholder='Type Here' value={data.end_location} onChange={handleInputChange} />
                        </div>
                    </div>
                </div>
                {/* map */}
                <div></div>
            </div>
            {/* Trip Information */}
            <div className='w-full mx-auto  my-6'>
                <div className=' mb-4 flex items-center gap-2'>
                    <h2 className='text-[20px] font-[600]'>Trip Information</h2>
                    <div>
                        <input type="checkbox" className='rounded' />
                        <label htmlFor="tripInfo" className='pl-2 font-[400] text-[14px]'>Calculate automatically</label>
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-5'>
                    <div className='flex flex-col'>
                        <label htmlFor="tripName" className='text-[18px] font-[400]'>Start Date/Time</label>
                        <input type="date" id='tripName' className='border border-[#808080] rounded-xl px-4 py-3 font-[400] text-[18px] text-[#808080] outline-none' name='start_date' value={data.start_date} onChange={handleInputChange}/>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="tripName" className='text-[18px] font-[400]'>End Date/Time</label>
                        <input type="date" id='tripName' className='border border-[#808080] rounded-xl px-4 py-3 font-[400] text-[18px] text-[#808080] outline-none' name='end_date' value={data.end_date} onChange={handleInputChange}/>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="tripName" className='text-[18px] font-[400]'>Duration/Time</label>
                        <input type="text" id='tripName' className='border border-[#808080] rounded-xl px-4 py-3 font-[400] text-[18px] text-[#808080] outline-none' placeholder='Text here' name='trip_duration' value={data.trip_duration} onChange={handleInputChange}/>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="tripName" className='text-[18px] font-[400]'>Estimated Date/Time</label>
                        <input type="text" id='tripName' className='border border-[#808080] rounded-xl px-4 py-3 font-[400] text-[18px] text-[#808080] outline-none' placeholder='Text here' name='estimated_time' value={data.estimated_time} onChange={handleInputChange}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddRouteDetails
