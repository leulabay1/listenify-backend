mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  popularity: {
    type: Number,
    required: true
  },
  image_url: {
    type: String,
    required: true
  },
  followers: {
    type: Number,
    required: true
  }
});

module.exports = artistSchema;