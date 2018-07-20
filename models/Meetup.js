const mongoose = require('mongoose');
const meetupSchema = mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String},
    blogLink: {type: String}
});

const Meetup = mongoose.model('Meetup', meetupSchema, 'meetups');
module.exports = Meetup;

