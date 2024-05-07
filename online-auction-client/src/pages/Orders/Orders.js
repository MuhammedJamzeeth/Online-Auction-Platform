    import React, { useState, useEffect } from 'react';
    import './Order.css';

    const Orders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await fetch('http://localhost:8080/getallorders');
            if (!response.ok) {
                throw new Error('Failed to fetch Orders');
            }
            const data = await response.json();
            setOrders(data);
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
