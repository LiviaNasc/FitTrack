const exercicioModel = require('../models/exercicioModel.js');
const exercicioService = require('../services/exercicioService');

function criar(req, res) {
  const { nome, descricao, tipo, musculo, equipamento, dificuldade } = req.body;
  if (!nome) {
    return res.status(400).json({ erro: 'Nome do exercício é obrigatório' });
  }

  try {
    const exercicio = exercicioModel.cadastrarExercicio(nome, descricao, tipo, musculo, equipamento, dificuldade);
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

async function buscarOuImportar(req, res) {
  const { nome } = req.query;
  if (!nome) return res.status(400).json({ erro: 'Parâmetro nome é obrigatório' });

  try {
    const exercicio = await exercicioService.buscarOuImportarExercicio(nome);
    res.json(exercicio);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: err.message });
  }
}

async function excluirExercicio(req, res) {
  const { id } = req.params;
  if (!id) return res.status(400).json({ erro: 'ID do exercício é obrigatório' });

  try {
    const resultado = exercicioModel.excluirExercicio(id);
    res.json(resultado);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao excluir exercício' });
  }
}

async function atualizarExercicio(req, res) {
  const { id } = req.params;
  const { nome, descricao, tipo, musculo, equipamento, dificuldade } = req.body;

  if (!id) return res.status(400).json({ erro: 'ID do exercício é obrigatório' });
  if (!nome && !descricao && !tipo && !musculo && !equipamento && !dificuldade) {
    return res.status(400).json({ erro: 'Pelo menos um campo deve ser fornecido para atualização' });
  }

  try {
    exercicioModel.atualizarExercicio(id, { nome, descricao, tipo, musculo, equipamento, dificuldade });
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao atualizar exercício' });
  }
}

function buscarExercicioPorId(req, res) {
  const { id } = req.params;
  if (!id) return res.status(400).json({ erro: 'ID do exercício é obrigatório' });

  try {
    const exercicio = exercicioModel.buscarExercicioPorId(id);
    if (!exercicio) {
      return res.status(404).json({ erro: 'Exercício não encontrado' });
    }
    res.json(exercicio);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao buscar exercício' });
  }
}



module.exports = {
  criar,
  listar,
  buscarOuImportar,
  excluirExercicio,
  atualizarExercicio,
  buscarExercicioPorId
};

