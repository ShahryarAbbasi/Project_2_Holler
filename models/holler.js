const mongoose = require('mongoose')

const hollerSchema = new mongoose.Schema({
    body: { 
        type: String 
    },
    image: {
        type: String
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "Users"
    }
}, { timestamps: true })

const Holler = mongoose.model('Holler', hollerSchema)

module.exports = Holler