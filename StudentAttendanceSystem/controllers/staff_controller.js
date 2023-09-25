const Staff = require('../models/staff');
const Student = require('../models/student');

module.exports.loadPage = (req, res) => {
    (async () => {
        try{
            if(req.isAuthenticated()){
                const students = await Student.find({teacher: req.user._id})
                return res.render('staff', {
                    title: "Staff | Dashboard",
                    studentData: students,
                });
            }else{
                return res.redirect('/staff/login');
            }
        }catch(err){
            console.log(`Error: ${err.message}`);
        }
    })();
};

module.exports.loadSignup = (req, res) => {
    return res.render('staffsignup', {
        title: "Staff | Sign-up"
    });
};

module.exports.loadLogin = (req, res) => {
    return res.render('stafflogin', {
        title: "Staff | Sign-in"
    });
};

module.exports.displayProfile = (req, res) => {
    return res.render('staffprofile', {
        title: req.user.username + " | Profile "
    });
};

module.exports.createUser = (req, res) => {
    (async () => {
        await Staff.create(req.body).then((user) => {
            return res.redirect('/staff/login');
        }).catch((err) => {
            console.log(`Error: ${err.message}`);
        });
    })();
};

module.exports.createSession = (req, res) => {
    return res.redirect('/');
};

module.exports.destroySession = (req, res) => {
    req.logout((err) => {
        if(err){
            console.log(`Error: ${err.message}`);
        }
        return res.redirect('/staff/login');
    })
}