const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

router.get('/', homeController.loadHome);
router.use('/roles', require('./roles'));
router.use('/hod', require('./hod'));
router.use('/dean', require('./dean'));
router.use('/staff', require('./staff'));
router.use('/student', require('./student'));

module.exports = router;
