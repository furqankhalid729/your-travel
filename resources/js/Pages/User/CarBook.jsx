import React, {useState} from 'react'
import CarBooking from '../../Components/User/CarBooking/CarBooking';
import BookingForm from '../../Components/User/CarBooking/BookingForm';
import UserLayout from "../../Layout/UserLayout";
const CarBook = () => {
  const [disabled, setDisabled] = useState(false);
  return (
    <div className=' mt-12 lg:flex gap-6 p-6'>
      <CarBooking
        setDisabled={setDisabled}
      />
      <BookingForm
        disabled={disabled}
      />
      </div>
  )
}
CarBook.layout = page => <UserLayout children={page} title="Car booking" />
export default CarBook