const User = require('../models/User');

module.exports = {
    getUsers: (req, res, next) => {
        User.find()
            .then(users => res.status(200).json(users))
            .catch(err => next(err))
    },
    createUser: (req, res, next) => {
        const newUser = new User(req.body);
        newUser.save()
            .then(user => res.status(200).json(user))
            .catch(err => next(err))
    },
    getById: (req, res, next) => {
        User.findById(req.params.id)
            .then(user => res.json(user))
            .catch(err => next(err))
    },
    getByAuthId: (req, res, next) => {
        User.findOne({authId: req.params.id})
            .then(user => res.json(user))
            .catch(err => next(err))
    },
    updateUser: (req, res, next) => {
        User.updateOne({authId: req.params.id}, req.body)
            .then(user=> res.json(user))
            .catch(err => next(err))
    }
};