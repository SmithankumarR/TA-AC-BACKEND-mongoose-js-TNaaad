var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title : String,
    description : { type: String, lowercase: true},
})

var Article = mongoose.model('Article', articleSchema);

module.exports(Article);