module.exports.loadHome = (req, res) => {
    return res.render('home', {
        title: 'Student Attendance System | Home'
    });
};