const { Router } = require('express');
const router = Router();

router.use('/konoha', require('./konoha'))
router.use('/', require('./home'))

module.exports = router