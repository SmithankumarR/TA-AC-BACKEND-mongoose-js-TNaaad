// express
var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan');

// connect to mongoose
mongoose.connect("mongodb://127.0.0.1:27017/server",
    { useNewUrlparser: true, useUnifiedTopology: true },
    (err) => {
        console.log(err ? err : "connected to database")
    }
)

// instantitate 
var app = express();

// middleware
app.use(logger('dev'));

// routes
app.get('/', (req, res) => {
    res.send("mongoose created")
})

// error handlers
app.use((err, req, res, next) => {
    console.log(err)
    next();
})
// listen
app.listen(3000, () => {
    console.log("listening on port 3000")
})