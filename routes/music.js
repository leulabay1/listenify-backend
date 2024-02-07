router = require('express').Router();
const musicController = require('../controllers/musicController');
const {searchMusic} = require("../controllers/musicController");


router.get('/', musicController.getMusics);

router.post('/', musicController.createMusic);

router.put('/:id', musicController.updateMusic);

router.delete('/:id', musicController.deleteMusic);


module.exports = router;