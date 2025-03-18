import React from 'react'
import AdminLayout from "../../../Layout/AdminLayout";
import EditDriverCom from '../../../Components/Admin/CarBooking/EditDriver';
const EditDriver = ({driver, cars}) => {
  return (
    <div>
      <EditDriverCom driver={driver} cars={cars}/>
    </div>
  )
}
EditDriver.layout = page => <AdminLayout children={page} title="Edit Driver" />

export default EditDriver
