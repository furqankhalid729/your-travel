import React from 'react'
import AdminLayout from "../../../Layout/AdminLayout";
import EditCarCom from '../../../Components/Admin/CarBooking/EditCarCom';

const EditCar = ({car,brands, models, fuels, transmissions}) => {
    return (
        <div>
            <EditCarCom 
                car={car}
                brands={brands}
                models={models}
                fuels={fuels}
                transmissions={transmissions}
            />
        </div>
    )
}
EditCar.layout = page => <AdminLayout children={page} title="Edit Car" />
export default EditCar;
