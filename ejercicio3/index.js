import express from 'express';

const app = express();

// Array de nombres
const nombres = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];


// Ruta para devolver la lista de nombres en formato HTML
app.get('/personas/', (req, res) => {
  // Crear una lista HTML
  let listaHTML = '<ul>';

  nombres.forEach(nombre => {
    listaHTML += `<li>${nombre}</li>`;
  });

  listaHTML += '</ul>';

  // Devolver la lista HTML como respuesta
  res.send(listaHTML);
});

// Ruta para devolver detalles de una persona específica por nombre
app.get('/personas/:nombre', (req, res) => {
  const nombre = req.params.nombre;

  // Verificar si el nombre está en el array de nombres
  if (!nombres.includes(nombre)) {
    return res.status(404).send('Persona no encontrada. Por favor proporciona un nombre válido.');
  }

  // Devolver detalles de la persona encontrada (en este caso, datos ficticios)
  res.send(`${nombre}: está en la lista`);
});

app.listen(3000, () => {
    console.log('Example app listening on https://localhost:3000');
});
