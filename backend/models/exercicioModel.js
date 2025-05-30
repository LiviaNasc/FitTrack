const db = require('../db/db.js');

function cadastrarExercicio(nome, descricao) {
    const stmt = db.prepare('INSERT INTO exercicios (nome, descricao) VALUES (?, ?)');
    const result = stmt.run(nome, descricao);
    return { id: result.lastInsertRowid, nome, descricao };
}

function listarExercicios() {
    const stmt = db.prepare('SELECT * FROM exercicios');
    return stmt.all();
}

module.exports = {
    cadastrarExercicio,
    listarExercicios
};