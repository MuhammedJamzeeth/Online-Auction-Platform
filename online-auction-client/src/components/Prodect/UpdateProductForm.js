import React, { useState, useEffect } from 'react';
import './UpdateProductForm.css';

const UpdateProductForm = ({ product, onUpdate }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startingPrice, setStartingPrice] = useState('');
  const [currentPrice, setCurrentPrice] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [image, setImage] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setStartingPrice(product.startingPrice.toString());
      setCurrentPrice(product.currentPrice.toString());
      setStartTime(product.startTime);
      setEndTime(product.endTime);
      setImage(product.image);
    }
  }, [product]);

  const handleSubmit = e => {
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
    if (!image.trim()) {
      newErrors.image = 'Image URL is required';
    }

    if (Object.keys(newErrors).length === 0) {
      onUpdate({ id: product.id, name, description, startingPrice: parseFloat(startingPrice), currentPrice: parseFloat(currentPrice), startTime, endTime, image });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form className="update-product-form" onSubmit={handleSubmit}>
      <h2>Update Product</h2>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      {errors.name && <div className="error">{errors.name}</div>}
      <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      {errors.description && <div className="error">{errors.description}</div>}
      <input type="text" placeholder="Starting Price" value={startingPrice} onChange={e => setStartingPrice(e.target.value)} />
      {errors.startingPrice && <div className="error">{errors.startingPrice}</div>}
      <input type="text" placeholder="Current Price" value={currentPrice} onChange={e => setCurrentPrice(e.target.value)} />
      {errors.currentPrice && <div className="error">{errors.currentPrice}</div>}
      <input type="datetime-local" placeholder="Start Time" value={startTime} onChange={e => setStartTime(e.target.value)} />
      {errors.startTime && <div className="error">{errors.startTime}</div>}
      <input type="datetime-local" placeholder="End Time" value={endTime} onChange={e => setEndTime(e.target.value)} />
      {errors.endTime && <div className="error">{errors.endTime}</div>}
      <input type="text" placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} />
      {errors.image && <div className="error">{errors.image}</div>}
      <button type="submit">Update Product</button>
    </form>
  );
};

export default UpdateProductForm;
