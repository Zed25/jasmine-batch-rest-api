const express = require('express');
const dataModel = require('../../../model/second_query_model_humidity_model');

const router = express.Router();

router.get('', (req, res) => {
    dataModel.find().sort('country year month').exec((err, results) => {
        return res.send(results)
    });
});

module.exports = router;