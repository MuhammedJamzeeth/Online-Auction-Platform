import React, { useState, useEffect } from 'react';
import './ProductList.css';
import axios from 'axios';
import UpdateProductForm from '../../components/Product/UpdateProductForm';


const ProductList = ({ onDelete }) => {
    const [products, setProducts] = useState([]); // State to store the products
    const [selectedProduct, setSelectedProduct] = useState(null); 
    const [showUpdateForm, setShowUpdateForm] = useState(false); 

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8080/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        // Fetch products when the component mounts
        fetchProducts();
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    const handleDetailsClick = (product) => {
        setSelectedProduct(product); // Set the selected product when the "Details" button is clicked
        setShowUpdateForm(true); // Show the UpdateProductForm
    };

    const handleCloseUpdateForm = () => {
        setShowUpdateForm(false);
    };

    const handleDelete = (productId) => {
        axios.delete(`http://localhost:8080/products/delete/${productId}`)
            .then(response => {
                // If the deletion was successful, update the UI by removing the deleted product from the list
                setProducts(products.filter(product => product.id !== productId));
                onDelete(productId); 
            })
            .catch(error => {
                // Handle error
                console.error('Error deleting product:', error);
            });
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
                    {products && products.length > 0 ? (
                        products.map(product => (
                            <tr key={product.id}>
                                <td><img alt="" src={`data:image/jpeg;base64,${product.image}`} style={{ width: '100px', height: '100px' }} /></td>
                                <td>{product.name}</td>
                                <td className='des'>{product.description}</td>
                                <td>Rs {product.currentPrice}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => handleDelete(product.id)}>Delete</button>
                                    <br></br>
                                    <button type="button" className="btn btn-info" onClick={() => handleDetailsClick(product)}>
                                        Details
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No products available</td>
                        </tr>
                    )}
                </tbody>
            </table>
            {selectedProduct && showUpdateForm && (
                <div className="update-form-overlay">
                    <div className="update-form-container">
                        <button className="close-button" onClick={handleCloseUpdateForm}>Close</button>
                        <UpdateProductForm product={selectedProduct} />
                    </div>
                </div>
            )}
            <br></br>
        </div>
    );
};

export default ProductList;
