import express from 'express';

const app = express();
const port = 3000;

// Array de estudiantes
let estudiantes = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

// Ruta para mostrar la lista de estudiantes en formato HTML
app.get('/estudiantes', (req, res) => {
  const listaHTML = `
        <h1>Lista de Estudiantes</h1>
        <ul>
          ${estudiantes.map(estudiante => `<li>${estudiante}</li>`).join('')}
       </ul>
  `;
  res.send(listaHTML);
});

// Ruta para agregar un estudiante
app.get('/estudiantes/:nombre', (req, res) => {
  const nuevoEstudiante = req.params.nombre;
  estudiantes.push(nuevoEstudiante);
  res.send(`Estudiante agregado: ${nuevoEstudiante}`);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});