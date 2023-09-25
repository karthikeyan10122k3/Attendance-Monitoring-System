const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    admissionno: {
        type: String,
        required: true
    },
    regno: {
        type: Number,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Staff'
    },
    daysattended: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;