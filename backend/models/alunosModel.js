const db = require('../db/db');

function buscarTodosAlunos() {
    const stmt = db.prepare("SELECT * FROM usuarios WHERE tipo = 'aluno'");
    return stmt.all();
}

function buscarAlunoPorId(id) {
    const stmt = db.prepare("SELECT * FROM usuarios WHERE id = ? AND tipo = 'aluno'");
    return stmt.get(id);
}

function buscarAlunoPorCpf(cpf) {
    const stmt = db.prepare("SELECT * FROM usuarios WHERE cpf = ? AND tipo = 'aluno'");
    return stmt.get(cpf);
}

function deletarAluno(id) {
    const stmt = db.prepare("DELETE FROM usuarios WHERE id = ? AND tipo = 'aluno'");
    stmt.run(id);
}

function atualizarAluno(id, dados) {
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

    if (dados.cpf) {
        campos.push('cpf = ?');
        valores.push(dados.cpf);
    }

    if (campos.length === 0) {
        throw new Error('Nenhum campo fornecido para atualização');
    }

    const query = `UPDATE usuarios SET ${campos.join(', ')} WHERE id = ? AND tipo = 'aluno'`;
    valores.push(id);

    db.prepare(query).run(...valores);
}

module.exports = {
    buscarTodosAlunos,
    buscarAlunoPorId,
    buscarAlunoPorCpf,
    deletarAluno,
    atualizarAluno
};