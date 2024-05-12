import AddProductForm from '../../components/Product/AddProductForm';   
import ProductList from '../../components/Product/ProductList';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddProducts.css'; // Import custom CSS file for AddProducts component
import NavBar from '../../components/Nav/NavBar';
import FootBar from '../../components/Footer/NavBar';


const AddProducts = () => {
  return (
    <>
    <NavBar />
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
    <FootBar />

    {/* <ToastContainer /> */}
</div></>
    
  )
}

export default AddProducts;
