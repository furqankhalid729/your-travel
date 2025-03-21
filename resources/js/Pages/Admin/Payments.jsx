import React from 'react';
import AdminLayout from "../../Layout/AdminLayout";
import PaymentsCom from '../../Components/Admin/Payments';

const Payments = ({payments, current_month, previous_month, percentage_change}) => {
  return (
    <div>
      <PaymentsCom 
        payments={payments}
        current_month={current_month}
        previous_month={previous_month}
        percentage_change={percentage_change}
      />
    </div>
  )
}
Payments.layout = page => <AdminLayout children={page} title="Payments" />
export default Payments
