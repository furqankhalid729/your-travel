import React from 'react'
import ViewCarCom from '../../../Components/Admin/CarBooking/ViewCar';
import AdminLayout from "../../../Layout/AdminLayout";
const ViewCar = ({car}) => {
    return (
        <div>
            <ViewCarCom 
                car={car}
            />
        </div>
    )
}
ViewCar.layout = page => <AdminLayout children={page} title="Add Car" />
export default ViewCar
