import React, { useState, useEffect } from 'react';
import './AddProductForm.css';
import axios from 'axios'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProductForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        startingPrice: '',
        currentPrice: '',
        startTime: '',
        endTime: '',
        // selectedCategory: '', // Add selectedCategory to match backend
        // categoryId: '', // Add categoryId to match backend
        image: null // Initialize productImage as null
    });

    const [errors, setErrors] = useState({});
    const [showForm, setShowForm] = useState(true);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/category')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            image: file
        });
    };

    const handleSubmit = async (e) => {
        console.log(formData);
        e.preventDefault();
        const errors = {};
       
        const requiredFields = ['name', 'description', 'startingPrice', 'currentPrice', 'startTime', 'endTime', 'image'];
        requiredFields.forEach(field => {
            if (!formData[field]) {
                errors[field] = `${field} is required`;
                toast.error(`${field} is required`, { position: 'top-right' });
            }
        });

        if (Object.keys(errors).length === 0) {
            
            try {
                const formDataToSend = new FormData();
                Object.keys(formData).forEach(key => {
                    formDataToSend.append(key, formData[key]);
                });
                const response = await axios.post('http://localhost:8080/products/add', formDataToSend, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                toast.success('Product added successfully', { position: 'top-right' });
                // Clear form data after successful submission
                setFormData({
                    name: '',
                    description: '',
                    startingPrice: '',
                    currentPrice: '',
                    startTime: '',
                    endTime: '',
                    image: null
                });
                setErrors({});
            } catch (error) {
                console.error('Error adding product:', error);
                toast.error('Failed to add product', { position: 'top-center' });
            }
        } else {
            setErrors(errors);
        }
    };

    const handleClose = () => {
        setShowForm(false);
    };

    
    return (
        <>
            {showForm && (
                <div className="card">
                    <div className="card-header">
                        <p className="h4 mb-2 text-center">Add Product</p>
                    </div>
                    <div className="card-body">
                        <form className="text-center border border-light p-5" onSubmit={handleSubmit}>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Product Name:</label>
                                <input
                                    type='text'
                                    placeholder='Product Name'
                                    name='name'
                                    value={formData.name}
                                    className='form-control'
                                    onChange={handleInputChange}
                                />
                                {errors.productName && <div className="text-danger">{errors.productName}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Product Description:</label>
                                <input
                                    type='text'
                                    placeholder='Product Description'
                                    name='description'
                                    value={formData.description}
                                    className='form-control'
                                    onChange={handleInputChange}
                                />
                                {errors.productDescription && <div className="text-danger">{errors.productDescription}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Starting Price:</label>
                                <input
                                    type='text'
                                    placeholder='Starting Price'
                                    name='startingPrice'
                                    value={formData.startingPrice}
                                    className='form-control'
                                    onChange={handleInputChange}
                                />
                                {errors.startingPrice && <div className="text-danger">{errors.startingPrice}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Current Price:</label>
                                <input
                                    type='text'
                                    placeholder='Current Price'
                                    name='currentPrice'
                                    value={formData.currentPrice}
                                    className='form-control'
                                    onChange={handleInputChange}
                                />
                                {errors.currentPrice && <div className="text-danger">{errors.currentPrice}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Start Time:</label>
                                <input
                                    type='datetime-local'
                                    name='startTime'
                                    value={formData.startTime}
                                    className='form-control'
                                    onChange={handleInputChange}
                                />
                                {errors.startTime && <div className="text-danger">{errors.startTime}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>End Time:</label>
                                <input
                                    type='datetime-local'
                                    name='endTime'
                                    value={formData.endTime}
                                    className='form-control'
                                    onChange={handleInputChange}
                                />
                                {errors.endTime && <div className="text-danger">{errors.endTime}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Category:</label>
                                <select
                                    name='categoryId'
                                    className='form-control'
                                    // onChange={handleInputChange}
                                >
                                    <option value=''>Select category</option>
                                    <option>Furniture </option>
                                    <option>Toys</option>
                                    <option>Books </option>
                                    <option>Phone </option>
                                    <option>Computer </option>
                                    
                                    

                                    {/* {categories.map(category => (
                                        <option key={category.id} value={category.id}>{category.name}</option>
                                    ))} */}
                                </select>
                                {errors.categoryId && <div className="text-danger">{errors.categoryId}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Product Image:</label>
                                <input
                                    type='file'
                                    accept='image/*'
                                    name='image'
                                    className='form-control-file'
                                    onChange={handleFileChange}
                                />
                            </div>

                            <div className="btn-group" role="group" aria-label="Form actions">
                                <button className="btn btn-info" type="submit">Add</button>
                                <button className="btn btn-secondary" type="button" onClick={handleClose}>Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default AddProductForm;
