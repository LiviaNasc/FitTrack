const axios = require('axios');
const db = require('../db/db');
const traduzirTexto = require('../utils/translate');

function buscarExercicioLocal(nome) {
  const stmt = db.prepare('SELECT * FROM exercicios WHERE LOWER(nome) = LOWER(?)');
  return stmt.get(nome);
}

function salvarExercicio(exercicio) {
  const stmt = db.prepare(`
    INSERT INTO exercicios (nome, descricao, tipo, musculo, equipamento, dificuldade)
    VALUES (?, ?, ?, ?, ?, ?)
  `);
  const result = stmt.run(
    exercicio.nome,
    exercicio.descricao,
    exercicio.tipo,
    exercicio.musculo,
    exercicio.equipamento,
    exercicio.dificuldade
  );
  return { id: result.lastInsertRowid, ...exercicio };
}

async function buscarOuImportarExercicio(nomePt) {
  const nomeEn = await traduzirTexto(nomePt);
  
  const res = await axios.get(`https://api.api-ninjas.com/v1/exercises?name=${encodeURIComponent(nomeEn)}`, {
    headers: { 'X-Api-Key': process.env.NINJA_API_KEY }
  });

  if (!res.data || res.data.length === 0) {
    throw new Error('Exercício não encontrado na API Ninja');
  }

  
  const original = res.data[0];
  const nomeTraduzido = await traduzirTexto(original.name);
  const existente = buscarExercicioLocal(nomeTraduzido);
  if (existente) return existente;
  const descricaoTraduzida = await traduzirTexto(original.instructions);
  const tipoTraduzido = await traduzirTexto(original.type);
  const musculoTraduzido = await traduzirTexto(original.muscle);
  const equipamentoTraduzido = await traduzirTexto(original.equipment);
  const dificuldadeTraduzida = await traduzirTexto(original.difficulty);

  const exercicioTraduzido = {
    nome: nomeTraduzido,
    descricao: descricaoTraduzida,
    tipo: tipoTraduzido,
    musculo: musculoTraduzido,
    equipamento: equipamentoTraduzido,
    dificuldade: dificuldadeTraduzida
  };

  return salvarExercicio(exercicioTraduzido);
}

module.exports = {
  buscarOuImportarExercicio
};