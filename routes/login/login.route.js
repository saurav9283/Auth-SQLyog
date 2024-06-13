const express = require('express');
const { loginController } = require('./login.controller.js');
const router = express.Router();

router.post('/login', loginController);

module.exports = router;