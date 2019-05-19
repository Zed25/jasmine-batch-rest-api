const mongoose = require('mongoose');

const secondQueryPressureResultSample = new mongoose.Schema({
    year: Number,
    month: Number,
    country: String,
    metrics: {
        mean: Number,
        stdev: Number,
        min: Number,
        max: Number
    }
});

const secondQueryPressureResultSampleModel = mongoose.model('query_2_pressure', secondQueryPressureResultSample, 'query_2_pressure');

module.exports = secondQueryPressureResultSampleModel;