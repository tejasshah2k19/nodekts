const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/session.controller');

router.post('/signup', sessionController.signup);
router.post('/login', sessionController.login);
router.post('/forgot-password', sessionController.forgotPassword); // Add this line

module.exports = router;