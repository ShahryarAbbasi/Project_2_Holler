const mongoose = require('mongoose');

const hollerSchema = new mongoose.Schema({
    username: {type: String, required: true},
    body: {type: String, required: true},
    img: {type: String},
    like: {type: Number},
})

const holler = mongoose.model('holler', hollerSchema);
module.exports = holler;