import React from 'react'
import RoomProfile from '../../Components/User/HotelRoom/RoomProfile';
import RoomSummary from '../../Components/User/HotelRoom/RoomSummary';
import AvailableRoom from '../../Components/User/HotelRoom/AvailableRoom';
import GuestReview from '../../Components/User/HotelRoom/GuestReview';
import RulesPolicy from '../../Components/User/HotelRoom/RulesPolicy';

const HotelRoom = () => {
    return (
        <div className='p-4 md:p-8 mx-4 md:mx-16'>
            <RoomProfile />
            <RoomSummary />
            <AvailableRoom />
            <GuestReview />
            <RulesPolicy />
        </div>
    )
}

export default HotelRoom
