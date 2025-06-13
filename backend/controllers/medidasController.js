const medidasModel = require('../models/medidasModel');

function cadastrarMedida(req, res) {
    try {
        medidasModel.cadastrarMedida(req.body);
        res.status(201).json({ mensagem: 'Medida cadastrada com sucesso' });
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao cadastrar medida' });
    }
}

function listarMedidasPorAluno(req, res) {
    try {
        const medidas = medidasModel.listarMedidasPorAluno(req.params.aluno_id);
        res.json(medidas);
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao listar medidas' });
    }
}

async function excluirMedida(req, res) {
    try {
        await medidasModel.excluirMedida(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao excluir medida' });
    }
}

module.exports = { cadastrarMedida, listarMedidasPorAluno, excluirMedida};