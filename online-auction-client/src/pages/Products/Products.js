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
  const [showUpdateProductForm, setShowUpdateProductForm] = useState(false);

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
    setShowUpdateProductForm(false);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
    setShowUpdateProductForm(false);
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

  const handleAddProduct = async newProduct => {
    try {
      const formData = new FormData();
      formData.append('name', newProduct.name);
      formData.append('description', newProduct.description);
      formData.append('startingPrice', newProduct.startingPrice);
      formData.append('currentPrice', newProduct.currentPrice);
      formData.append('startTime', newProduct.startTime);
      formData.append('endTime', newProduct.endTime);
      formData.append('selectedCategory', newProduct.selectedCategory);
      formData.append('image', newProduct.image);
  
      const response = await axios.post('http://localhost:8080/products/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setProducts([...products, response.data]);
      toast.success('Product added successfully', {
        position: 'top-right'
      });
      setShowAddProductForm(false);
    } catch (error) {
      console.error('Error adding product:', error);
      toast.error('Failed to add product', {
        position: 'top-center'
      });
    }
  };

  const handleUpdateProduct = async updatedProduct => {
    try {
      const response = await axios.put(`http://localhost:8080/products/update/${updatedProduct.id}`, updatedProduct);
      const updatedProducts = products.map(product =>
        product.id === updatedProduct.id ? response.data : product
      );
      setProducts(updatedProducts);
      setSelectedProduct(response.data);
      toast.success('Product updated successfully', {
        position: 'top-right'
      });
    } catch (error) {
      console.error('Error updating product:', error);
      toast.error('Failed to update product', {
        position: 'top-right'
      });
    }
  };

  return (
    <div className="products-container">
      <ToastContainer />
      <div className="sidebar">
        <button className="add-product-button" onClick={() => setShowAddProductForm(true)}>Add Product</button>
        <ProductList products={products} onSelectProduct={handleSelectProduct} onDeleteProduct={handleDeleteProduct} />
      </div>
      <div className="main-content">
        {selectedProduct && (
          <div className="details-and-update">
            <div className="details">
              <ProductDetails product={selectedProduct} />

              <br></br>
              <br></br>
              <button className="close-button" onClick={handleCloseDetails}>Close</button>
            </div>
            
            {!showAddProductForm && (
              <div className="update-form">
                <UpdateProductForm product={selectedProduct} onUpdate={handleUpdateProduct} onClose={() => setShowUpdateProductForm(false)} />
              </div>
            )}
          </div>
        )}
        
        {showAddProductForm && <AddProductForm onSubmit={handleAddProduct} onClose={() => setShowAddProductForm(false)} />}
      </div>
    </div>
  );
};

export default Products;
