const express = require('express');
const third = require('./third');

const router = express.Router();

router.use(third);

module.exports = router;