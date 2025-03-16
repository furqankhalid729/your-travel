import React from 'react';
import AdminLayout from "../../Layout/AdminLayout";
import EnquiriesCom from "../../Components/Admin/Enquiries";

const Enquiries = ({enquiries}) => {
  return (
    <div>
      <EnquiriesCom 
        enquiries={enquiries}
      />
    </div>
  )
}
Enquiries.layout = page => <AdminLayout children={page} title="Enquiries" />
export default Enquiries
