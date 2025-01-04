import React from 'react';
import AdminLayout from "../../../Layout/AdminLayout";
import OrdersCom from "../../../Components/Admin/CarBooking/Orders";

const Orders = () => {
    return (
        <div>
            <OrdersCom />
        </div>
    )
}
Orders.layout = page => <AdminLayout children={page} title="Add Car" />
export default Orders
