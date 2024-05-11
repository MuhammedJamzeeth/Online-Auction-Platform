import AddProductForm from '../../components/Product/AddProductForm';   
import ProductList from '../../components/Product/ProductList';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddProducts.css'; // Import custom CSS file for AddProducts component

const AddProducts = () => {
  return (
    <div className="add-products-container">
        {/* <h2 className="page-title">Add Products</h2> */}
        <div className="content">
            <div className="add-product-form">
                <AddProductForm />
            </div>
            <div className="product-list">
                <ProductList />
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default AddProducts;
