require('dotenv/config');
const cors = require('cors');
const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(`${process.env.mongo_uri}/${process.env.mongo_db}`, { useNewUrlParser: true })
        .then(() => console.log('MongoDB connected…'))
        .catch(err => console.log(err));

//app.use(cors);

app.use('/api/v1/queries', routes);

app.listen(process.env.port, () =>
    console.log('Jasmine Batch app listening on port ' + process.env.port + '!'),
);