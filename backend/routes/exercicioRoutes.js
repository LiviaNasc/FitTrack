const express = require('express');
const router = express.Router();
const controller = require('../controllers/exercicioController');
const autenticar = require('../middlewares/authMiddleware');

router.post('/criarExercicio', autenticar, controller.criar);
router.get('/listarExercicios', autenticar, controller.listar);
router.get('/buscar', autenticar, controller.buscarOuImportar);
router.delete('/excluirExercicio/:id', autenticar, controller.excluirExercicio);
router.put('/atualizarExercicio/:id', autenticar, controller.atualizarExercicio);
router.get('/buscarExercicioPorId/:id', autenticar, controller.buscarExercicioPorId);

module.exports = router;
