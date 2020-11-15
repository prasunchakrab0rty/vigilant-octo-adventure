const jwt = require('jsonwebtoken');
const config = require('./config');

async function authenticate(req, res, next) {
  const token = req.headers['x-access-token'];
  const result = await jwt.verify(token, config.accessToken);
  req.isAdmin = result.isAdmin;
  req.firstName = result.firstName;
  req.lastName = result.lastName;
  next();
}

module.exports = {
  authenticate
};
