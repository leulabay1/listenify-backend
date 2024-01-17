mongoose = require('mongoose');
const artistSchema = require('./artist');

const musicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  duration_ms: {
    type: Number,
    required: true
  },
  image_url: {
    type: String,
    required: true
  },
  release_date: {
    type: Date,
    required: true
  },
  artist: {
    type: artistSchema,
    required: true
  }
}, { timestamps: true });

const Music = mongoose.model('Music', musicSchema);

module.exports = Music;