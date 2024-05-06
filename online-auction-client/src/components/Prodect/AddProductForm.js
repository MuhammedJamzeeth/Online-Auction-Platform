import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './AddProductForm.css';

const AddProductForm = ({ onSubmit, categories }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startingPrice, setStartingPrice] = useState('');
  const [currentPrice, setCurrentPrice] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [image, setImage] = useState('');

  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = 'Name is required';
 
    }
    if (!description.trim()) {
      newErrors.description = 'Description is required';
    }
    if (!startingPrice.trim()) {
      newErrors.startingPrice = 'Starting Price is required';
    }
    if (!currentPrice.trim()) {
      newErrors.currentPrice = 'Current Price is required';
    }
    if (!startTime.trim()) {
      newErrors.startTime = 'Start Time is required';
    }
    if (!endTime.trim()) {
      newErrors.endTime = 'End Time is required';
    }
    // if (!selectedCategory) {
    //   newErrors.selectedCategory = 'Category is required';
    // }
    if (!image) {
      newErrors.image = 'Image is required';
    }

    if (Object.keys(newErrors).length === 0) {
      try {
        await onSubmit({ name, description, startingPrice, currentPrice, startTime, endTime, image, selectedCategory });
        // Clear form fields after successful submission
        setName('');
        setDescription('');
        setStartingPrice('');
        setCurrentPrice('');
        setStartTime('');
        setEndTime('');
        // setSelectedCategory('');
        setImage('');
        toast.success('Product added successfully', { position: 'top-center' });
      } catch (error) {
        console.error('Error adding product:', error);
        toast.error('Failed to add product', { position: 'top-center' });
      }
    } else {
      setErrors(newErrors);
      toast.warning('All fields are required', { position: 'top-center' });
    }
  };

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Add Product</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        {errors.name && <div className="text-danger">{errors.name}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        {errors.description && <div className="text-danger">{errors.description}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="starting-price">Starting Price:</label>
        <input type="text" id="starting-price" placeholder="Starting Price" value={startingPrice} onChange={(e) => setStartingPrice(e.target.value)} />
        {errors.startingPrice && <div className="text-danger">{errors.startingPrice}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="current-price">Current Price:</label>
        <input type="text" id="current-price" placeholder="Current Price" value={currentPrice} onChange={(e) => setCurrentPrice(e.target.value)} />
        {errors.currentPrice && <div className="text-danger">{errors.currentPrice}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="start-time">Start Time:</label>
        <input type="datetime-local" id="start-time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
        {errors.startTime && <div className="text-danger">{errors.startTime}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="end-time">End Time:</label>
        <input type="datetime-local" id="end-time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
        {errors.endTime && <div className="text-danger">{errors.endTime}</div>}
      </div>
      {/* <div className="form-group">
        <label htmlFor="category">Category:</label>
        <select id="category" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">Select Category</option>
          {categories && categories.map((category) => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
        {errors.selectedCategory && <div className="text-danger">{errors.selectedCategory}</div>}
      </div> */}
      <div className="form-group">
        <label htmlFor="image-upload">Upload Image:</label>
        <input type="file" id="image-upload" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
        {errors.image && <div className="text-danger">{errors.image}</div>}
      </div>
      <button className="submit-button" type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
