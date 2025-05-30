const db = require('../db/db');

function buscarInstrutorPorId(id) {
  const stmt = db.prepare('SELECT * FROM instrutores WHERE usuario_id = ?');
  return stmt.get(id);
}

function buscarInstrutorPorCpf(cpf) {
  const stmt = db.prepare('SELECT * FROM instrutores WHERE cpf = ?');
  return stmt.get(cpf);
}

function buscarTodosInstrutores() {
  const stmt = db.prepare('SELECT * FROM instrutores');
  return stmt.all();
} 

function atualizarInstrutor(id, dados){
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
    
    if (dados.cref) {
        campos.push('cref = ?');
        valores.push(dados.cref);
    }
    
    if (campos.length === 0) {
        throw new Error('Nenhum campo fornecido para atualização');
    }
    
    const query = `UPDATE instrutores SET ${campos.join(', ')} WHERE usuario_id = ?`;
    valores.push(id);
    
    db.prepare(query).run(...valores);
}

function deletarInstrutor(id) {
  const stmt = db.prepare('DELETE FROM instrutores WHERE usuario_id = ?');
  stmt.run(id);
}

module.exports = {
  buscarInstrutorPorId,
  buscarInstrutorPorCpf,
  buscarTodosInstrutores,
  atualizarInstrutor,
  deletarInstrutor
};  