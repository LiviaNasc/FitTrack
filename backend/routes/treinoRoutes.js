const express = require('express');
const router = express.Router();
const treinoController = require('../controllers/treinoController.js');
const autenticar = require('../middlewares/authMiddleware');

router.post('/cadastrarTreino', autenticar, treinoController.cadastrarTreino);
router.get('/visualizarTreinosAluno/:aluno_id', autenticar, treinoController.visualizarTreinos);
router.put('/editarTreino/:treinoId', autenticar, treinoController.editarTreino);
router.delete('/excluirTreino/:treinoId', autenticar, treinoController.excluirTreino);
router.get('/listarTreinos', autenticar, treinoController.listarTreinos);
router.put('/treino-exercicio/:id', autenticar, treinoController.atualizarTreinoExercicio);

module.exports = router;


