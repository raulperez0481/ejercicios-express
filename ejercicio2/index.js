import express from 'express';

const app = express();

// Ruta que recibe un parámetro y devuelve un número aleatorio entre 1 y el número del parámetro
app.get('/random/:max', (req, res) => {

/* Especifica el sistema numérico a usar. 10 indica que estamos tratando con números decimales (base 10).
En versiones antiguas de JavaScript, una cadena que comienza con 0 podría interpretarse como base 8, resultando en 8 en lugar de 10.
Especificar la base es una buena práctica porque asegura que el valor se interprete correctamente  */
    const max = parseInt(req.params.max, 10);

    if (isNaN(max) || max < 1) {
        //añadir el status(400) para indicar que la solicitud no es válida, se puede visualizar en el inspector de elementos en la pestaña de red 
        return res.status(400).send('Invalid parameter. Please provide a positive integer.');
    }
    
    const randomNumber = Math.floor(Math.random() * max) + 1;
    res.send(`Random number between 1 and ${max} is ${randomNumber}`);
});

app.listen(3000, () => {
    console.log('Example app listening on https://localhost:3000');
});