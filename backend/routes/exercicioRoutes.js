const express = require('express');
const router = express.Router();
const controller = require('../controllers/exercicioController');
const autenticar = require('../middlewares/authMiddleware');

router.post('/criarExercicio', autenticar, controller.criar);
router.get('/listarExercicios', autenticar, controller.listar);

module.exports = router;
