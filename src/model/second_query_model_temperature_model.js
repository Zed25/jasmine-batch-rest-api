const mongoose = require('mongoose');

const secondQueryTemperatureResultSample = new mongoose.Schema({
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

const secondQueryTemperatureResultSampleModel = mongoose.model('query_2_temperature', secondQueryTemperatureResultSample, 'query_2_temperature');

module.exports = secondQueryTemperatureResultSampleModel;