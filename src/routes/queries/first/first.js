const express = require('express');
const dataModel = require('../../../model/first_query_model');
const cityModel = require('../../../model/city_model');

const router = express.Router();

const getCity = cityName => {
    return Promise.resolve(cityModel.findOne().where('name', cityName).exec());
};

const getCityInfo = async cityName => {
    return await getCity(cityName);
};

const resultMapping = async result => {
    return {
        year: result.year,
        city: await getCityInfo(result.city)
    }
};

const mapQueryResults = async(results) => {
    return await Promise.all(results.map(result => {
            return resultMapping(result)
        }
    ));
};

router.get('', (req, res) => {
    dataModel.find().exec(async (err, results) => {
        return res.send(await mapQueryResults(results));
    });
});


module.exports = router;