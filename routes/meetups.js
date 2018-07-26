const express = require('express');
const router = express.Router();

const MeetupsController = require('../controllers/meetups.controller');

router.route('/')
    .get(MeetupsController.getMeetups)
    .post(MeetupsController.createMeetup);

router.route('/:id')
    .get(MeetupsController.getById)
    .patch(MeetupsController.update)
    .delete(MeetupsController.delete);

router.route('/:id/users')
    .get(MeetupsController.getMeetupUsers)
    .post(MeetupsController.newMeetupUser);

module.exports = router;