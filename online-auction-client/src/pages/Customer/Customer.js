import React, { useState, useEffect } from 'react';
import './Customer.css';

const Customer = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
}, []);

  const fetchCustomers = async () => {
    try {
        const response = await fetch("http://localhost:8080/api/v1/auth/getallcustomers");
        if (!response.ok) {
            throw new Error('Failed to fetch customers');
        }
        const data = await response.json();
        setCustomers(data);
    } catch (error) {
        console.error('Error fetching customers:', error);
    }
  };

  return (
    <>
    <div className='cus-container-title'>All Customers</div>
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
                {customers.map((customer, index) => (
                    <tr key={index}>
                        <td>{customer.id}</td>
                        <td>{customer.firstName}</td>
                        <td>{customer.email}</td>
                        <td>{customer.phoneNumber}</td>
                        <td>{customer.address}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </>
  );
};

export default Customer;
