const express = require('express');
const router = express.Router();
const treinoController = require('../controllers/treinoController.js');
const autenticar = require('../middlewares/authMiddleware');

router.post('/cadastrarTreino', autenticar, treinoController.cadastrarTreino);
router.get('/visualizarTreinosAluno/:aluno_id', autenticar, treinoController.visualizarTreinos);

module.exports = router;


