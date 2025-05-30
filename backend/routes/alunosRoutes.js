const express = require('express');
const router = express.Router();
const controller = require('../controllers/alunosController');
const autenticar = require('../middlewares/authMiddleware');

router.get('/listarAlunos', autenticar, controller.buscarTodosAlunos);
router.get('/:id', autenticar, controller.buscarAlunoPorId);
router.get('/cpf/:cpf', autenticar, controller.buscarAlunoPorCpf);
router.put('/:id', autenticar, controller.atualizarAluno);
router.delete('/:id', autenticar, controller.deletarAluno);

module.exports = router;