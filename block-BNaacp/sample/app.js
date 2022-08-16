// express
var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');
var User = require('./modules/user.js');

// connect to database
mongoose.connect("mongodb://127.0.0.1:27017/sample", (err) => {
    console.log(err ? err : "Connected to databse")
})
// instantiate
var app = express();

// middleware
app.use(logger('dev'));
app.use(express.json());

// routes
app.get('/', (req, res) => {
    res.send("Hey")
})
// creation 
app.post('/users', (req, res) => {
    User.create('/users', (err) => {
        console.log(err);
        res.json(req.body);
    });
});
app.get('/users', (req, res) => {
    var user = req.body
    User.find((err) => {
        console.log(err);
        res.json(user);
    });
})
app.get('/users/:id', (req, res) => {
    var user = req.body;
    var id = req.params.id;
    User.find({id: id}, (err) => {
        console.log(err);
        res.json(user);
    });
})
// we use find one to get the specified user
app.get('/users/:id', (req, res) => {
    var user = req.body;
    var id = req.params.id;
    User.findOne({id: id}, (err) => {
        console.log(err);
        res.json(user);
    });
})
// we use findById to get the specified user using Id
app.get('/users/:id', (req, res) => {
    var user = req.body;
    var id = req.params.id;
    User.findById({id: id}, (err) => {
        console.log(err);
        res.json(user);
    });
})
// error handler
app.use((err, req, res,) => {
    console.log(err);
})
// listen
app.listen(3000, () => {
    console.log("listening on port 3000...");
})