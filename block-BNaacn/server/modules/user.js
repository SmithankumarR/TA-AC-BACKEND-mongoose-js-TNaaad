var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var userSchema = new Schema({
    name: String,
    email: { type: String, lowercase: true },
    age: { type: Number, default: 18 },
    password: { type: String, minlength:5, maxlength:20 },
    favourites:[String],
    createdAt: { type: Date, default: new Date()}
}, {timestamps : true});

var user = mongoose.Model('User', userSchema);
module.exports = user;

