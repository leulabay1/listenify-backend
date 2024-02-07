//controllers of music
Music = require('../models/newMusic');

const getMusics = async function(req, res, next) {
  try{
    const musics = await Music.find();
    res.send(musics);
  } catch (error) {
    res.status(400).send({message: error.message});
  }
};

const getMusic = async function(req, res, next) {
  try{
    const music = await Music.findById(req.params.id);
    res.send(music);

  } catch (error) {
    res.status(400).send({message: error.message});
  }
};

const createMusic = async function(req, res, next) {

  try{
    const music = await Music.create(req.body);
    res.send(music);

  } catch (error) {
    res.status(400).send({message: error.message});
  }
};

const updateMusic = async function(req, res, next) {

  try{
    const music = await Music.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.send(music)

  } catch(error){
    res.status(400).send({message: error.message});
  }
};

const deleteMusic = async function(req, res, next) {

  try {
    const music = await Music.findByIdAndDelete(req.params.id);
    res.send(music);
  } catch (error) {
    res.status(400).send({message: error.message});
  }
};

const searchMusic = async function(req, res, next){
  try{
    const music = await Music.find({ title: { $regex: new RegExp(req.body.term, 'i') } })
  }catch (e) {
    res.status(500).send({message: e.message})
  }
}

module.exports = {
  getMusics,
  getMusic,
  createMusic,
  updateMusic,
  deleteMusic,
  searchMusic
};