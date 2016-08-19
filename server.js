var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var serveFavicon = require('serve-favicon');

var port = process.env.PORT || 3000;

var app = express();
var http = require('http').Server(app);

var faviconDir = __dirname+'/dist/images/favicon.ico';
app.use(serveFavicon(faviconDir));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', __dirname+'/public/views');

app.use('/dist', express.static('dist'));
app.use('/bower_components', express.static('bower_components'));

app.use('/', require('./routes/index'));

http.listen(port, function() {
  console.log('Server running on port ' + port);
});

exports.app = app;