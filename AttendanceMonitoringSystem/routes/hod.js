const express = require('express');
const router = express.Router();
const hodController = require('../controllers/hod_controller');

router.get('/sign-up', hodController.loadSignup);
router.get('/login', hodController.loadLogin);
router.get('/dashboard', hodController.loadPage);
router.post('/create', hodController.createUser);

module.exports = router;