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
                            <th>User Name</th>
                            <th>Product Name</th>
                            <th>Win Prize</th>
                            <th>Order Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.orderId}>
                                <td>{order.orderId}</td>
                                <td>{order.userName}</td>
                                <td>{order.productName}</td>
                                <td>{order.winPrice}</td>
                                <td>{order.orderStatus}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
