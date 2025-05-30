const alunosModel = require('../models/alunosModel.js');

async function buscarTodosAlunos(req, res) {
    try {
        const alunos = await alunosModel.buscarTodosAlunos();
        res.status(200).json(alunos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao listar alunos' });
    }
}

async function buscarAlunoPorId(req, res) {
    const { id } = req.params;
    try {
        const aluno = await alunosModel.buscarAlunoPorId(id);
        if (!aluno) {
            return res.status(404).json({ erro: 'Aluno não encontrado' });
        }
        res.status(200).json(aluno);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao buscar aluno' });
    }
}   

async function buscarAlunoPorCpf(req, res) {
    const { cpf } = req.params;
    try {
        const aluno = await alunosModel.buscarAlunoPorCpf(cpf);
        if (!aluno) {
            return res.status(404).json({ erro: 'Aluno não encontrado' });
        }
        res.status(200).json(aluno);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao buscar aluno' });
    }
}   

async function atualizarAluno(req, res) {
    const { id } = req.params;
    const { nome, email, telefone } = req.body;

    if (!nome && !email && !telefone) {
        return res.status(400).json({ erro: 'Nenhum campo para atualizar foi enviado' });
    }

    try {
        await alunosModel.atualizarAluno(id, { nome, email, telefone });
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao atualizar aluno' });
    }
}   

async function deletarAluno(req, res) {
    const { id } = req.params;
    try {
        await alunosModel.deletarAluno(id);
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao deletar aluno' });
    }
}   

module.exports = {
    buscarTodosAlunos,
    buscarAlunoPorId,
    buscarAlunoPorCpf,
    atualizarAluno,
    deletarAluno
};