const express = require('express');
const router = express.Router();
const medidasController = require('../controllers/medidasController');
const autenticar = require('../middlewares/authMiddleware');

router.post('/cadastrar', autenticar, medidasController.cadastrarMedida);
router.get('/listar/:aluno_id', autenticar, medidasController.listarMedidasPorAluno);

module.exports = router;