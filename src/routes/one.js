const express = require('express');
const router = express.Router();
const partOneController = require('../controller/one.controller');


router.get('/getCharacters', partOneController.getAllCharacters);
router.get('/getCharacters/:name', partOneController.getCharacterByName);

module.exports = router;