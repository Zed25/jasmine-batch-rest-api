require('dotenv/config');
const cors = require('cors');
const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/jasmine_batch', { useNewUrlParser: true })
        .then(() => console.log('MongoDB connected…'))
        .catch(err => console.log(err));

//app.use(cors);

app.use('/queries', routes);

app.listen(process.env.port, () =>
    console.log('Example app listening on port ' + process.env.port + '!'),
);