const express = require('express');
const router = express.Router();
const rolesController = require('../controllers/roles_controller');

router.get('/select-role', rolesController.loadRoles);

module.exports = router;