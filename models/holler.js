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
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true })

const Holler = mongoose.model('Holler', hollerSchema)

module.exports = Holler