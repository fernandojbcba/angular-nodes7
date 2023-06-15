const express = require('express');
const cors = require('cors');
const estadosEstaciones = require('./index.js');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json(estadosEstaciones);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});