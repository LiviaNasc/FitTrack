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

function excluirTreino(treinoId) {
    db.prepare('DELETE FROM treino_exercicios WHERE treino_id = ?').run(treinoId);
    const stmt = db.prepare('DELETE FROM treinos WHERE id = ?');
    return stmt.run(treinoId);
}

function editarTreino(treinoId, dados) {
    const campos = [];
    const valores = [];

    if (dados.data) {
        campos.push('data = ?');
        valores.push(dados.data);
    }
    
    if (dados.observacao) {
        campos.push('observacao = ?');
        valores.push(dados.observacao);
    }

    if (campos.length === 0) {
        throw new Error('Nenhum campo fornecido para atualização');
    }

    const query = `UPDATE treinos SET ${campos.join(', ')} WHERE id = ?`;
    valores.push(treinoId);
}

function listarTreinos() {
    const stmt = db.prepare('SELECT * FROM treinos');
    return stmt.all();
}

function atualizarTreinoExercicio(id, dados) {
    const campos = [];
    const valores = [];

    if (dados.series_realizadas !== undefined) {
        campos.push('series_realizadas = ?');
        valores.push(dados.series_realizadas);
    }
    if (dados.repeticoes_realizadas !== undefined) {
        campos.push('repeticoes_realizadas = ?');
        valores.push(dados.repeticoes_realizadas);
    }
    if (dados.carga_realizada !== undefined) {
        campos.push('carga_realizada = ?');
        valores.push(dados.carga_realizada);
    }
    if (dados.concluido !== undefined) {
        campos.push('concluido = ?');
        valores.push(dados.concluido);
    }
    if (dados.comentario !== undefined) {
        campos.push('comentario = ?');
        valores.push(dados.comentario);
    }

    if (campos.length === 0) {
        throw new Error('Nenhum campo fornecido para atualização');
    }

    const query = `UPDATE treino_exercicios SET ${campos.join(', ')} WHERE id = ?`;
    valores.push(id);

    db.prepare(query).run(...valores);
}

module.exports = {
    criarTreino,
    adicionarExercicioAoTreino,
    buscarTreinosPorAluno,
    editarTreino,
    excluirTreino,
    listarTreinos,
    atualizarTreinoExercicio
};