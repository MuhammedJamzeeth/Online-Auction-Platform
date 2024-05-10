import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductList from '../../components/Prodect/ProductList';
import ProductDetails from '../../components/Prodect/ProductDetails';
import AddProductForm from '../../components/Prodect/AddProductForm';
import UpdateProductForm from '../../components/Prodect/UpdateProductForm';
import './Products.css';
import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showAddProductForm, setShowAddProductForm] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:8080/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleSelectProduct = product => {
        setSelectedProduct(product);
    };

    const handleCloseDetails = () => {
        setSelectedProduct(null);
    };

    const handleDeleteProduct = async productId => {
        const confirmDelete = window.confirm('Are you sure you want to delete this product?');

        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:8080/products/delete/${productId}`);
                setProducts(products.filter(product => product.id !== productId));
                setSelectedProduct(null);
                toast.success('Product deleted successfully', { position: 'top-right' });
            } catch (error) {
                console.error('Error deleting product:', error);
                toast.error('Failed to delete product', { position: 'top-right' });
            }
        }
    };

    const handleAddProduct = async formData => {
        try {
            const response = await axios.post('http://localhost:8080/products/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setProducts([...products, response.data]);
            toast.success('Product added successfully', { position: 'top-right' });
            setShowAddProductForm(false);
        } catch (error) {
            console.log(formData)
            console.error('Error adding product:', error);
            toast.error('Failed to add product', { position: 'top-center' });
        }
    };

    return (
        <div className="products-container">
            <ToastContainer />
            <div className="sidebar">
                <button className="add-product-button" onClick={() => setShowAddProductForm(true)}>Add Product</button>
                <ProductList
                    products={products}
                    onSelect={handleSelectProduct}
                    onDelete={handleDeleteProduct}
                />
            </div>
            <div className="main-content">
                {selectedProduct && (
                    <div className="details-and-update">
                        <div className="details">
                            <ProductDetails product={selectedProduct} />
                            <br />
                            <br />
                            <button className="close-button" onClick={handleCloseDetails}>Close</button>
                        </div>
                        {!showAddProductForm && (
                            <div className="update-form">
                                <UpdateProductForm product={selectedProduct} />
                            </div>
                        )}
                    </div>
                )}
                {showAddProductForm && <AddProductForm onSubmit={handleAddProduct} />}
            </div>
        </div>
    );
};

export default Products;
