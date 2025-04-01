const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const authMiddleware = require('../middleware/authMiddleware');

// POST API to add a new product
router.post('/add', async (req, res) => {
  try {
    const { title, price, description, category, image, rating, discount, offerPrice, reviews } = req.body;

    if (!title || !price || !description || !category || !image) {
      return res.status(400).json({ message: "All required fields must be filled!" });
    }

    const newProduct = new Product({
      title, price, description, category, image, rating, discount, offerPrice, reviews
    });

    await newProduct.save();
    res.status(201).json({ message: "Product added successfully!", product: newProduct });

  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

router.get('/', async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: "Server Error", error: error.message });
    }
  });

// Get all products (Protected Route)
router.get('/products', authMiddleware, async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: "Server Error", error: error.message });
    }
  });
  
module.exports = router;
