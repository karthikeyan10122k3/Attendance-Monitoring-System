const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staff_controller');
const passport = require('passport');

router.get('/sign-up', staffController.loadSignup);
router.get('/login', staffController.loadLogin);
router.get('/profile', passport.checkAuthenticated, staffController.displayProfile);
router.get('/dashboard', staffController.loadPage);
router.post('/create', staffController.createUser);
router.post('/create-session',passport.authenticate(
    'local',{
        successRedirect: '/staff/dashboard',
        failureRedirect: '/staff/sign-up'
    }
) ,staffController.createSession);
router.get('/logout', staffController.destroySession);

module.exports = router;