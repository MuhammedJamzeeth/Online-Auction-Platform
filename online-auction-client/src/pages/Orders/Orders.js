import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import './Order.css';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await axios.get('http://localhost:8080/orders'); // Use axios.get instead of fetch
            console.log('Orders:', response.data);
            setOrders(response.data);
        } catch (error) {
            console.error('Error fetching Orders:', error);
        }
    };

    return (
        <>
            <div className='order-container-title'>All Orders</div>
            <div className="order-container">
                <table>
                    <thead>
                        <tr>
                            <th>Orders ID</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Customer</th>
                            <th>Win Prize</th>
                            <th>Order Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={index}>
                                <td>{order.order_id}</td>
                                <td>{order.orderName}</td>
                                <td>{order.cusEmail}</td>
                                <td>{order.cusPhone}</td>
                                <td>{order.cusAddress}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Orders;
