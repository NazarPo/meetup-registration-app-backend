const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    login: {type: String, required: true},
    pass: {type: String, required: true},
    type: {type: String, required: true},
    name: {type: String, required: true},
    secondName: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, required: true},
    social: {type: String, required: true},
    birth: {type: Date, required: true},
    university: {type: String, required: true},
    faculty: {type: String, required: true},
    course: {type: String, required: true},
    hasLaptop: {type: Boolean},
    createdAt: {type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;