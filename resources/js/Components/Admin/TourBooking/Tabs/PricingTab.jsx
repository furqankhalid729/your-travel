import React from 'react'





const PricingTab = ({ data, setData, handleInputChange }) => {
    return (
        <div className='flex gap-6'>
            <div className='w-[50%] bg-white rounded-xl shadow-xl border p-6 '>
                <h2 className='font-[600] text-[20px] mb-6'>Pricing</h2>
                <div className='grid grid-cols-4 gap-3'>
                    {/* Adult */}
                    <div className='flex flex-col'>
                        <label htmlFor="adult" className='pl-1 font-[400] text-[14px]'>Adult</label>
                        <input type="text" id='adult' className='border border-[#808080] rounded-xl px-3 py-1 font-[400] text-[18px] text-[#808080] outline-none' name="adult" value={data.adult} onChange={handleInputChange} />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="adult" className='pl-1 font-[400] text-[14px]'>Cost</label>
                        <input type="text" id='adult' className='border border-[#808080] rounded-xl px-3 py-1 font-[400] text-[18px] text-[#808080] outline-none' name="adult_cost" value={data.adult_cost} onChange={handleInputChange} />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="adult" className='pl-1 font-[400] text-[14px]'>Margin</label>
                        <input type="text" id='adult' className='border border-[#808080] rounded-xl px-3 py-1 font-[400] text-[18px] text-[#808080] outline-none' name="adult_margin" value={data.adult_margin} onChange={handleInputChange} />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="adult" className='pl-1 font-[400] text-[14px]'>Total price</label>
                        <input type="text" id='adult' className='border border-[#808080] rounded-xl px-3 py-1 font-[400] text-[18px] text-[#808080] outline-none' name="adult_total_price" value={data.adult_total_price} onChange={handleInputChange} />
                    </div>

                    {/* Child */}
                    <div className='flex flex-col'>
                        <label htmlFor="child" className='pl-1 font-[400] text-[14px]'>Child</label>
                        <input type="text" id='child' className='border border-[#808080] rounded-xl px-3 py-1 font-[400] text-[18px] text-[#808080] outline-none' name="child" value={data.child} onChange={handleInputChange} />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="child" className='pl-1 font-[400] text-[14px]'>Cost</label>
                        <input type="text" id='child' className='border border-[#808080] rounded-xl px-3 py-1 font-[400] text-[18px] text-[#808080] outline-none' name="child_cost" value={data.child_cost} onChange={handleInputChange} />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="child" className='pl-1 font-[400] text-[14px]'>Margin</label>
                        <input type="text" id='child' className='border border-[#808080] rounded-xl px-3 py-1 font-[400] text-[18px] text-[#808080] outline-none' name="child_margin" value={data.child_margin} onChange={handleInputChange} />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="child" className='pl-1 font-[400] text-[14px]'>Total price</label>
                        <input type="text" id='child' className='border border-[#808080] rounded-xl px-3 py-1 font-[400] text-[18px] text-[#808080] outline-none' name="child_total_price" value={data.child_total_price} onChange={handleInputChange} />
                    </div>
                </div>
            </div>
            <div className='w-[50%] bg-white rounded-xl shadow-xl border py-6 px-3 flex flex-col gap-2  justify-center '>
                <div className='flex justify-between items-center w-full'>
                    <p>Cost</p>
                    <span>$4000.0</span>
                </div>
                <div className='flex justify-between items-center w-full'>
                    <p>Margin</p>
                    <span>$1000.0</span>
                </div>
                <div className='flex justify-between items-center w-full'>
                    <p>Total price</p>
                    <span>$5000.0</span>
                </div>
                <div className='border-[0.5px] border-black'></div>
                <div className='text-end'>
                    $5000.0
                </div>
            </div>
        </div>
    )
}

export default PricingTab
