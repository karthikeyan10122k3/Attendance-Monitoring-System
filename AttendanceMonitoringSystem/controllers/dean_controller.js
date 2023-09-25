const Dean = require('../models/dean');

module.exports.loadPage = (req, res) => {
    return res.render('dean', {
        title: 'Dean | Dashboard'
    });
};

module.exports.loadSignup = (req, res) => {
    return res.render('deansignup', {
        title: 'Dean | Sign-up'
    });
};

module.exports.loadLogin = (req, res) => {
    return res.render('deanlogin', {
        title: 'Dean | Sign-in'
    });
};

module.exports.createUser = (req, res) => {
    (async () => {
        await Dean.create(req.body).then((user) => {
            return res.redirect('/dean/dashboard');
        }).catch((err) => {
            console.log(`Error: ${err.message}`);
        });
    })();
};