const router = require('express').Router();
const adminController = require('./admin.controller');

router.post('/', adminController.setCity);
router.get('/', adminController.getCity);

module.exports = router;
