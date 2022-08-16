var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var articleSchema = new Schema(
  {
    title: { type: String, uppercase: true, required: true },
    description: { type: String, lowercase: true, required: true },
    tags: [String],
    likes: { type: 'Number', default: 0 },
    author: Schema.Types.ObjectId,
    comments: String,
  },
  { timestamps: true }
);

var Article = mongoose.model('Article', articleSchema);
module.exports = Article;
