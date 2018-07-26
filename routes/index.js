const express = require('express');
const router = express.Router();

const meetups = require('./meetups');
const users = require('./users');

router
    .use('/users', users)
    .use('/meetups', meetups)


module.exports = router;