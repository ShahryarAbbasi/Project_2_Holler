const mongoose = require('mongoose')
require('dotenv').config()

const userSchema = new mongoose.Schema({
    handle: { type: String, required: [true, "handle cannot be empty"]},
    fullName: { type: String, required: [true, "name cannot be empty"]},
})

const User = mongoose.model('User', userSchema)
// const mongoURI = process.env.MONGODB_URI;
// const db = mongoose.connection

module.exports = User

