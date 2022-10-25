module.exports = function(req, res, next) {
  const app = req.app;
  
  // Listado de usuarios
  app.get('/users', listUsers);
  // Recupera un usuario en particular
  app.get('/user/:uuid', retrieveUser);

  // Crear usuario
  app.post('/user', createUser);
  // Actualizar usuario
  app.put('/user/:uuid', modifyUser);

  // Eliminar usuario
  app.del('/user/:uuid', removeUser);

  return app;
}