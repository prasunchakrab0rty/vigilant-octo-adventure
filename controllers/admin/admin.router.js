const router = require('express').Router();
const adminController = require('./admin.controller');

router.post('/', adminController.setCity);

module.exports = router;
