const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const autenticar = require('../middlewares/authMiddleware');

router.post('/register', autenticar, authController.registrar);
router.post('/login', authController.login);

module.exports = router;
