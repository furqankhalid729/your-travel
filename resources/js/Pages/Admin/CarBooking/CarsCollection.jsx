import React from 'react';
import AdminLayout from "../../../Layout/AdminLayout";
import CarsCollectionCom from "../../../Components/Admin/CarBooking/CarsCollection";

const CarsCollection = () => {
    return (
        <div>
            <CarsCollectionCom />
        </div>
    )
}
CarsCollection.layout = page => <AdminLayout children={page} title="Cars Collection" />
export default CarsCollection
