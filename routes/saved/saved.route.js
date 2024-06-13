const express = require('express');
const router = express.Router();
const { saveController, GetSaveController, DeleteSaveController } = require('./saved.controller.js');

router.post('/', saveController);
router.get('/:id', GetSaveController);
router.delete('/:id/:itemId', DeleteSaveController)

module.exports = router;