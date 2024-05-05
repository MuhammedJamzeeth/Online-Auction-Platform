import React, { useState, useEffect } from 'react';
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
    }
  };

  const handleAddProduct = async newProduct => {
    try {
      const response = await axios.post('http://localhost:8080/products/add', newProduct); // Assuming your add endpoint is '/products'
      setProducts([...products, response.data]);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleUpdateProduct = async updatedProduct => {
    try {
      const response = await axios.put(`http://localhost:8080/products/update/${updatedProduct.id}`, updatedProduct); // Assuming your update endpoint is '/products/:id'
      const updatedProducts = products.map(product =>
        product.id === updatedProduct.id ? response.data : product
      );
      setProducts(updatedProducts);
      setSelectedProduct(response.data);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div>
      <div className=''><ProductList products={products} onSelectProduct={handleSelectProduct} onDeleteProduct={handleDeleteProduct} /></div>
      
      <ProductDetails product={selectedProduct} />
      <AddProductForm onSubmit={handleAddProduct} />
      {selectedProduct && <UpdateProductForm product={selectedProduct} onUpdate={handleUpdateProduct} />}
    </div>
  );
};

export default Products;
