
// Esta es una copia literal del ejemplo Hello world del sitio de Express
// Ref. https://expressjs.com/es/starter/hello-world.html
const express = require('express'); // esto es basicamente el import
const app     = express(); // instancia de aplicacion
const port    = 3002; // en duro (debiera sacarse de una configuracion)
const routes = require('./api/routes')
app.use(routes);

/**
 * Iniciamos la aplicacion Express en el puerto indicado (variable port)
 */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// console.log('Hola desde el curso de 10 min de NodeJS!');