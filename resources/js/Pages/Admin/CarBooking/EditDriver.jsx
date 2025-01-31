import React from 'react'
import AdminLayout from "../../../Layout/AdminLayout";
import EditDriverCom from '../../../Components/Admin/CarBooking/EditDriver';
const EditDriver = ({driver}) => {
  return (
    <div>
      <EditDriverCom driver={driver}/>
    </div>
  )
}
EditDriver.layout = page => <AdminLayout children={page} title="Edit Driver" />

export default EditDriver
