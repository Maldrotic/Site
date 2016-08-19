var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index.ejs', {
    title: 'Maldrotic - Home'
  });
});

module.exports = router;