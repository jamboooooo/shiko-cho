const { Router } = require('express');
const router = Router();

router.use('/konoha', require('./konoha'))
router.use('/', require('./home'))
router.use('/cloud', require('./cloud'))
router.use('/sand', require('./sand'))

module.exports = router