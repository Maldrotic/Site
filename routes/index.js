var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index.ejs', {
    title: 'Home - Maldrotic'
  });
});

module.exports = router;