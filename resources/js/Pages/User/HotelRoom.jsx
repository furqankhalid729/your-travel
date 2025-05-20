import React from 'react'
import RoomProfile from '../../Components/User/HotelRoom/RoomProfile';
import RoomSummary from '../../Components/User/HotelRoom/RoomSummary';
import AvailableRoom from '../../Components/User/HotelRoom/AvailableRoom';
import RulesPolicy from '../../Components/User/HotelRoom/RulesPolicy';
import UserLayout from "../../Layout/UserLayout";
const HotelRoom = ({ hotel, hotelRooms }) => {
    const hotelDetails = hotel.HotelDetails[0];
    return (
        <div className='p-4 md:p-8 mx-4 md:mx-16'>
            <RoomProfile hotel={hotelDetails} hotelRooms={hotelRooms} />
            <RoomSummary hotel={hotelDetails} hotelRooms={hotelRooms} />
            <AvailableRoom hotel={hotel} hotelRooms={hotelRooms} />
            {/* <GuestReview hotel={hotel} hotelRooms={hotelRooms} /> */}
            <RulesPolicy hotel={hotel} hotelRooms={hotelRooms} />
        </div>
    )
}
HotelRoom.layout = page => <UserLayout children={page} title="Hotel Room" />
export default HotelRoom
