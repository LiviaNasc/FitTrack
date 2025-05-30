const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
require('dotenv').config();

async function registrar(req, res) {
    const { nome, email, senha, telefone, tipo, cref } = req.body;
  
    if (!['aluno', 'instrutor', 'admin'].includes(tipo)) {
      return res.status(400).json({ erro: 'Tipo de usuário inválido' });
    }
  
    if (tipo === 'instrutor' && !cref) {
      return res.status(400).json({ erro: 'CREF é obrigatório para instrutores' });
    }
  
    const senhaCriptografada = await bcrypt.hash(senha, 10);
  
    try {
      const usuario = userModel.criarUsuario(nome, email, senhaCriptografada, telefone, tipo);
  
      if (tipo === 'instrutor') {
        userModel.criarInstrutor(cref, usuario.id);
      }
  
      res.status(201).json({ mensagem: 'Usuário criado com sucesso', usuario });
    } catch (err) {
      console.error(err);
      res.status(400).json({ erro: 'Email já cadastrado ou dados inválidos.' });
    }
  }

async function login(req, res) {
  const { email, senha } = req.body;
  const usuario = userModel.buscarPorEmail(email);

  if (!usuario) return res.status(401).json({ erro: 'Email ou senha inválidos' });

  const senhaValida = await bcrypt.compare(senha, usuario.senha);
  if (!senhaValida) return res.status(401).json({ erro: 'Email ou senha inválidos' });

  const token = jwt.sign({ id: usuario.id, tipo: usuario.tipo }, process.env.JWT_SECRET, {
    expiresIn: '1h'
  });

  res.json({ mensagem: 'Login bem-sucedido', token, usuario: { id: usuario.id, nome: usuario.nome, tipo: usuario.tipo } });
}

module.exports = {
  registrar,
  login
};
