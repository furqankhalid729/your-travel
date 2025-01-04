import React from 'react';
import AdminLayout from "../../Layout/AdminLayout";
import CustomersCom from '../../Components/Admin/Customers';
const Customers = () => {
  return (
    <div>
      <CustomersCom />
    </div>
  )
}
Customers.layout = page => <AdminLayout children={page} title="Customer" />
export default Customers
