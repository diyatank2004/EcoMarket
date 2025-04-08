import React, { useState } from 'react';
import axios from 'axios';
import '../css/AddProduct.css';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: '',
    rating: '',
    discount: '',
    offerPrice: '',
    reviews: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/products/add', formData);
      alert('Product added successfully!');
      setFormData({
        title: '', price: '', description: '', category: '', image: '',
        rating: '', discount: '', offerPrice: '', reviews: '',
      });
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Something went wrong!');
    }
  };

  return (
    <div className="add-product-container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit} className="product-form">
        {Object.keys(formData).map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={formData[field]}
            onChange={handleChange}
            required
          />
        ))}
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
