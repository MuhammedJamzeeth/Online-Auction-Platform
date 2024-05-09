// ProductList.js

import React, { useState } from 'react';
import './ProductList.css';
import UpdateProductForm from './UpdateProductForm'; // Import UpdateProductForm component

const ProductList = ({ products, onDelete }) => {
    const [selectedProductId, setSelectedProductId] = useState(null);

    const handleDetailsClick = (productId) => {
        setSelectedProductId(productId);
    };

    const handleCloseDetails = () => {
        setSelectedProductId(null);
    };

    const handleUpdate = (updatedProduct) => {
        console.log('Updated Product:', updatedProduct);
    };

    const handleDelete = (productId) => {
        onDelete(productId); // Call the onDelete function passed as props
    };

    return (
        <div className="product-list-container">
            <h2 className="product-list-title">Product List</h2>
            <table className="product-table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Current Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td><img alt="" src={`data:image/jpeg;base64,${product.image}`} style={{ width: '100px', height: '100px' }} /></td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>Rs{product.currentPrice}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => handleDelete(product.id)}>Delete</button>
                                <br />
                                <button className="btn btn-primary" onClick={() => handleDetailsClick(product.id)}>Details</button>
                                {selectedProductId === product.id && (
                                    <>
                                        <div className="overlay" />
                                        <div className="update-form">
                                            <UpdateProductForm product={product} onUpdate={handleUpdate} selectedProductId={selectedProductId} />
                                            <button className="btn btn-secondary" onClick={handleCloseDetails}>Close</button>
                                        </div>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
        </div>
    );
};

export default ProductList;
