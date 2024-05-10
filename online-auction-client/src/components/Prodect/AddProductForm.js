import React, { useState, useEffect } from 'react';
import './AddProductForm.css';
import axios from 'axios'; 

const AddProductForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        productName: '',
        productDescription: '',
        startingPrice: '',
        currentPrice: '',
        startTime: '',
        endTime: '',
        categoryId: '',
        categoryName: '',
        productImage: null // Initialize productImage state
    });

    const [errors, setErrors] = useState({});
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
        if (name === 'categoryId') {
            const selectedCategory = categories.find(category => category.id === value);
            setFormData({
                ...formData,
                [name]: value,
                categoryName: selectedCategory ? selectedCategory.name : ''
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleProductImageChange = (e) => {
        setFormData({
            ...formData,
            productImage: e.target.files[0]
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};
        if (!formData.productName) {
            errors.productName = 'Product name is required';
        }
        // Add more validation rules as needed

        if (Object.keys(errors).length === 0) {
            onSubmit(formData); // Pass form data to parent component
            // Reset form fields
            setFormData({
                productName: '',
                productDescription: '',
                startingPrice: '',
                currentPrice: '',
                startTime: '',
                endTime: '',
                categoryId: '',
                categoryName: '',
                productImage: null
            });
            setErrors({});
        } else {
            setErrors(errors);
        }
    };

    return (
        <div className="card">
            <div className="card-header">
                <p className="h4 mb-2 text-center">Add Product</p>
            </div>
            <div className="card-body">
                <form className="text-center border border-light p-5" onSubmit={handleSubmit}>
                    {/* Form inputs */}
                    {/* Your form inputs here */}
                    <div className='form-group mb-2'>
                                <label className='form-label'>Product Name:</label>
                                <input
                                    type='text'
                                    placeholder='Product Name'
                                    name='productName'
                                    value={formData.productName}
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
                                    name='productDescription'
                                    value={formData.productDescription}
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
                                    value={formData.categoryId && formData.categoryId}
                                    className='form-control'
                                    onChange={handleInputChange}
                                >
                                    <option value=''>Select category</option>
                                    {categories.map(category => (
                                        <option key={category.id} value={category.id}>{category.name} </option>
                                    ))}
                                </select>
                                {errors.categoryId && <div className="text-danger">{errors.categoryId}</div>}
                            </div>

                            {formData.categoryName && (
                                <div className="form-group mb-2">
                                    <label className="form-label">Selected Category:</label>
                                    <input
                                        type="text"
                                        value={formData.categoryId}
                                        className="form-control"
                                        disabled
                                    />
                                </div>
                            )}


                    <div className="custom-file mb-4">
                        <label className='form-label'>Product Image:</label>
                        <input
                            type="file"
                            name="productImage"
                            className="custom-file-input"
                            accept='image/*'
                            // value={formData.productImage}
                            id="customFile"
                            onChange={handleProductImageChange}
                        />
                        <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                    </div>

                    <div className="btn-group" role="group" aria-label="Form actions">
                        <button className="btn btn-info" type="submit">Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProductForm;
