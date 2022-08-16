// express
var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');

// connect to database
mongoose.connect("mongodb://127.0.0.1:27017/server",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        console.log(err ? err : "Connected to database");
    })
// instantiate 
var app = express();

// middlware
app.use(logger('dev'));
app.use(cookieParser());
// routes

// error handlers
app.use((err,res,req,) => {
    console.log(err);
})

// listeners
app.listen(4000, () => {
    console.log("listening on  port 4000");
})