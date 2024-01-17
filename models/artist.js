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
  },
  genres: {
    type: [String],
    default: []
  },
});

module.exports = artistSchema;