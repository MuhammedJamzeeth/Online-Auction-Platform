import React, { useState } from 'react';
import './ProductList.css';
import UpdateProductForm from '../../components/Prodect/UpdateProductForm'; // Import the UpdateProductForm component

const ProductList = ({ products, onDelete, onChangeName, onChangeDescription, onChangePrice }) => {
    const [newName, setNewName] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [showUpdateForm, setShowUpdateForm] = useState(false); // State to control the visibility of the UpdateProductForm

    const handleNameChange = (e) => {
        setNewName(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setNewDescription(e.target.value);
    };

    const handlePriceChange = (e) => {
        setNewPrice(e.target.value);
    };

    const handleDetailsClick = () => {
        setShowUpdateForm(true);
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
                            <td>
                                {product.name}
                                <br />
                                
                                <div className="modal fade" id={`exampleModalCenter${product.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalCenterTitle">Product Details</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <p><strong>Description:</strong> {product.description}</p>
                                                <p><strong>Current Price:</strong> Rs {product.currentPrice}</p>
                                                {/* Add additional details here */}
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{product.description}</td>
                            <td>Rs {product.currentPrice}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => onDelete(product.id)}>Delete</button>
                                <br></br>
                                <button type="button" className="btn btn-info" onClick={handleDetailsClick}>
                                    Details
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showUpdateForm && (
                <div className="update-form-overlay">
                    <div className="update-form-container">
                        <button className="close-button" onClick={handleCloseUpdateForm}>Close</button>
                        <UpdateProductForm />
                    </div>
                </div>
            )}
            <br></br>
        </div>
    );
};

export default ProductList;
