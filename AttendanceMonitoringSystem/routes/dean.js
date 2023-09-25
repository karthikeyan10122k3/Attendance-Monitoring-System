const express = require('express');
const router = express.Router();
const deanController = require('../controllers/dean_controller');

router.get('/dashboard', deanController.loadPage);
router.get('/sign-up', deanController.loadSignup);
router.get('/login', deanController.loadLogin);
router.post('/create', deanController.createUser);

module.exports = router;