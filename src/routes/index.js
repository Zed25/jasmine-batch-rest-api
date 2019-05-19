const express = require('express');
const first = require('./queries/first/index');
const second = require('./queries/second/index');
const third = require('./queries/third/index');

const router = express.Router();

router.use('/first', first);
router.use('/second', second);
router.use('/third', third);

module.exports = router;