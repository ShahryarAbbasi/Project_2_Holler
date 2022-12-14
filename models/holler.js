const mongoose = require('mongoose')
require('dotenv').config()

const hollerSchema = new mongoose.Schema({
    body: { 
        type: String, 
        required: [true, "holler cannot be empty"]
    },
    image: {
        type: String
    },
    likes: {
        type: Number,
        default: 0,
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    }
}, { timestamps: true })

const Holler = mongoose.model('Holler', hollerSchema)

module.exports = Holler