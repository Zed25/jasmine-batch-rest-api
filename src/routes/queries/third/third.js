const express = require('express');
const dataModel = require('../../../model/third_query_model');

const router = express.Router();

router.get('', (req, res) => {
    dataModel.find().sort('country newRank.position').exec((err, results) => {
        return res.send(results)
    });
});

module.exports = router;