var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name : String,
    email :{type : String, required : true},
    password :{type : String, required : true, minLength :5, maxLength : 15},
    createdAt :{type : Date, required : true , default: new Date()},
})