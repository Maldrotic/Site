var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('pong.ejs', {
    title: 'Pong - Maldrotic'
  });
});

module.exports = router;