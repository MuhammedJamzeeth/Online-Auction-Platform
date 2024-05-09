import React, { useState } from 'react';
import './ProductList.css';

const ProductList = ({ products, onDelete, onChangeName, onChangeDescription, onChangePrice }) => {
    const [newName, setNewName] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newPrice, setNewPrice] = useState('');

    const handleNameChange = (e) => {
        setNewName(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setNewDescription(e.target.value);
    };

    const handlePriceChange = (e) => {
        setNewPrice(e.target.value);
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
                                <button type="button" className="btn btn-success btn-sm mt-2" data-toggle="modal" data-target={`#exampleModalCenter${product.id}`}>change name</button>
                                <div className="modal fade" id={`exampleModalCenter${product.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalCenterTitle">Change Product Name</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <form onSubmit={(e) => { e.preventDefault(); onChangeName(product.id, newName); }}>
                                                    <div className="form-group">
                                                        <label>New Product Name</label>
                                                        <input type="text" value={newName} onChange={handleNameChange} className="form-control" />
                                                        <br />
                                                        <button type="submit" className="btn btn-primary">Submit</button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{product.description}</td>
                            <td>Rs{product.currentPrice}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => onDelete(product.id)}>Delete</button>
                                {/* Similarly, add buttons for changing description and price */}
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
