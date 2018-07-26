const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/users.controllers');

router.route('/')
    .get(UsersController.getUsers)
    .post(UsersController.createUser);

router.route('/:id')
    .get(UsersController.getById);

router.route('/authId/:id')
    .get(UsersController.getByAuthId)
    .patch(UsersController.updateUser);

module.exports = router;