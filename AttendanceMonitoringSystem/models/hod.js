const mongoose = require('mongoose');

const hodSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        minLength: 6
    },
    userid: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Hod = mongoose.model(`Hod`, hodSchema);

module.exports = Hod;