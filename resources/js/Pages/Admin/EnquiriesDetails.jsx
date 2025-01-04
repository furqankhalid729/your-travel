import React from 'react'
import AdminLayout from "../../Layout/AdminLayout";
import EnquiriesDetailsCom from '../../Components/Admin/EnquiriesDetails'

const EnquiriesDetails = () => {
  return (
    <div>
      <EnquiriesDetailsCom />
    </div>
  )
}
EnquiriesDetails.layout = page => <AdminLayout children={page} title="Enquirie Details" />
export default EnquiriesDetails
