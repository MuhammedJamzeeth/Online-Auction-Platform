// ProductList.js

import React from 'react';
import './ProductList.css';

const ProductList = ({ products, onSelectProduct, onDeleteProduct }) => {
  return (
    <div className="product-list-container">
      <h2 className="product-list-title">Product List</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Current Price</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td><img src={product.image} alt={product.name} className="product-image" /></td>
              <td>{product.name}</td>
              <td>Rs.{product.currentPrice}</td>
              <td>{product.startTime}</td>
              <td>{product.endTime}</td>
              <td>
                <button className="btn btn-primary" onClick={() => onSelectProduct(product)}>Details</button>
                <button className="btn btn-danger" onClick={() => onDeleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
    </div>
  );
};

export default ProductList;
