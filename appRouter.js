const router = require('express').Router();

router.use('/admin', require('./controllers/admin/admin.router'));
router.use('/users', require('./controllers/users/users.router'));
router.use('/common', require('./controllers/common/common.router'));

module.exports = router;
