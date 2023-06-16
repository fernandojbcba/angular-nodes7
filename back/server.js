const express = require('express');
const cors = require('cors');
let estadosEstaciones = require('./index.js');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json(estadosEstaciones);
});
app.use(express.json())
app.post('/', (req, res) => {
  console.log(req.body)
  estadosEstaciones = req.body; // Actualiza la variable estadosEstaciones con los datos enviados en la solicitud POST
  res.send('Estaciones actualizadas correctamente');
  console.log(estadosEstaciones)
});
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});