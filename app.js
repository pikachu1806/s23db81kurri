var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Aircraft = require("./models/aircraft");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var chooseRouter = require('./routes/choose');
const aircraftRoute = require('./routes/aircraft');
const boardRouter = require('./routes/board');

var resourceRouter = require('./routes/resource');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

// We can seed the collection if needed on server start
async function recreateDB(){
  // Delete everything
  await Aircraft.deleteMany();
    
    let instance1 = new
    Aircraft({aircraft_model: 'Boeing 747', aircraft_type: 'Commercial', manufacture_year: 2005});
    instance1.save().then(doc=>{console.log("instance1 saved");}).catch(err=>{console.error()});

    let instance2 = new
    Aircraft({aircraft_model: 'Airbus A320', aircraft_type: 'Commercial', manufacture_year: 2010});
    instance2.save().then(doc=>{console.log("instance2 saved");}).catch(err=>{console.error()});

    let instance3 = new
    Aircraft({aircraft_model: 'Cessna 172', aircraft_type: 'Private', manufacture_year: 1998});
    instance3.save().then(doc=>{console.log("instance3 saved");}).catch(err=>{console.error()});

     }
    
    let reseed = true;
    if (reseed) { recreateDB();}

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/aircraft', aircraftRoute);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);
app.use('/resource', resourceRouter);



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
