const mongoose = require('mongoose'), Schema = mongoose.Schema;

const meetupSchema = mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    dates: {type: Array, required: true},
    startTime: {type: String, required: true},
    blogLink: {type: String},
    isActive: {type: Boolean, required: true},
    users: [{type: Schema.Types.ObjectId, ref : 'User'}]
});

const Meetup = mongoose.model('Meetup', meetupSchema, 'meetups');
module.exports = Meetup;

