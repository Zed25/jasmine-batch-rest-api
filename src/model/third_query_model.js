const mongoose = require('mongoose');

const thirdQueryResultSample = new mongoose.Schema({
    country: String,
    city: String,
    newRank: {
        position: Number,
        value: Number
    },
    oldRank: {
        position: Number,
        value: Number
    }
});

const thirdQueryResultSampleModel = mongoose.model('query_3', thirdQueryResultSample, 'query_3');

module.exports = thirdQueryResultSampleModel;