const db = require('../db/db');

function cadastrarMedida({ aluno_id, data, peso, altura, cintura, quadril, peito, braco }) {
    const stmt = db.prepare(`
        INSERT INTO medidas_corporais (aluno_id, data, peso, altura, cintura, quadril, peito, braco)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);
    stmt.run(aluno_id, data, peso, altura, cintura, quadril, peito, braco);
}

function listarMedidasPorAluno(aluno_id) {
    return db.prepare('SELECT * FROM medidas_corporais WHERE aluno_id = ? ORDER BY data DESC').all(aluno_id);
}

function excluirMedida(id) {
    const stmt = db.prepare('DELETE FROM medidas_corporais WHERE id = ?');
    stmt.run(id);
}


module.exports = { cadastrarMedida, listarMedidasPorAluno, excluirMedida };