var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'LinkedIn & Passport', profile: req.user })
});

module.exports = router;
