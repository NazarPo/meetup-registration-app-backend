const User = require('../models/User');

class UserController {
    find() { return User.find() }
    create(guest) { return User.create(guest) }
    findById(id) { return User.findById(id) }
    removeById(id) { return User.findByIdAndRemove(id) }
    updateById(id, body) { return User.findByIdAndUpdate(id, body, {new : true}) }
}

module.exports = new UserController()