const router = require('express').Router();

router.use('/admin', require('./controllers/admin/admin.router'));
router.use('/users', require('./controllers/users/users.router'));

module.exports = router;
