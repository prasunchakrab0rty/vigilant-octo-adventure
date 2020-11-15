const router = require('express').Router();
const geocodeController = require('./geocode.controller');
const loginController = require('./login.controller');

router.get('/getLatLong', geocodeController.getLatLong);
router.post('/login', loginController.login);
router.post('/register', loginController.register);

module.exports = router;
