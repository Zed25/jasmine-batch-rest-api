const mongoose = require('mongoose');

const firstQueryResultSample = new mongoose.Schema({
    year: String,
    city: String
});

const firstQueryResultSampleModel = mongoose.model('query_1', firstQueryResultSample, 'query_1');

module.exports = firstQueryResultSampleModel;