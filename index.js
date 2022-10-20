
// Esta es una copia literal del ejemplo Hello world del sitio de Express
// Ref. https://expressjs.com/es/starter/hello-world.html
const express = require('express'); // esto es basicamente el import
const app     = express(); // instancia de aplicacion
const port    = 3000; // en duro (debiera sacarse de una configuracion)

// EL endpoint al que se llega con http://localhost:3000/ (notese / )
/**
 * req: Request o peticion HTTP
 * res: Response, el objeto encargado de gestionar las respuestas de Express
 */
app.get('/', (req, res) => {
  // send envia un TEXTO
  console.log('Enviando saludo a los amigos del curso!');
  console.log('Req.query: ', req.query); // Despliega el objeto json con los parametros que se reciben via GET (ejemplo ?saludo=hola)
  const { saludo, despedida } = req.query;
  console.log('Variables: ', saludo, despedida);
  res.status(401).json({ saludo, adios: despedida });
});

/**
 * Iniciamos la aplicacion Express en el puerto indicado (variable port)
 */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// console.log('Hola desde el curso de 10 min de NodeJS!');