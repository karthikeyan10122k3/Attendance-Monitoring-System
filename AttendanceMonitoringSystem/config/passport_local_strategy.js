const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Staff = require('../models/staff');

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
}, async (username, password, done) => {
    await Staff.findOne({
        username: username,
        password: password
    }).then((user) => {
        if(!user){
            console.log(`Error in finding user`);
            return done(null, false);
        }else{
            return done(null, user);
        }
    }).catch((err) => {
        return done(err);
    });
}));

passport.serializeUser(async (user, done) => {
    return done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
    try{
        const user = await Staff.findById(id);
        if(user){
            return done(null, user);
        }else{
            return done(null, false);
        }
    }catch(err){
        return done(err);
    }
});

passport.checkAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    }else{
        return res.redirect('/');
    }
};

passport.setAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }
    return next();
};

module.exports = passport;