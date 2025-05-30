const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());

const authRoutes = require('./routes/authRoutes');
const treinoRoutes = require('./routes/treinoRoutes');
const exercicioRoutes = require('./routes/exercicioRoutes');

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/treino', treinoRoutes);
app.use('/exercicios', exercicioRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
