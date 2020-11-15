const router = require('express').Router();
const commonController = require('./common.controller');

router.get('/getLatLong', commonController.getLatLong);

module.exports = router;
