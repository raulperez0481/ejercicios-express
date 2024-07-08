import express from 'express';

const app = express();
const port = 3000;

// Objeto con las propiedades nombre, apellidos y edad
const persona = {
  nombre: 'Juan',
  apellidos: 'Pérez',
  edad: 30
};

// Ruta para cambiar el nombre
app.get('/cambiarNombre/:nombre', (req, res) => {
  const nuevoNombre = req.params.nombre;
  persona.nombre = nuevoNombre;
  res.send(`Nombre cambiado a: ${persona.nombre}`);
});

// Ruta para cambiar los apellidos
app.get('/cambiarApellidos/:apellidos', (req, res) => {
  const nuevosApellidos = req.params.apellidos;
  persona.apellidos = nuevosApellidos;
  res.send(`Apellidos cambiados a: ${persona.apellidos}`);
});

// Ruta para cambiar la edad
app.get('/cambiarEdad/:edad', (req, res) => {
  const nuevaEdad = parseInt(req.params.edad, 10);

  if (isNaN(nuevaEdad) || nuevaEdad < 0) {
    return res.status(400).send('Edad inválida. Por favor proporciona un número entero positivo.');
  }

  persona.edad = nuevaEdad;
  res.send(`Edad cambiada a: ${persona.edad}`);
});

// Ruta para mostrar el objeto persona en formato HTML
app.get('/mostrarPersona', (req, res) => {
  const listaHTML = `
    <html>
      <head>
        <title>Datos de la Persona</title>
      </head>
      <body>
        <h1>Datos de la Persona</h1>
        <ul>
          <li>Nombre: ${persona.nombre}</li>
          <li>Apellidos: ${persona.apellidos}</li>
          <li>Edad: ${persona.edad}</li>
        </ul>
      </body>
    </html>
  `;
  res.send(listaHTML);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
