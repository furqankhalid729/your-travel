import React from 'react';
import AdminLayout from "../../Layout/AdminLayout";
import TransactionCom from "../../Components/Admin/Transaction";

const Transaction = ({transactions}) => {
  return (
    <div>
      <TransactionCom 
        transactions={transactions}
      />
    </div>
  )
}
Transaction.layout = page => <AdminLayout children={page} title="Transaction" />
export default Transaction
