import React from 'react'
import Banner from '../../Components/User/Tour/Banner'
import TourRating from '../../Components/User/Tour/TourRating'
import TourCards from '../../Components/User/Tour/TourCards'

const Tour = () => {
  return (
    <>
      <Banner/>
      <div className="flex gap-7 my-12 px-4 mx-auto max-w-[1400px]">
        <div className="hidden lg:block w-1/4 mt-24">
          <TourRating />
        </div>
        <div className="w-full lg:w-3/4">
          <TourCards />
        </div>
      </div>
    </>
  )
}

export default Tour
