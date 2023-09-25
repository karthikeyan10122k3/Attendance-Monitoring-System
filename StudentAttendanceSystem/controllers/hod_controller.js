const Hod = require('../models/hod');

module.exports.loadPage = (req, res) => {
    return res.render('hod', {
        title: 'HOD | Dashboard'
    });
};

module.exports.loadSignup = (req, res) => {
    return res.render('hodsignup', {
        title: 'HOD | Sign-up'
    });
};

module.exports.loadLogin = (req, res) => {
    return res.render('hodlogin', {
        title: 'HOD | Sign-in'
    });
};

module.exports.createUser = (req, res) => {
    (async () => {
        await Hod.create(req.body).then((user) => {
            return res.redirect('/hod/dashboard');
        }).catch((err) => {
            console.log(`Error: ${err.message}`);
        });
    })();
}