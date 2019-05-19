const mongoose = require('mongoose');

const secondQueryHumidityResultSample = new mongoose.Schema({
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

const secondQueryHumidityResultSampleModel = mongoose.model('query_2_humidity', secondQueryHumidityResultSample, 'query_2_humidity');

module.exports = secondQueryHumidityResultSampleModel;
