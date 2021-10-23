var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

//calling routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aboutPage = require('./routes/about')
var calculatePage = require('./routes/calculate')
var calRes = require('./routes/calResult')
var resourcePage = require('./routes/resource')
var userP1 = require('./routes/userP1')
var userP2 = require('./routes/userP2')
var userP3 = require('./routes/userP3')
var userP4 = require('./routes/userP4')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());



//all main routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about', aboutPage)
app.use('/calculate', calculatePage)
app.use('/calResult', calRes)
app.use('/resources',resourcePage)
app.use('/learn/htmlPage1.1',userP1)
app.use('/learn/htmlPage1.2',userP2)
app.use('/learn/htmlPage1.3',userP3)
app.use('/learn/htmlPage1.4',userP4)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
