import express from 'express';

const app = express();
const port = 3000;

// Variable almacén con departamentos y productos
const almacen = [
  {
    departamento: 'Electronica',
    productos: [
      { nombre: 'Televisor', precio: 300, stock: 10 },
      { nombre: 'Auriculares', precio: 50, stock: 50 },
      { nombre: 'Teclado', precio: 20, stock: 30 },
    ],
  },
  {
    departamento: 'Ropa',
    productos: [
      { nombre: 'Camiseta', precio: 10, stock: 100 },
      { nombre: 'Pantalones', precio: 20, stock: 60 },
      { nombre: 'Zapatos', precio: 40, stock: 25 },
    ],
  },
];

// Variable cesta
let cesta = [];

// Ruta para mostrar productos de un departamento
app.get('/departamento/:nombre', (req, res) => {
  const departamento = almacen.find(d => d.departamento.toLowerCase() === req.params.nombre.toLowerCase());
  if (departamento) {
    const tablaHTML = `
      <html>
        <body>
          <h1>Productos en ${departamento.departamento}</h1>
          <table border="1">
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Stock</th>
            </tr>
            ${departamento.productos.map(producto => `
              <tr>
                <td>${producto.nombre}</td>
                <td>${producto.precio}</td>
                <td>${producto.stock}</td>
              </tr>`).join('')}
          </table>
        </body>
      </html>
    `;
    res.send(tablaHTML);
  } else {
    res.status(404).send('Departamento no encontrado');
  }
});

// Ruta para comprar productos
app.get('/comprar/:departamento/:producto/:cantidad', (req, res) => {
  const { departamento, producto, cantidad } = req.params;
  const cantidadInt = parseInt(cantidad, 10);

  const depto = almacen.find(d => d.departamento.toLowerCase() === departamento.toLowerCase());
  if (depto) {
    const prod = depto.productos.find(p => p.nombre.toLowerCase() === producto.toLowerCase());
    if (prod) {
      if (prod.stock >= cantidadInt) {
        prod.stock -= cantidadInt;
        cesta.push({ nombre: prod.nombre, cantidad: cantidadInt, precio: prod.precio });
        res.send(`Has añadido ${cantidadInt} ${prod.nombre}(s) a la cesta`);
      } else {
        res.send('No hay stock suficiente');
      }
    } else {
      res.status(404).send('Producto no encontrado');
    }
  } else {
    res.status(404).send('Departamento no encontrado');
  }
});

// Ruta para mostrar la cesta
app.get('/cesta', (req, res) => {
  const tablaHTML = `
    <html>
      <body>
        <h1>Cesta</h1>
        <table border="1">
          <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
          ${cesta.map(item => `
            <tr>
              <td>${item.nombre}</td>
              <td>${item.cantidad}</td>
              <td>${item.precio}</td>
            </tr>`).join('')}
        </table>
      </body>
    </html>
  `;
  res.send(tablaHTML);
});

// Ruta para confirmar la compra
app.get('/confirmar', (req, res) => {
  cesta = [];
  res.send('Compra confirmada. Gracias por tu compra.');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
