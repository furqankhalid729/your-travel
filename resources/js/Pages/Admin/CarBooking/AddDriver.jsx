import React from 'react'
import AdminLayout from "../../../Layout/AdminLayout";
import AddDriverCom from '@/Components/Admin/CarBooking/AddDriver'
const AddDriver = ({cars}) => {
    return (
        <div>
            <AddDriverCom 
                cars={cars}
            />
        </div>
    )
}
AddDriver.layout = page => <AdminLayout children={page} title="Add Driver" />
export default AddDriver
