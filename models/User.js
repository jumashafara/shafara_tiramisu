const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required: true, 
        uique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    }
})

const User = mongoose.model('user', userSchema)

module.exports = User;