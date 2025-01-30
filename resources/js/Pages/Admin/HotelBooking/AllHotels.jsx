import React from 'react'
import AllHotelsCom from "../../../Components/Admin/HotelBooking/AllHotels";
const AllHotels = ({hotelRooms}) => {
  return (
    <div>
      <AllHotelsCom 
      hotelRooms={hotelRooms}/>
    </div>
  )
}

export default AllHotels
