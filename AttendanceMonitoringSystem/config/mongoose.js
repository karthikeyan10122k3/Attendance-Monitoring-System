const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/AttendanceSystemDev');
const db = mongoose.connection;

db.on('error', console.error.bind(console, `Error in connecting to db`));

db.once('open', () => {
    console.log(`Connected to db successfully`);
})

module.exports = db;
