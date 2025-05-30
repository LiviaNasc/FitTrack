const userModel = require('../models/userModel');

async function buscarTodosUsuarios(req, res) {
    try {
        const users = await userModel.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao listar usuários' });
    }
}

async function buscarUsuarioPorId(req, res) {
    const { id } = req.params;
    try {
        const user = await userModel.getUserById(id);
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar usuário' });
    }
}


async function atualizarUsuario(req, res) {
    const { id } = req.params;
    const { nome, email, telefone } = req.body;

    if (!nome && !email && !telefone) {
        return res.status(400).json({ error: 'Nenhum campo para atualizar foi enviado' });
    }

    try {
        await userModel.atualizarUsuario(id, { nome, email, telefone });
        res.sendStatus(204);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
}

async function deletarUsuario(req, res) {
    const { id } = req.params;
    try {
        await userModel.deletarUsuario(id);
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao deletar usuário' });
    }
}

module.exports = {
    buscarTodosUsuarios,
    buscarUsuarioPorId,
    atualizarUsuario,
    deletarUsuario
};
