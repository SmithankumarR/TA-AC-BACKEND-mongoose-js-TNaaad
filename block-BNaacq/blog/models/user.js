var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, lowercase: true, required: true },
  },
  { timestamps: true }
);

var User = mongoose.model('User', userSchema);
module.exports = User;
