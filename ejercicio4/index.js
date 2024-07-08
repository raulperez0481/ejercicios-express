import express from 'express';
import { saludarEnExpress } from './saludo.js';

const app = express();
const port = 3000;

// Ruta que usa la función saludarEnExpress para devolver un saludo
app.get('/saludo', (req, res) => {
  const saludo = saludarEnExpress();
  res.send(saludo);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
