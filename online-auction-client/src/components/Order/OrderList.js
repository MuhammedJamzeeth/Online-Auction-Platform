import React from 'react';
import './OrderList.css';

export default function OrderList({orders}) {
    return (
        <>
            <div className='order-container-title'>All Orders</div>
            <div className="order-container">
                <table>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>User ID</th>
                            <th>Product ID</th>
                            <th>Win Prize</th>
                            <th>Order Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.order_id}>
                                <td>{order.order_id}</td>
                                <td>{order.user_id}</td>
                                <td>{order.product_id}</td>
                                <td>{order.win_price}</td>
                                <td>{order.order_status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
