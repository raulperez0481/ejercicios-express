// Suggested code may be subject to a license. Learn more: ~LicenseLog:4176095751.
import  express from 'express';

// Suggested code may be subject to a license. Learn more: ~LicenseLog:2022918322.
const app = express();

app.get('/', (req, res) => {
  res.send(`<h1>Hola mundo</h1><p>desde Express</p>`);
});

app.listen(3000, () => {
  console.log('Example app listening on https://localhost:3000');
});
