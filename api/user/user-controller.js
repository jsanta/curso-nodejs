
const listUsers    = (req, res, next) => {
  console.log('userController listUsers');
  res.status(200).send('userController listUsers')
};
const retrieveUser = (req, res, next) => {
  console.log('userController retrieveUser');
  res.status(200).send('userController retrieveUser')

};
const createUser   = (req, res, next) => {
  console.log('userController createUser');
  res.status(200).send('userController createUser')

};
const modifyUser   = (req, res, next) => {
  console.log('userController modifyUser');
  res.status(200).send('userController modifyUser')

};
const removeUser   = (req, res, next) => {
  console.log('userController removeUser');
  res.status(200).send('userController removeUser')
};

module.exports = {
  listUsers,
  retrieveUser,
  createUser,
  modifyUser,
  removeUser
};