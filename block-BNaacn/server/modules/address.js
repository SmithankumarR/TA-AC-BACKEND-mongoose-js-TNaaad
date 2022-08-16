var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var addressSchema = new Schema({
    village : String,
    city : { type: String, lowercase : true },
    state :  { type : String, uppercase : true },
    pin :Number,
    user : Schema.Types.ObjectId
},{timestamps: true});

var address = mongoose.Model('Address', addressSchema);
module.exports = address;
