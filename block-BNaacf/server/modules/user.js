var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name : String,
    email : {type : String, lowercase : true},
    langauge : [String],
    marks : [Number],
    village : String,
    city : String,
    state : String,
    pin : Number,
    user : Schema.Types.ObjectId
})

