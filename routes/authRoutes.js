// routes/authRoutes.js

const express = require('express');
const { loginUser } = require('../controllers/authController');

const router = express.Router();

// @route   POST /api/auth/login
// @desc    Admin login
// @access  Public
router.post('/login', loginUser);

module.exports = router;
