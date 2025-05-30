const express = require('express');
const router = express.Router();
const controller = require('../controllers/instrutorController');
const autenticar = require('../middlewares/authMiddleware');

router.get('/listarInstrutores', autenticar, controller.buscarTodosInstrutores);
router.get('/:id', autenticar, controller.buscarInstrutorPorId);
router.get('/cpf/:cpf', autenticar, controller.buscarInstrutorPorCpf);
router.put('/:id', autenticar, controller.atualizarInstrutor);
router.delete('/:id', autenticar, controller.deletarInstrutor);

module.exports = router;
