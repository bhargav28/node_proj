const mongoose = require("mongoose");

const signUpSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
}, {timestamps: true});

const SignUp = mongoose.model('SignUp', signUpSchema);

module.exports = SignUp;