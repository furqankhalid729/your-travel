import React from 'react';
import AdminLayout from "../../Layout/AdminLayout";
import TransactionCom from "../../Components/Admin/Transaction";

const Transaction = () => {
  return (
    <div>
      <TransactionCom />
    </div>
  )
}
Transaction.layout = page => <AdminLayout children={page} title="Transaction" />
export default Transaction
