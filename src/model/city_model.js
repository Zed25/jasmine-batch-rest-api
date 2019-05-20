const mongoose = require('mongoose');

const citySample = new mongoose.Schema({
    name: String,
    lat: Number,
    lon: Number,
    country: String,
    offset: String
});

const citySampleModel = mongoose.model('city', citySample, 'cities');

module.exports = citySampleModel;