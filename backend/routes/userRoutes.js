const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const autenticar = require('../middlewares/authMiddleware');

router.get('/listarUsuarios', autenticar, controller.buscarTodosUsuarios);
router.get('/:id', autenticar, controller.buscarUsuarioPorId);
router.put('/:id', autenticar, controller.atualizarUsuario);
router.delete('/:id', autenticar, controller.deletarUsuario);

module.exports = router;
