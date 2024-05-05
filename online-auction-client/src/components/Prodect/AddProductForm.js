// AddProductForm.js

import React, { useState } from 'react';
import './AddProductForm.css';

const AddProductForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startingPrice, setStartingPrice] = useState('');
  const [currentPrice, setCurrentPrice] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, description, startingPrice, currentPrice, startTime, endTime, image });
    // Reset form fields after submission
    setName('');
    setDescription('');
    setStartingPrice('');
    setCurrentPrice('');
    setStartTime('');
    setEndTime('');
    setImage('');
  };

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Add Product</h2>
      <div className="form-group">
      <label htmlFor="start-time">Name:</label>
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div className="form-group">
      <label htmlFor="start-time">Description:</label>
        <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      </div>
      <div className="form-group">
      <label htmlFor="start-time">Starting Price:</label>
        <input type="text" placeholder="Starting Price" value={startingPrice} onChange={e => setStartingPrice(e.target.value)} />
      </div>
      <div className="form-group">
      <label htmlFor="start-time">Current Price:</label>
        <input type="text" placeholder="Current Price" value={currentPrice} onChange={e => setCurrentPrice(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="start-time">Start Time:</label>
        <input type="datetime-local" id="start-time" value={startTime} onChange={e => setStartTime(e.target.value)} />
      </div>
      <div className="form-group">
      <label htmlFor="end-time">End Time:</label>
      <input type="datetime-local" id="end-time" value={endTime} onChange={e => setEndTime(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="image-upload">Upload Image:</label>
        <input type="file" id="image-upload" accept="image/*"  />
      </div>

      <button className="submit-button" type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
