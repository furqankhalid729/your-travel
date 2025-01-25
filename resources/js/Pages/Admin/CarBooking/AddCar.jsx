import React from 'react'
import AdminLayout from "../../../Layout/AdminLayout";
import AddCarCom from '../../../Components/Admin/CarBooking/AddCar';

const AddCar = ({brands, models, fuels, transmissions}) => {
    return (
        <div>
            <AddCarCom 
                brands={brands}
                models={models}
                fuels={fuels}
                transmissions={transmissions}
            />
        </div>
    )
}
AddCar.layout = page => <AdminLayout children={page} title="Add Car" />
export default AddCar
