const express = require('express');
const app = express();
const router = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

const DB_URL = 'mongodb://nazarposhtarenko:Tb37Vdly21XsJiU991Cd@ds257241.mlab.com:57241/interlink-meetup';
mongoose.connect(DB_URL, (err) => {
    if(err) {
        console.error('Mongo connection FAIL: ' + err)
    } else {
        console.log('Mongo connection OK')
    }
});

app.use(cors());
app.use(express.json());
app.use(router);

module.exports = app;