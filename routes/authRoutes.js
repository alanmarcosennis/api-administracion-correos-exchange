const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

// Ruta de registro de usuario
router.post('/register', authController.register);

// Ruta de inicio de sesión
router.post('/login', authController.login);

module.exports = router;
