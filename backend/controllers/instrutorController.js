const instrutorModel = require('../models/instrutorModel');

async function buscarTodosInstrutores(req, res) {
    try {
        const instrutores = await instrutorModel.buscarTodosInstrutores();
        res.status(200).json(instrutores);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao listar instrutores' });
    }
}

async function buscarInstrutorPorId(req, res) {
    const { id } = req.params;
    try {
        const instrutor = await instrutorModel.buscarInstrutorPorId(id);
        if (!instrutor) {
            return res.status(404).json({ erro: 'Instrutor não encontrado' });
        }
        res.status(200).json(instrutor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao buscar instrutor' });
    }
}


async function buscarInstrutorPorCpf(req, res) {
    const { cpf } = req.params;
    try {
        const instrutor = await instrutorModel.buscarInstrutorPorCpf(cpf);
        if (!instrutor) {
            return res.status(404).json({ erro: 'Instrutor não encontrado' });
        }
        res.status(200).json(instrutor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao buscar instrutor' });
    }
}   


async function atualizarInstrutor(req, res) {
    const { id } = req.params;
    const { cref, usuarioId } = req.body;

    if (!cref || !usuarioId) {
        return res.status(400).json({ erro: 'CREF e ID do usuário são obrigatórios' });
    }

    try {
        await instrutorModel.atualizarInstrutor(id, { cref, usuarioId });
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao atualizar instrutor' });
    } 
}  

async function deletarInstrutor(req, res) {
    const { id } = req.params;
    try {
        await instrutorModel.deletarInstrutor(id);
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao deletar instrutor' });
    }
}   

module.exports = {
    buscarTodosInstrutores,
    buscarInstrutorPorId,
    buscarInstrutorPorCpf,
    atualizarInstrutor,
    deletarInstrutor
};  