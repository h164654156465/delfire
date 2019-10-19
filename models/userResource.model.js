const mongoose = require('mongoose')
const Schema = mongoose.Schema

let ResourceSchema = new Schema({
    name: {
        type: String,
        required: true,
        max: 10
    },
    email: {
        type: String,
        required: true
    },
    plane: {
        type: String,
        required: true
    },
    plane_address: {
        type: String,
        required: true
    },
    plane_level: {
        type: String,
        required: true
    },
    flm_rtd: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Resource', ResourceSchema)