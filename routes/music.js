router = require('express').Router();

const musicController = require('../controllers/musicController');

router.get('/', musicController.getMusics);

router.get('/:id', musicController.getMusic);

router.post('/', musicController.createMusic);

router.put('/:id', musicController.updateMusic);

router.delete('/:id', musicController.deleteMusic);

module.exports = router;