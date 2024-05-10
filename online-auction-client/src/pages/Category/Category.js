import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Category.css';

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryDetails, setCategoryDetails] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryDescription, setNewCategoryDescription] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch categories from backend API
    axios.get('http://localhost:8080/category')
      .then(response => {
        setCategories(response.data);
        setError(null); // Reset error state on successful fetch
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
        setError(error); // Set error state to provide more information about what went wrong
      });
  }, []);

  const handleCategoryClick = (categoryId) => {
    // Fetch category details for the selected category
    axios.get(`http://your-backend-api/category/${categoryId}/details`)
      .then(response => {
        setCategoryDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching category details:', error);
      });
    setSelectedCategory(categoryId);
  };

  const handleDeleteCategory = (categoryId) => {
    // Delete category from backend API
    axios.delete(`http://localhost:8080/category/delete/${categoryId}`)
      .then(response => {
        // If successful, remove the category from state
        setCategories(categories.filter(category => category.id !== categoryId));
        setSelectedCategory(null);
        setCategoryDetails([]);
      })
      .catch(error => {
        console.error('Error deleting category:', error);
      });
  };

  const handleAddCategory = () => {
    // Add new category to backend API
    axios.post('http://localhost:8080/category/add', { 
      name: newCategoryName,
      description: newCategoryDescription
    })
      .then(response => {
        // If successful, update the categories list
        setCategories([...categories, response.data]);
        setNewCategoryName('');
        setNewCategoryDescription('');
        setShowAddForm(false);
      })
      .catch(error => {
        console.error('Error adding category:', error);
      });
  };

  return (
    <div className="app">
      <div className="add-category-container">
        <div className={`add-category ${showAddForm ? 'slide-in' : ''}`}>
          {!showAddForm ? (
            <button className="add-button" onClick={() => setShowAddForm(true)}>Add Category</button>
          ) : (
            <div>
              <input
                type="text"
                placeholder="Enter category name"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
              />
              <br></br>
              <input
                type="text"
                placeholder="Enter category description"
                value={newCategoryDescription}
                onChange={(e) => setNewCategoryDescription(e.target.value)}
              />
              <br></br>
              <button className="save-button" onClick={handleAddCategory}>Save</button>
              <button className="cancel-button" onClick={() => setShowAddForm(false)}>Cancel</button>
            </div>
          )}
        </div>
      </div>
      <div className="categories">
        <h2>Categories</h2>
        <ul>
          {categories.length > 0 && categories.map(category => (
            <li key={category.id}>
              <button className="category-button" onClick={() => handleCategoryClick(category.id)}>{category.name}</button>
              <button className="delete-button" onClick={() => handleDeleteCategory(category.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="category-details">
        <h2>Category Product Details</h2>
        {/* Display category details here */}
      </div>
    </div>
  );
};

export default Category;
