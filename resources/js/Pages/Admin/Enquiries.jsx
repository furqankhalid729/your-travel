import React from 'react';
import AdminLayout from "../../Layout/AdminLayout";
import EnquiriesCom from "../../Components/Admin/Enquiries";

const Enquiries = () => {
  return (
    <div>
      <EnquiriesCom />
    </div>
  )
}
Enquiries.layout = page => <AdminLayout children={page} title="Enquiries" />
export default Enquiries
