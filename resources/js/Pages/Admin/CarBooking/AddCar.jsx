import React from 'react'
import AdminLayout from "../../../Layout/AdminLayout";
import AddCarCom from '../../../Components/Admin/CarBooking/AddCar';

const AddCar = () => {
    return (
        <div>
            <AddCarCom />
        </div>
    )
}
AddCar.layout = page => <AdminLayout children={page} title="Add Car" />
export default AddCar
