import React from 'react';
import AdminLayout from "../../Layout/AdminLayout";
import CustomerOrdersCom from '../../Components/Admin/CustomerOrdersCom';
const CustomerOrders = ({ bookings }) => {
  console.log(bookings)
  return (
    <CustomerOrdersCom
      bookings={bookings}
    />
  );
};
CustomerOrders.layout = page => <AdminLayout children={page} title="Customer Orders" />
export default CustomerOrders;
