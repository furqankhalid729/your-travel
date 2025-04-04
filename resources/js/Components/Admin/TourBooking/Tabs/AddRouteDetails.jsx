import React from 'react'

const tripInfoData = [
    { title: "Start Date/Time" },
    { title: "End Date/Time" },
    { title: "Duration" },
    { title: "Estimated Time" },
]

const AddRouteDetails = () => {
    return (
        <div className='w-[96%] mx-auto'>
            <h3 className='font-[400] text-[24px] mb-5'>Add Route Details</h3>
            <div className='w-full flex gap-6'>
                <div className='w-[40%] flex flex-col gap-2'>
                    <div>
                        <label htmlFor="transporttime" className='pl-1 font-[400] text-[14px]'>Transport Time</label>
                        <input type="text" className='w-full py-3 px-4 rounded-xl outline-none' />
                    </div>
                    <div>
                        <label htmlFor="transprovider" className='pl-1 font-[400] text-[14px]'>Transport Provider</label>
                        <input type="text" className='w-full py-3 px-4 rounded-xl outline-none' />
                    </div>
                    <div className='w-[75%] flex flex-col gap-2'>
                        <div className='flex gap-2 items-center justify-between'>
                            <label htmlFor="Startlocation" className='pl-1 font-[400] text-[14px] text-nowrap'>Start Location</label>
                            <input type="text" className=' py-3 px-4 rounded-xl outline-none ' placeholder='Type Here' />
                        </div>
                        <div className='flex gap-2 items-center justify-between'>
                            <label htmlFor="Endlocation" className='pl-1 font-[400] text-[14px] text-nowrap'>End Location</label>
                            <input type="text" className=' py-3 px-4 rounded-xl outline-none ' placeholder='Type Here' />
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
                        <input type="checkbox" className='rounded'/>
                        <label htmlFor="tripInfo" className='pl-2 font-[400] text-[14px]'>Calculate automatically</label>
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-5'>
                    {tripInfoData.map((item, index) => (
                        <div key={index} className='flex flex-col'>
                            <label htmlFor="tripName" className='text-[18px] font-[400]'>{item.title}</label>
                            <input type="text" id='tripName' className='border border-[#808080] rounded-xl px-4 py-3 font-[400] text-[18px] text-[#808080] outline-none' placeholder='Text here'/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AddRouteDetails
