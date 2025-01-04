import React from 'react';
import AdminLayout from "../../Layout/AdminLayout";
import PaymentsCom from '../../Components/Admin/Payments';

const Payments = () => {
  return (
    <div>
      <PaymentsCom />
    </div>
  )
}
Payments.layout = page => <AdminLayout children={page} title="Payments" />
export default Payments
