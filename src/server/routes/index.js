var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'LinkedIn & Passport', profile: req.user })
});

router.get('/logout', function(req, res, next){
  req.session = null;
  res.redirect('/');
})
module.exports = router;
