import React, { useState } from 'react';
import './ProductList.css';
import UpdateProductForm from '../../components/Prodect/UpdateProductForm'; // Import the UpdateProductForm component

const ProductList = ({ products, onDelete, onChangeName, onChangeDescription, onChangePrice }) => {
    const [selectedProduct, setSelectedProduct] = useState(null); // State to store the selected product
    const [showUpdateForm, setShowUpdateForm] = useState(false); // State to control the visibility of the UpdateProductForm

    const handleDetailsClick = (product) => {
        setSelectedProduct(product); // Set the selected product when the "Details" button is clicked
        setShowUpdateForm(true); // Show the UpdateProductForm
    };

    const handleCloseUpdateForm = () => {
        setShowUpdateForm(false);
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
                            <td>Rs {product.currentPrice}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => onDelete(product.id)}>Delete</button>
                                <br></br>
                                <button type="button" className="btn btn-info" onClick={() => handleDetailsClick(product)}>
                                    Details
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedProduct && showUpdateForm && (
                <div className="update-form-overlay">
                    <div className="update-form-container">
                        <button className="close-button" onClick={handleCloseUpdateForm}>Close</button>
                        {/* Pass the selected product to the UpdateProductForm */}
                        <UpdateProductForm product={selectedProduct} />
                    </div>
                </div>
            )}
            <br></br>
        </div>
    );
};

export default ProductList;
