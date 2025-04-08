const express = require('express');
const router = express.Router();
const Wishlist = require('../models/Wishlist');
const authMiddleware = require('../middleware/authMiddleware');

// Add to wishlist
router.post('/add', authMiddleware, async (req, res) => {
  try {
    const { productId, title, image, price } = req.body;
    const wishlistItem = new Wishlist({
      user: req.user.id,
      productId,
      title,
      image,
      price
    });
    const savedItem = await wishlistItem.save();
    res.json(savedItem);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

// Get all wishlist items for user
router.get('/get', authMiddleware, async (req, res) => {
  try {
    const items = await Wishlist.find({ user: req.user.id });
    res.json(items);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

// Remove item from wishlist
router.delete('/remove/:id', authMiddleware, async (req, res) => {
  try {
    await Wishlist.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
