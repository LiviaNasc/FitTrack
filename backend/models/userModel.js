import { prepare } from '../db/db';

function criarUsuario(nome, email, senha, telefone, tipo) {
    const stmt = prepare('INSERT INTO usuarios (nome, email, senha, telefone, tipo) VALUES (?, ?, ?, ?, ?)');
    const result = stmt.run(nome, email, senha, telefone, tipo);
    return { id: result.lastInsertRowid, nome, email, telefone, tipo };
}

function criarInstrutor(cref, usuarioId) {
    const stmt = prepare('INSERT INTO instrutores (cref, usuario_id) VALUES (?, ?)');
    stmt.run(cref, usuarioId);
}

function buscarPorEmail(email) {
    return prepare('SELECT * FROM usuarios WHERE email = ?').get(email);
}

export default {
    criarUsuario,
    criarInstrutor,
    buscarPorEmail
};