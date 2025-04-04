import React from 'react'
import { FaPlus } from 'react-icons/fa';
import { FaArrowRightLong } from "react-icons/fa6";

const DetailsTab = () => {
    return (
        <div className='w-[96%] mx-auto flex flex-col gap-5'>
            <h1 className='font-[600] text-[20px]'>Details</h1>

            <div>
                <label htmlFor="name" className='pl-1 font-[400] text-[14px]'>Name</label>
                <input type="text" className='w-full py-3 px-4 rounded-xl outline-none' />
            </div>

            <div className='flex gap-6 w-full'>
                <div className='w-[50%]'>
                    <label htmlFor="keyword" className='pl-1  font-[400] text-[14px]'>Keywords</label>
                    <textarea rows={6} type="text" className='w-full py-3 px-4 rounded-xl outline-none' />
                </div>
                <div className='w-[50%]'>
                    <label htmlFor="facilities" className='pl-1  font-[400] text-[14px]'>Facilities</label>
                    <textarea rows={6} type="text" className='w-full py-3 px-4 rounded-xl outline-none' />
                </div>
            </div>

            {/* Description */}
            <div className='w-full'>
                <label htmlFor="description" className='pl-1  font-[400] text-[14px]'>Description</label>
                <textarea rows={6} type="text" className='w-full py-3 px-4 rounded-xl outline-none' />
            </div>

            {/* images */}
            <div className='my-5'>
                <div className='flex justify-between items-center'>
                    <h2 className='font-[600] text-[20px]'>Images</h2>
                    <button className='bg-black flex items-center justify-center px-4 py-2 rounded-xl gap-1 text-white text-[14px]'>
                        <FaPlus className='text-white' /> Add
                    </button>
                </div>
            </div>


        </div>
    )
}

export default DetailsTab
