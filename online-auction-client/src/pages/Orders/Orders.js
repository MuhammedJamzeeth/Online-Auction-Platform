import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrderList from '../../components/Order/OrderList';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    const fetchOrders = async () => {
        try {
            const response = await axios.get('http://localhost:8080/getallorders/orders');
            setOrders(response.data);
        } catch (error) {
            console.error('Error fetching Orders:', error);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <>
            <OrderList orders={orders} />
        </>
    );
};

export default Orders;
