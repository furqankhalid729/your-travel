import React from 'react';
import AdminLayout from "../../../Layout/AdminLayout";
import OrdersCom from "../../../Components/Admin/CarBooking/Orders";

const Orders = ({activeBooking}) => {
    return (
        <div>
            <OrdersCom
                activeBooking={activeBooking}
            />
        </div>
    )
}
Orders.layout = page => <AdminLayout children={page} title="Add Car" />
export default Orders
