import React, { useState, useEffect } from "react";
import CustomerList from "../../components/Customer/CustomerList";
import axios from "axios";

const Customer = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/v1/auth/getallcustomers');
        setCustomers(response.data);
    } catch (error) {
        console.error("Error fetching customers:", error);
    }
  };
  

  return (
    <>
      <CustomerList customers={customers} />
    </>
  );
};

export default Customer;
