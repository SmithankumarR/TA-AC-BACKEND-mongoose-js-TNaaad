// express
var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan')

// connect to database
mongoose.connect("mongodb://127.0.0.1:27017/server",(err) => {
    console.log(err ? err : "Connected to db");
})

// instantiate 
var app = express();

// middleware
app.use(logger('dev'));

// routes
app.get('/',(req,res) => {
    res.send("welcome");
})

// error handlers
app.use((err,req,res,next) => {
    console.log(err);
    next();
})
// listen
app.listen(3000,() => {
    console.log("listening on port 3000...");
})