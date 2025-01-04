import React from 'react'
import ProfileTab from '../../Components/User/Profile/ProfileTab'
import FeaturedProfile from '../../Components/User/Profile/FeaturedProfile'
import UserLayout from "../../Layout/UserLayout";
const Profile = () => {
    return (
        <div>
            <ProfileTab />
            <FeaturedProfile />
        </div>
    )
}
Profile.layout = page => <UserLayout children={page} title="Profile" />
export default Profile;