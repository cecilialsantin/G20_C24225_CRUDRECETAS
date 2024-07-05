const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login', authController.login);

router.get('/me', authController.authenticate, authController.getMe); // Ruta con el usuario logeado

module.exports = router;
