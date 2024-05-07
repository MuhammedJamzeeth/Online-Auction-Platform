// ProductDetails.js

import React from 'react';
import './ProductDetails.css'; // Import the CSS file

const ProductDetails = ({ product }) => {
  return (
    <div className="product-details-container">
      <h2 className="product-title">Product Details</h2>
      {product && (
        <div className="product-info">
          <div className="product-image-container">
            <img src={product.image} alt={product.name} className="product-image" />
          </div>
          <p><span>Name:</span> {product.name}</p>
          <p><span>Description:</span> {product.description}</p>
          <p><span>Starting Price:</span> Rs.{product.startingPrice}</p>
          <p><span>Current Price:</span> Rs.{product.currentPrice}</p>
          <p><span>Start Time:</span> {product.startTime}</p>
          <p><span>End Time:</span> {product.endTime}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
