// reference mongoose
const mongoose = require('mongoose')

// define project schema
var projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    phone: {
        type: "Number",
        required: true
    },
    status: {
        type: String
    }
})

// export the schema so it's public - visible to the controller
module.exports = mongoose.model('Contact', projectSchema)