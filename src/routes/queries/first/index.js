const express = require('express');
const first = require('./first');

const router = express.Router();
router.use(first);

module.exports = router;