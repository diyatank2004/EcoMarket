const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  rating: { type: Number, default: 0 },
  discount: { type: Number, default: 0 },
  offerPrice: { type: Number, default: 0 },
  reviews: { type: Array, default: [] }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
