const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Meetup = require('../models/Meetup');

router.post('/users/:id', (req, res) => {
    User.create(req.body)
        .then(u => res.json(u))
        .catch(err => res.status(500).json({error: err}))
});

router.get('/users/:id', (req, res) => {
   User.findById(req.params.id)
       .then(user => res.json(user))
       .catch(err => res.status(500).json({error: err}))
});

router.patch('/users/:id', (req, res) => {
   User.findByIdAndUpdate(req.params.id, req.body, {new: true})
       .then(user => res.json(user))
       .catch(err => res.status(500).json({error: err}))
});

router.get('/meetups', (req, res) => {
   Meetup.find()
       .then(meetups => res.json(meetups))
       .catch(err => res.status(500).json({error: err}))
});

router.get('/meetups/:id', (req, res) => {
    Meetup.findById(req.params.id)
        .then(m => res.json(m))
        .catch(err => res.status(500).json({error: err}))
});

router.post('/meetups', (req, res) => {
    Meetup.create(req.body)
        .then(m => res.json(m))
        .catch(err => res.status(500).json({error: err}))
});

router.delete('/meetups/:id', (req, res) => {
   Meetup.findByIdAndRemove(req.params.id)
       .then(m => res.status(204).json('OK'))
       .catch(err => res.status(500).json({error: err}))
});

router.patch('/meetups/:id', (req, res) => {
    Meetup.findByIdAndUpdate(req.params.id, req.body, {new: true})
        
});

module.exports = router;