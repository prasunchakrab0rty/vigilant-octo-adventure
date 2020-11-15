const router = require('express').Router();
const geocodeController = require('./geocode.controller');
const loginController = require('./login.controller');
const authenticate = require('../../authGuard');

router.get('/getLatLong', geocodeController.getLatLong);
router.post('/login', authenticate.authenticate, loginController.login);
router.post('/register', loginController.register);

module.exports = router;
