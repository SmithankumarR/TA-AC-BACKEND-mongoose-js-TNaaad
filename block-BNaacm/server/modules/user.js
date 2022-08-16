var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name : String,
    email : { type: String, lowercase: true},
    age : {type:Number , default : 18}

})

module.exports = mongoose.model('User', userSchema);
