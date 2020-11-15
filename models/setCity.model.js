const mongoose = require('mongoose');

const { Schema } = mongoose;

const setCityModel = new Schema({
  name: { type: String },
  radius: { type: Number }
});

module.exports = mongoose.model('setCity', setCityModel);
