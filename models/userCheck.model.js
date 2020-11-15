const mongoose = require('mongoose');

const { Schema } = mongoose;

const userCheckModel = new Schema({
  centroid: {
    name: { type: String },
    latitude: { type: Number },
    longitude: { type: Number }
  },
  target: {
    name: { type: String },
    latitude: { type: Number },
    longitude: { type: Number }
  },
  distance: { type: Number }
});

module.exports = mongoose.model('userCheck', userCheckModel);
