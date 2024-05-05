// UpdateProductForm.js

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

  useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setStartingPrice(product.startingPrice);
      setCurrentPrice(product.currentPrice);
      setStartTime(product.startTime);
      setEndTime(product.endTime);
      setImage(product.image);
    }
  }, [product]);

  const handleSubmit = e => {
    e.preventDefault();
    onUpdate({ id: product.id, name, description, startingPrice, currentPrice, startTime, endTime, image });
  };

  return (
    <form className="update-product-form" onSubmit={handleSubmit}>
      <h2>Update Product</h2>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <input type="text" placeholder="Starting Price" value={startingPrice} onChange={e => setStartingPrice(e.target.value)} />
      <input type="text" placeholder="Current Price" value={currentPrice} onChange={e => setCurrentPrice(e.target.value)} />
      <input type="datetime-local" placeholder="Start Time" value={startTime} onChange={e => setStartTime(e.target.value)} />
      <input type="datetime-local" placeholder="End Time" value={endTime} onChange={e => setEndTime(e.target.value)} />
      <input type="text" placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} />
      <button type="submit">Update Product</button>
    </form>
  );
};

export default UpdateProductForm;
