const express = require('express');
const dataModel = require('../../../model/second_query_model_pressure_model');

const router = express.Router();

router.get('', (req, res) => {
    dataModel.find().exec((err, results) => {
        return res.send(results)
    });
});

module.exports = router;