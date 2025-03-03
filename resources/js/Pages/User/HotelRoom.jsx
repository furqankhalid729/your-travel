import React from 'react'
import RoomProfile from '../../Components/User/HotelRoom/RoomProfile';
import RoomSummary from '../../Components/User/HotelRoom/RoomSummary';
import AvailableRoom from '../../Components/User/HotelRoom/AvailableRoom';
import GuestReview from '../../Components/User/HotelRoom/GuestReview';
import RulesPolicy from '../../Components/User/HotelRoom/RulesPolicy';
import UserLayout from "../../Layout/UserLayout";
const HotelRoom = ({ hotel, hotelRooms }) => {
    return (
        <div className='p-4 md:p-8 mx-4 md:mx-16'>
            <RoomProfile hotel={hotel} hotelRooms={hotelRooms} />
            <RoomSummary hotel={hotel} hotelRooms={hotelRooms} />
            <AvailableRoom hotel={hotel} hotelRooms={hotelRooms} />
            <GuestReview hotel={hotel} hotelRooms={hotelRooms} />
            <RulesPolicy hotel={hotel} hotelRooms={hotelRooms} />
        </div>
    )
}
HotelRoom.layout = page => <UserLayout children={page} title="Hotel Room" />
export default HotelRoom
