import React from 'react';
import AdminLayout from "../../Layout/AdminLayout";
import CustomersCom from '../../Components/Admin/Customers';
const Customers = ({customers}) => {
  return (
    <div>
      <CustomersCom 
        customers={customers}
      />
    </div>
  )
}
Customers.layout = page => <AdminLayout children={page} title="Customer" />
export default Customers
