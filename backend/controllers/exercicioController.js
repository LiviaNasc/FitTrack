const exercicioModel = require('../models/exercicioModel.js');

function criar(req, res) {
  const { nome, descricao } = req.body;
  if (!nome) {
    return res.status(400).json({ erro: 'Nome do exercício é obrigatório' });
  }

  try {
    const exercicio = exercicioModel.cadastrarExercicio(nome, descricao);
    res.status(201).json(exercicio);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao criar exercício' });
  }
}

function listar(req, res) {
  try {
    const lista = exercicioModel.listarExercicios();
    res.json(lista);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao listar exercícios' });
  }
}

module.exports = {
  criar,
  listar
};

