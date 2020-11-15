const mongoose = require('mongoose');

const { Schema } = mongoose;

const userModel = new Schema({
  username: { type: String, unique: true, required: true },
  hash: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  isAdmin: { type: Boolean, default: false }
});

module.exports = mongoose.model('user', userModel);
