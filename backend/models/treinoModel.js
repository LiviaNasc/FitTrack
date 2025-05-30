const db = require('../db/db.js');

function criarTreino(treino) {
    const stmt = db.prepare(`
        INSERT INTO treinos (aluno_id, instrutor_id, data, observacao)
        VALUES (?, ?, ?, ?)
    `);
    const result = stmt.run(treino.aluno_id, treino.instrutor_id, treino.data, treino.observacao);
    return result.lastInsertRowid;
}

function adicionarExercicioAoTreino(treinoId, exercicio) {
    const stmt = db.prepare(`
        INSERT INTO treino_exercicios (treino_id, exercicio_id, series, repeticoes, carga)
        VALUES (?, ?, ?, ?, ?)
    `);
    const result = stmt.run(
        treinoId,
        exercicio.exercicio_id,
        exercicio.series,
        exercicio.repeticoes,
        exercicio.carga
    );
    return result.lastInsertRowid;
}

function buscarTreinosPorAluno(aluno_id){
    const treinos = db.prepare('SELECT * FROM treinos WHERE aluno_id = ?').all(aluno_id);
    const treinoDetalhado = treinos.map(treino => {
        const exercicios = db.prepare(`
            SELECT te.*, e.nome, e.descricao
            FROM treino_exercicios te
            JOIN exercicios e ON te.exercicio_id = e.id
            WHERE te.treino_id = ?
        `).all(treino.id);

        return { ...treino, exercicios };
    });
    return treinoDetalhado;
}

module.exports = {
    criarTreino,
    adicionarExercicioAoTreino,
    buscarTreinosPorAluno
};