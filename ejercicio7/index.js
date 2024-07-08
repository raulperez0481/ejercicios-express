import express from 'express';
import { arrayDeCeros } from './arrayModule.js'; // Importación con nombre
import { numeroAleatorio } from './randomModule.js';

const app = express();
const port = 3000;

// Ruta para incrementar el valor en el índice aleatorio
app.get('/incrementar', (req, res) => {
  const indice = numeroAleatorio();
  arrayDeCeros[indice] += 1;
  res.json(arrayDeCeros);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});