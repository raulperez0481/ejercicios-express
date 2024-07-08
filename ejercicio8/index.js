import express from 'express';
import { arrayDeCeros } from './arrayModule.js';
import { numeroAleatorio } from './randomModule.js';

const app = express();
const port = 3000;

app.get('/incrementar', (req, res) => {
  const indice = numeroAleatorio();
  arrayDeCeros[indice] += 1;
  res.json(arrayDeCeros);
});

app.get('/borrar/:numero', (req, res) => {
  const numero = parseInt(req.params.numero, 10);
  const indice = arrayDeCeros.indexOf(numero);
  
  if (indice !== -1) {
    arrayDeCeros[indice] = 0;
    res.json({
      mensaje: `El número ${numero} ha sido borrado.`,
      array: arrayDeCeros
    });
  } else {
    res.status(404).json({
      error: `El número ${numero} no se encontró en el array.`
    });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
