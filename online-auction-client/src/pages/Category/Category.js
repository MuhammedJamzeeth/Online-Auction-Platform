import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Category.css';

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryDetails, setCategoryDetails] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryDescription, setNewCategoryDescription] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/category')
      .then(response => {
        if (Array.isArray(response.data)) {
          setCategories(response.data);
        } else if (typeof response.data === 'object') {
          // Handle case where response.data is an object
          setCategories([response.data]);
        } else {
          console.error('Received data is not an array or object:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const handleClick = (id) => {
    axios.get(`http://localhost:8080/products/${id}`)
      .then(response => {
        setCategoryDetails(response.data); // Update categoryDetails with product details
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }

  const handleCategoryClick = (categoryName) => {
    console.log(categoryName);
    axios.get(`http://localhost:8080/products/name/${categoryName}`)
      .then(response => {
        setCategoryDetails(response.data); // Save category details in state
      })
      .catch(error => {
        console.error('Error fetching category details:', error);
      });
    setSelectedCategory(categoryName);
  };

  const handleAddCategory = () => {
    setShowAddForm(true);
  };

  const handleCancelAddCategory = () => {
    setShowAddForm(false);
    setNewCategoryName('');
    setNewCategoryDescription('');
  };

  const handleSubmitNewCategory = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/category/add', { 
      name: newCategoryName,
      description: newCategoryDescription
    })
      .then(response => {
        setCategories([...categories, response.data]);
        setShowAddForm(false);
        setNewCategoryName('');
        setNewCategoryDescription('');
      })
      .catch(error => {
        console.error('Error adding category:', error);
      });
  };

  const handleDelete = (categoryId) => {
    if (categoryId === null || categoryId === undefined) {
      console.error('Category ID is undefined or null.');
      return;
    }
    console.log(categoryId);
    axios.delete(`http://localhost:8080/category/delete/${categoryId}`)
      .then(() => {
        setCategories(prevCategories => prevCategories.filter(category => category.id !== categoryId));
        if (selectedCategory === categoryId) {
          setSelectedCategory(null);
          setCategoryDetails([]);
        }
      })
      .catch(error => {
        console.error('Error deleting category:', error);
      });
  };

  return (
    <div className="category-container">
      <div className="categories">
        <h2>Categories</h2>
        <ul>
          {categories.length > 0 && categories.map(category => (
            <li key={category.id}>
              <button onClick={() => handleCategoryClick(category.name)} className="category-button">{category.name}</button>
              <button className="btn btn-danger" onClick={() => handleDelete(category.id)}>Delete</button>
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
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>currentPrice</th>
              </tr>
            </thead>
            <tbody>
              {categoryDetails.length > 0 && categoryDetails.map(product => (
                <tr key={product.id}>
                  <td><img alt="" src={`data:image/jpeg;base64,${product.image}`} style={{ width: '100px', height: '100px' }} /></td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.currentPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="add-category-button-container">
        <button onClick={handleAddCategory} className="add-category-button">Add Category</button>
      </div>
      {showAddForm && (
        <div className="add-category-form">
          <h3>Add Category</h3>
          <form onSubmit={handleSubmitNewCategory}>
            <input
              type="text"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              placeholder="Category Name"
            />
            <input
              type="text"
              value={newCategoryDescription}
              onChange={(e) => setNewCategoryDescription(e.target.value)}
              placeholder="Category Description"
            />
            <div className="form-buttons">
              <button type="submit">Save</button>
              <button type="button" onClick={handleCancelAddCategory}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Category;
