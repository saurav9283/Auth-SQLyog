const express = require('express');
const router = express.Router();
const {saveController,IdController} = require('./saved.controller.js');

router.post('/', saveController);

module.exports = router;