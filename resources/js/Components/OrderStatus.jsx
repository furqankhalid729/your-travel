import axios from 'axios';
import React, { useState } from 'react';

const OrderStatusDropdown = ({ orderStatus, orderId }) => {
    const [status, setStatus] = useState(orderStatus || '');;
    const [id, setId] = useState(orderId || '');
    const handleChange = (event) => {
        const selectedStatus = event.target.value;
        setStatus(selectedStatus);
        console.log('Selected status:', selectedStatus);
        console.log("Order ID:", id);
        axios.post(route('booking.updateStatus', id), {
            orderId: id,
            status: selectedStatus,
        })
            .then((response) => {
                alert('Status updated successfully!');
                console.log('Response:', response);
            })
            .catch((error) => {
                console.error('Error updating status:', error);
                alert('Failed to update status. Please try again.');
            });
    };

    return (
        <div>
            <label htmlFor="order-status">Order Status: </label>
            <select id="order-status" value={status} onChange={handleChange}>
                <option value="">-- Select Status --</option>
                <option value="Booked">Booked</option>
                <option value="Fulfilled">Fulfilled</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Completed">Completed</option>
                <option value="Canceled">Canceled</option>
            </select>
        </div>
    );
};

export default OrderStatusDropdown;
