const db = require('../db/db');

function criarUsuario(nome, email, senha, telefone, tipo) {
  const stmt = db.prepare('INSERT INTO usuarios (nome, email, senha, telefone, tipo) VALUES (?, ?, ?, ?, ?)');
  const result = stmt.run(nome, email, senha, telefone, tipo);
  return { id: result.lastInsertRowid, nome, email, telefone, tipo };
}

function criarInstrutor(cref, usuarioId) {
  const stmt = db.prepare('INSERT INTO instrutores (cref, usuario_id) VALUES (?, ?)');
  stmt.run(cref, usuarioId);
}

function buscarPorEmail(email) {
  const stmt = db.prepare('SELECT * FROM usuarios WHERE email = ?');
  const usuario = stmt.get(email);
  return usuario;
}


module.exports = {
  criarUsuario,
  criarInstrutor,
  buscarPorEmail
};