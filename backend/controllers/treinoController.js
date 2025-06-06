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

function editarTreino(req, res) {
    const { treinoId } = req.params;
    const dados = req.body;

    if (!treinoId || !dados) {
        return res.status(400).json({ erro: 'ID do treino e dados são obrigatórios' });
    }

    try {
        treinoModel.editarTreino(treinoId, dados);
        res.status(204).send();
    } catch (err) {
        console.error(err);
        res.status(500).json({ erro: 'Erro ao editar treino' });
    }
}

function listarTreinos(req, res) {
    try {
        const treinos = treinoModel.listarTreinos();
        res.json(treinos);
    } catch (err) {
        console.error(err);
        res.status(500).json({ erro: 'Erro ao listar treinos' });
    }
}

function excluirTreino(req, res) {
    const { treinoId } = req.params;

    if (!treinoId) {
        return res.status(400).json({ erro: 'ID do treino é obrigatório' });
    }

    try {
        treinoModel.excluirTreino(treinoId);
        res.status(204).send();
    } catch (err) {
        console.error(err);
        res.status(500).json({ erro: 'Erro ao excluir treino' });
    }
}   

function atualizarTreinoExercicio(req, res) {
    const { id } = req.params;
    const { series_realizadas, repeticoes_realizadas, carga_realizada, concluido, comentario } = req.body;

    if (!id) {
        return res.status(400).json({ erro: 'ID do exercício do treino é obrigatório' });
    }

    try {
        treinoModel.atualizarTreinoExercicio(id, { series_realizadas, repeticoes_realizadas, carga_realizada, concluido, comentario });
        res.status(204).send();
    } catch (err) {
        console.error(err);
        res.status(500).json({ erro: 'Erro ao atualizar exercício do treino' });
    }
}

function estatisticasAdesao(req, res) {
    try {
        const stats = treinoModel.estatisticasAdesao();
        res.json(stats);
    } catch (err) {
        console.error(err);
        res.status(500).json({ erro: 'Erro ao buscar estatísticas de adesão' });
    }
}

module.exports = {
    cadastrarTreino,
    visualizarTreinos,
    editarTreino,
    listarTreinos,
    excluirTreino,
    atualizarTreinoExercicio,
    estatisticasAdesao
};