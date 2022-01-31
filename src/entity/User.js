const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        max: 255,
        min: 3,
    },
    mobileNumber: {
        type: Number,
        required: true,
        unique: true,
        min: 5,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        max: 255,
        min: 3,
    },
    address: {
        type: String,
        required: true,
        max: 255,
        min: 3,
    },
});

module.exports = mongoose.model('user', userSchema);
