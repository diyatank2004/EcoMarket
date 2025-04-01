const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/signin', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: "User not found!" });
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: "Invalid credentials!" });
  
      const token = jwt.sign({ id: user._id }, "secretKey", { expiresIn: "1h" });
  
      res.status(200).json({ message: "Login successful!", token, user });
  
    } catch (error) {
      res.status(500).json({ message: "Server Error", error: error.message });
    }
  });
  

  router.post('/signup', async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      if (!name || !email || !password) {
        return res.status(400).json({ message: "All required fields must be filled!" });
      }
  
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists!" });
      }
  
      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const newUser = new User({
        name, email, password: hashedPassword
      });
  
      await newUser.save();
      res.status(201).json({ message: "User registered successfully!", user: newUser });
  
    } catch (error) {
      res.status(500).json({ message: "Server Error", error: error.message });
    }
  });
  

module.exports = router;
