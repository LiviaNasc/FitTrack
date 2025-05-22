const Database = require('better-sqlite3');
const db = new Database('database.sqlite');

// Criação da tabela de usuários
db.prepare(`
  CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    senha TEXT NOT NULL,
    telefone TEXT,
    tipo TEXT NOT NULL CHECK (tipo IN ('aluno', 'instrutor', 'admin'))
  )
`).run();


// Tabela de instrutores
db.prepare(`
    CREATE TABLE IF NOT EXISTS instrutores (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      cref TEXT NOT NULL,
      usuario_id INTEGER NOT NULL UNIQUE,
      FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
    )
  `).run();

module.exports = db;
