const db = require('../db/db.js');

function cadastrarExercicio(nome, descricao, tipo, musculo, equipamento, dificuldade) {
    if (!nome) {
        throw new Error('Nome, tipo e músculo são obrigatórios');
    }
    const stmt = db.prepare('INSERT INTO exercicios (nome, descricao, tipo, musculo, equipamento, dificuldade) VALUES (?, ?, ?, ?, ?, ?)');
    const result = stmt.run(nome, descricao, tipo, musculo, equipamento, dificuldade);
    return { id: result.lastInsertRowid, nome, descricao, tipo, musculo, equipamento, dificuldade };
}

function listarExercicios() {
    const stmt = db.prepare('SELECT * FROM exercicios');
    return stmt.all();
}

function buscarExercicioPorId(id) {
    const stmt = db.prepare('SELECT * FROM exercicios WHERE id = ?');
    return stmt.get(id);
}

function atualizarExercicio(id, dados){
    const campos = [];
    const valores = [];

    if (dados.nome) {
        campos.push('nome = ?');
        valores.push(dados.nome);
    }

    if (dados.descricao) {
        campos.push('descricao = ?');
        valores.push(dados.descricao);
    }

    if (dados.tipo) {
        campos.push('tipo = ?');
        valores.push(dados.tipo);
    }

    if (dados.musculo) {
        campos.push('musculo = ?');
        valores.push(dados.musculo);
    }

    if (dados.equipamento) {
        campos.push('equipamento = ?');
        valores.push(dados.equipamento);
    }

    if (dados.dificuldade) {
        campos.push('dificuldade = ?');
        valores.push(dados.dificuldade);
    }

    if (campos.length === 0) {
        throw new Error('Nenhum campo fornecido para atualização');
    }

    const query = `UPDATE exercicios SET ${campos.join(', ')} WHERE id = ?`;
    valores.push(id);

    db.prepare(query).run(...valores);
}

function excluirExercicio(id) {
    db.prepare('DELETE FROM treino_exercicios WHERE exercicio_id = ?').run(id);
    const stmt = db.prepare('DELETE FROM exercicios WHERE id = ?');
    stmt.run(id);
    return { message: 'Exercício excluído com sucesso' };
}


module.exports = {
    cadastrarExercicio,
    listarExercicios,
    buscarExercicioPorId,
    atualizarExercicio,
    excluirExercicio
};