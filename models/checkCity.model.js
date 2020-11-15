const mongoose = require('mongoose');

const { Schema } = mongoose;

const checkCityModel = new Schema({
  centroid: { type: String },
  target: { type: String },
  distance: { type: Number }
});

module.exports = mongoose.model('checkCity', checkCityModel);
