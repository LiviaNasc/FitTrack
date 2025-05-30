const treinoModel = require('../models/treinoModel.js');

function cadastrarTreino(req, res) {
    const { aluno_id, instrutor_id, data, observacao, exercicios } = req.body;

    if (!aluno_id || !instrutor_id || !data || !Array.isArray(exercicios)) {
        return res.status(400).json({ erro: 'Dados do treino inválidos' });
    }

    try {
        const treinoId = treinoModel.criarTreino({ aluno_id, instrutor_id, data, observacao });

        exercicios.forEach(exercicio => {
            treinoModel.adicionarExercicioAoTreino(treinoId, exercicio);
        });

        res.status(201).json({ mensagem: 'Treino cadastrado com sucesso', treinoId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ erro: 'Erro ao cadastrar treino' });
    }
}

function visualizarTreinos(req, res) {
    const { aluno_id } = req.params;

    if (!aluno_id) {
        return res.status(400).json({ erro: 'ID do aluno é obrigatório' });
    }

    try {
        const treinos = treinoModel.buscarTreinosPorAluno(aluno_id);
        res.json(treinos);
    } catch (err) {
        console.error(err);
        res.status(500).json({ erro: 'Erro ao buscar treinos' });
    }
}

module.exports = {
    cadastrarTreino,
    visualizarTreinos
};