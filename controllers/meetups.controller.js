const Meetup = require('../models/Meetup');
const User = require('../models/User');

module.exports = {
    getMeetups: (req, res, next) => {
        Meetup.find()
            .then(meetups => res.json(meetups))
            .catch(err => next(err))
    },
    createMeetup: (req, res, next) => {
        Meetup.create(req.body)
            .then(meetup => res.json(meetup))
            .catch(err => next(err))
    },
    getById: (req, res, next) => {
        Meetup.findById(req.params.id)
            .then(meetup => res.json(meetup))
            .catch(err => next(err))
    },
    update: (req, res, next) => {
        Meetup.findByIdAndUpdate(req.params.id, req.body, {new : true})
            .then(meetup=> res.json(meetup))
            .catch(err => next(err))
    },
    delete: (req, res, next) => {
        Meetup.findByIdAndRemove(req.params.id)
            .then(meetup => res.json(meetup))
            .catch(err => next(err))
    },
    getMeetupUsers: (req, res, next) => {
        const meetupId = req.params.id;
        Meetup.findById(meetupId).populate('users')
            .then(meetup => res.json(meetup.users))
            .catch(err => next(err))
    },
    newMeetupUser: async (req, res, next) => {
        const meetupId = req.params.id;
        const newUser = new User(req.body);
        const meetup = await Meetup.findById(meetupId);
        if(meetup.users.indexOf(newUser._id) === -1) {
            meetup.users.push(newUser);
            meetup.save()
                .then(res.status(200).json('Success'))
                .catch(err => next(err))
        } else {
            res.status(403).json('User is already exists!!!');
        }
    }
};