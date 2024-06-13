const express = require('express');
const {itemController,getItemController} = require('./item.controller.js');
const router = express.Router();

router.post('/', itemController);
router.get('/', getItemController)

module.exports = router;