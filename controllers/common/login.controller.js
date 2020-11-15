const log4js = require('log4js');
const bcrypt = require('bcrypt');
const UserModel = require('../../models/user.model');
const config = require('../../config');

const logger = log4js.getLogger('login.controller');
logger.level = config.logLevel;

async function login(req, res) {
  const { username, password } = req.body;
  try {
    const userDoc = await UserModel.findOne({ username });
    if (!userDoc) {
      return res.status(404).send({ message: 'username not found' });
    }
    const compare = await bcrypt.compare(password, userDoc.hash);
    if (!compare) {
      return res.status(401).send({ message: 'password do not match' });
    }
    return res.status(200).send({ message: 'log in success', userDoc });
  } catch (err) {
    logger.error(err);
    return res
      .status(400)
      .send({ message: 'Error fetching City List', result: {} });
  }
}

async function register(req, res) {
  const { username, password, firstName, lastName, isAdmin } = req.body;
  try {
    const hash = await bcrypt.hash(password, config.saltRounds);
    const userDoc = new UserModel({
      username,
      hash,
      firstName,
      lastName,
      isAdmin
    });
    const result = await userDoc.save();
    return res.status(201).send({ message: 'City List', result });
  } catch (err) {
    logger.error(err);
    return res
      .status(400)
      .send({ message: 'Error fetching City List', result: {} });
  }
}

module.exports = {
  login,
  register
};
