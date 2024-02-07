const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
  name: String,
  popularity: Number,
  image_url: String,
  followers: Number,
});

const musicSchema = new mongoose.Schema({
  title: String,
  duration_ms: Number,
  image_url: String,
  release_date: String,
  genre: String,
  artist: artistSchema,
});

const MusicModel = mongoose.model('newMusic', musicSchema);

module.exports = MusicModel;
