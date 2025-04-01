const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,  // Change 'username' to 'name' for consistency
  email: { type: String, unique: true },
  password: String
});

const User = mongoose.model('User', userSchema);
module.exports = User;
