var mongoose = require('mongoose');
var Schema = mongoose.schema();

var userSchema = new Schema({
    name : String,
    age:  Number
});