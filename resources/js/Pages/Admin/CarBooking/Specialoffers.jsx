import React from 'react';
import AdminLayout from "../../../Layout/AdminLayout";
import SpecialoffersCom from "../../../Components/Admin/CarBooking/SpecialOffers";
const Specialoffers = () => {
    return (
        <div>
            <SpecialoffersCom />
        </div>
    )
}
Specialoffers.layout = page => <AdminLayout children={page} title="Add Car" />
export default Specialoffers
