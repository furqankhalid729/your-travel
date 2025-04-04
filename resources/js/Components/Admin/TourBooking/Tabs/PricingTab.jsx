import React from 'react'

const PricingDataAdult = [
    { title: "Adult" },
    { title: "Cost" },
    { title: "Margin" },
    { title: "Total price" },
]

const PricingDataChild = [
    { title: "Adult" },
    { title: "Cost" },
    { title: "Margin" },
    { title: "Total price" },
]

const PricingTab = () => {
    return (
        <div className='flex gap-6'>
            <div className='w-[50%] bg-white rounded-xl shadow-xl border p-6 '>
                <h2 className='font-[600] text-[20px] mb-6'>Pricing</h2>
                <div className='grid grid-cols-4 gap-3'>
                    {PricingDataAdult.map((item, index) => (
                        <div key={index} className='flex flex-col'>
                            <label htmlFor="adult" className='pl-1 font-[400] text-[14px]'>{item.title}</label>
                            <input type="text" id='adult' className='border border-[#808080] rounded-xl px-3 py-1 font-[400] text-[18px] text-[#808080] outline-none' />
                        </div>
                    ))}
                    {PricingDataChild.map((item, index) => (
                        <div key={index} className='flex flex-col'>
                            <label htmlFor="child" className='pl-1 font-[400] text-[14px]'>{item.title}</label>
                            <input type="text" id='child' className='border border-[#808080] rounded-xl px-3 py-1 font-[400] text-[18px] text-[#808080] outline-none' />
                        </div>
                    ))}
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
