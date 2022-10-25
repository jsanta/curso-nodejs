const userApi = require('./user')
module.exports = function(req, res, next) {
  const app = req.app;
  app.use('/user', userApi);
}