const mongoose = require('mongoose');

const userschema = mongoose.Schema({
    username: String,
    email: String,
    location: String,
    password: String,
    date_of_birth: String,
    confirm_password: String,
    role: String

})

const userModel = mongoose.model('users', userschema);

module.exports = { userModel };