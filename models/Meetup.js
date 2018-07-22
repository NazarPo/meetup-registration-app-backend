const mongoose = require('mongoose');
const meetupSchema = mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    dates: {type: Array, required: true},
    startTime: {type: String, required: true},
    blogLink: {type: String},
    isActive: {type: Boolean}
});

const Meetup = mongoose.model('Meetup', meetupSchema, 'meetups');
module.exports = Meetup;

