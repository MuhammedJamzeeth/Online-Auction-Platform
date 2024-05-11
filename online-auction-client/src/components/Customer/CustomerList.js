import React from 'react';
import './CustomerList.css';

export default function CustomerList({customers}) {
    return (
        <>
            <div className="cus-container-title">All Customers</div>
            <div className="cus-container">
            <table>
                <thead>
                <tr>
                    <th>Customer ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>
                {customers.map(cus => (
                    <tr key={cus.id}>
                    <td>{cus.id}</td>
                    <td>{cus.firstName}</td>
                    <td>{cus.email}</td>
                    <td>{cus.phoneNumber}</td>
                    <td>{cus.address}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </>
    )
}
