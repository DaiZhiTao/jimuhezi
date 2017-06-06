var express = require('express');
var ejs = require('ejs');
// var stylus = require('stylus');
var path = require('path')
var favicon = require('serve-favicon');
var app = express();
var routes = require('./routes/index');

app.use(express.static(path.join(__dirname, 'public')));

// app.use(stylus.middleware({
//   src: __dirname + '/stylus',
//   dest: __dirname + '/css',
//   debug: true,
//   force: true
// }));
//  设置模板引擎
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));

app.use('/',routes);

// server
var server = app.listen(8111, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at port:', port);
});
