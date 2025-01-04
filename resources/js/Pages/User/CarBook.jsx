import React from 'react'
import CarBooking from '../../Components/User/CarBooking/CarBooking';
import BookingForm from '../../Components/User/CarBooking/BookingForm';
import UserLayout from "../../Layout/UserLayout";
const CarBook = () => {
  return (
    <div className=' mt-12 md:flex gap-6'>
      {/* xl:mx-24 px-2 mx-4 md:mx-8 lg:mx:20 */}
      <CarBooking/>
      <BookingForm/>
      </div>
  )
}
CarBook.layout = page => <UserLayout children={page} title="Car booking" />
export default CarBook