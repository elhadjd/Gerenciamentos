const mongoose = require('mongoose')

const User = mongoose.model('Users',{
    name: String,
    email: String,
    password: String,
    image: String,
    genre: String,
    state: Boolean,
    level: String
})

module.exports = User