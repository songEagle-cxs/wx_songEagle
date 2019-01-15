const router = require('koa-router')();
const contact = require('../contact/index.js');


router.use('/blogapi', contact.routes(), contact.allowedMethods());

module.exports = router;