const express = require('express');
const temperature = require('./temperature');
const humidity = require('./humidity');
const pressure = require('./pressure');

const router = express.Router();

router.use('/temperature', temperature);
router.use('/humidity', humidity);
router.use('/pressure', pressure);

module.exports = router;