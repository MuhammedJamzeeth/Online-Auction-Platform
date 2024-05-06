import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS file for styling
import ProductList from '../../components/Prodect/ProductList';
import ProductDetails from '../../components/Prodect/ProductDetails';
import AddProductForm from '../../components/Prodect/AddProductForm';
import UpdateProductForm from '../../components/Prodect/UpdateProductForm';
import './Products.css';

import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Fetch products from the server when the component mounts
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

  const handleDeleteProduct = async productId => {
    try {
      await axios.delete(`http://localhost:8080/products/delete/${productId}`);
      setProducts(products.filter(product => product.id !== productId));
      setSelectedProduct(null);
    } catch (error) {
      console.error('Error deleting product:', error);
      toast.error('Failed to delete product', { // Use toast.error instead of console.error
        position: 'top-center'
      });
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
        position: 'top-center'
      });
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
        position: 'top-center'
      });
    } catch (error) {
      console.error('Error updating product:', error);
      toast.error('Failed to update product', {
        position: 'top-center'
      });
    }
  };

  return (
    <div>
      <ToastContainer /> {/* Include the ToastContainer component */}
      <ProductList products={products} onSelectProduct={handleSelectProduct} onDeleteProduct={handleDeleteProduct} />
      <ProductDetails product={selectedProduct} />
      <AddProductForm onSubmit={handleAddProduct} />
      {selectedProduct && <UpdateProductForm product={selectedProduct} onUpdate={handleUpdateProduct} />}
    </div>
  );
};

export default Products;
