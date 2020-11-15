const router = require('express').Router();
const usersController = require('./users.controller');

router.post('/', usersController.checkCity);

module.exports = router;
