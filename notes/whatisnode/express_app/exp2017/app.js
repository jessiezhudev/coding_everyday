var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var lessMiddleware = require('less-middleware');
//1. require some dependencies

//mongoose part
var mongoose = require('mongoose');
//
var index = require('./routes/index');
// var users = require('./routes/users');
var app = express();
//2. create a app using express, where app get started

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

//this is where routes get used
app.use('/', index); //index is defined above
// app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//development environment only, mongoose part
if ('development' == app.get('dev')) {
  mongoose.connect('mongodb://55.55.5.5/mongo');
  //it's a database address, not working on my computer
}

// create a model for mongoose, and create a schema
mongoose.model('users', {name: String})
app.get('/users', function(req, res){
  // mongoose.model('users').find(function(err, users){
  //   res.send(users)
  // })
  res.send(200)
})
module.exports = app;
