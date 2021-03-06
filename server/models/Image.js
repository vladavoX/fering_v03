const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  type: {
    type: String,
  },
  image: {
    type: String
  }
})

module.exports = mongoose.model('Image', ImageSchema);