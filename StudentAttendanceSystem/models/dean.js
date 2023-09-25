const mongoose = require('mongoose');

const deanSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 5
    },
    userid: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        minLength: 6
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Dean = mongoose.model('Dean', deanSchema);

module.exports = Dean;