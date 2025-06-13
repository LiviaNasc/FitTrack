const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());

const authRoutes = require('./routes/authRoutes');
const treinoRoutes = require('./routes/treinoRoutes');
const exercicioRoutes = require('./routes/exercicioRoutes');
const userRoutes = require('./routes/userRoutes');
const alunosRoutes = require('./routes/alunosRoutes');
const instrutoresRoutes = require('./routes/instrutoresRoutes');
const medidasRoutes = require('./routes/medidasRoutes');

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/treino', treinoRoutes);
app.use('/exercicios', exercicioRoutes);
app.use('/usuarios', userRoutes);
app.use('/alunos', alunosRoutes);
app.use('/instrutores', instrutoresRoutes);
app.use('/medidas', medidasRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
