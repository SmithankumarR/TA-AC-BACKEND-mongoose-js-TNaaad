let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: String,
    age: Number,
    email: {type: String, lowercase: true},
    sports: [String]
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);