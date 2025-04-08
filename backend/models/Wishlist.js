const mongoose = require('mongoose');
const { Schema } = mongoose;

const WishlistSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  productId: String,
  title: String,
  image: String,
  price: Number,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('wishlist', WishlistSchema);
