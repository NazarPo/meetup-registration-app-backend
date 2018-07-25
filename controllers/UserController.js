const User = require('../models/User');

class UserController {
    find() { return User.find() }
    create(guest) { return User.create(guest) }
    findById(id) { return User.findById(id) }
    removeById(id) { return User.findByIdAndRemove(id) }
    updateOne(object, body) { return User.findOneAndUpdate(object, body, {new : true}) }
    findOne(object) { return User.findOne(object) }
}

module.exports = new UserController()