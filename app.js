var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();

//先註解掉資料庫
// var mongoose = require('mongoose')

// mongoose.connect(process.env.COSMOSDB_CONNSTR + "?ssl=true&replicaSet=globaldb", {
//   auth: {
//     user: process.env.COSMOSDB_USER,
//     password: process.env.COSMOSDB_PASSWORD
//   }
// }).then(() => {
//   console.log('Connection to CosmosDB successfully')
// }).catch((err) => {
//   console.log(err)
// })

//先註解掉資料庫
// var mongoURI = 'mongodb://localhost:27017/NASA2019'
// mongoose.connect(mongoURI, { useNewUrlParser: true })
//   .then(() => {
//     console.log('Now connected to MongoDB');
//   })
//   .catch((err) => {
//     console.error('Something went wrong: ', err)
//   })

// var mongoClient = require("mongodb").MongoClient;
// mongoClient.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, function (err, client) {
//   console.log('connect success')
// });

var indexRouter = require('./routes/index');
var resourceRouter = require('./routes/resources')
var disasterRouter = require('./routes/disasters')

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/resource', resourceRouter)
app.use('/disaster', disasterRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
