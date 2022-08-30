const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    handle: { type: String, required: [true, "handle cannot be empty"]},
    fullName: { type: String, required: [true, "name cannot be empty"]},
})

const Users = mongoose.model('Users', userSchema)


module.exports = Users