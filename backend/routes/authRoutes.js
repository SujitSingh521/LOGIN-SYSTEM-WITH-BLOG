// backend/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { register, login, logout } = require('../controllers/authController');

// Register Route
router.post('/signup', register);

// Login Route
router.post('/login', login);

// Logout Route
router.post('/logout', logout);

module.exports = router;
