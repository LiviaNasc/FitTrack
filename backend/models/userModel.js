const e = require('express');
const db = require('../db/db');

function buscarTodosUsuarios() {
    const stmt = db.prepare('SELECT * FROM usuarios');
    return stmt.all();
}

function buscarUsuarioPorId(id) {
    const stmt = db.prepare('SELECT * FROM usuarios WHERE id = ?');
    return stmt.get(id);
}

function buscarUsuarioPorEmail(email) {
    const stmt = db.prepare('SELECT * FROM usuarios WHERE email = ?');
    return stmt.get(email);
}

function atualizarUsuario(id, dados) {
  const campos = [];
  const valores = [];

  if (dados.nome) {
    campos.push('nome = ?');
    valores.push(dados.nome);
  }

  if (dados.email) {
    campos.push('email = ?');
    valores.push(dados.email);
  }

  if (dados.telefone) {
    campos.push('telefone = ?');
    valores.push(dados.telefone);
  }

  if (campos.length === 0) {
    throw new Error('Nenhum campo fornecido para atualização');
  }

  const query = `UPDATE usuarios SET ${campos.join(', ')} WHERE id = ?`;
  valores.push(id);

  db.prepare(query).run(...valores);
}

function deletarUsuario(id) {
    const stmt = db.prepare('DELETE FROM usuarios WHERE id = ?');
    stmt.run(id);
}

exports = {
    buscarTodosUsuarios,
    buscarUsuarioPorId,
    buscarUsuarioPorEmail,
    atualizarUsuario,
    deletarUsuario
};
