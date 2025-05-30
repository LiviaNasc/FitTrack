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

// Tabelas de exercícios disponíveis
db.prepare(`
  CREATE TABLE IF NOT EXISTS exercicios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    descricao TEXT
  )
`).run();

// Tabela de treinos criados
db.prepare(`
  CREATE TABLE IF NOT EXISTS treinos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    aluno_id INTEGER NOT NULL,
    instrutor_id INTEGER NOT NULL,
    data TEXT NOT NULL,
    observacao TEXT,
    FOREIGN KEY (aluno_id) REFERENCES usuarios(id),
    FOREIGN KEY (instrutor_id) REFERENCES usuarios(id)
  )
`).run();

// Exercícios que fazem parte do treino
db.prepare(`
  CREATE TABLE IF NOT EXISTS treino_exercicios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    treino_id INTEGER NOT NULL,
    exercicio_id INTEGER NOT NULL,
    series INTEGER,
    repeticoes INTEGER,
    carga TEXT,
    concluido BOOLEAN DEFAULT 0,
    comentario TEXT,
    FOREIGN KEY (treino_id) REFERENCES treinos(id),
    FOREIGN KEY (exercicio_id) REFERENCES exercicios(id)
  )
`).run();

// Tabela de logs de treino
db.prepare(`
  CREATE TABLE IF NOT EXISTS logs_treino (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    treino_exercicio_id INTEGER NOT NULL,
    data TEXT NOT NULL,
    repeticoes INTEGER,
    carga TEXT,
    FOREIGN KEY (treino_exercicio_id) REFERENCES treino_exercicios(id)
  )
`).run();




module.exports = db;
