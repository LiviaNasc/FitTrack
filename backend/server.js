const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());

const authRoutes = require('./routes/authRoutes');

app.use(express.json());
app.use('/auth', authRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
