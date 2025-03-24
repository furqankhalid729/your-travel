import React from 'react'
import ViewCarCom from '../../../Components/Admin/CarBooking/ViewCar';
import AdminLayout from "../../../Layout/AdminLayout";
const ViewCar = ({car, drivers}) => {
    return (
        <div>
            <ViewCarCom 
                car={car}
                drivers = {drivers}
            />
        </div>
    )
}
ViewCar.layout = page => <AdminLayout children={page} title="Add Car" />
export default ViewCar
