var express = require('express');
var router = express.Router();

router.use('/jobs', require('./job'))


module.exports = router;
