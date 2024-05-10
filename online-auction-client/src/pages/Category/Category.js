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

  useEffect(() => {
    // Fetch categories from backend API
    axios.get('http://localhost:8080/category')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
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
            <button onClick={() => setShowAddForm(true)}>Add Category</button>
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
              <button onClick={handleAddCategory}>Save</button>
              <button onClick={() => setShowAddForm(false)}>Cancel</button>
            </div>
          )}
        </div>
      </div>
      <div className="categories">
        <h2>Categories</h2>
        <ul>
          {categories.map(category => (
            <li key={category.id}>
              <button onClick={() => handleCategoryClick(category.id)}>{category.name}</button>
              <button className="delete-button" onClick={() => handleDeleteCategory(category.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="category-details">
        <h2>Category Product Details</h2>
        {selectedCategory && (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                {/* Add more table headers as needed */}
              </tr>
            </thead>
            <tbody>
              {categoryDetails.map(product => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  {/* Add more table cells for other product details */}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Category;
