var mongoose = require('mongoose')
  , sugar = require('sugar')
  , Schema = mongoose.Schema;

var getTags = function (tags) { return tags.join(',') }
var treatTags = function (tags) { 
  var arr = [];
  if(typeof tags !== 'string'){ tags = tags.join(',') }
  tags.split(',').each(function(tag){ arr.push(tag.trim()); })
  return arr;
}

var ArticleSchema = new Schema({
  title: { type : String, default : '', trim : true },
  body: { type : String, default : '', trim : true },
  created_at: { type: Date, default: Date.now },
  published: { type: Boolean, default: false },
  user: { type: Schema.ObjectId, ref: 'User' },
  comments: [{ body: String, author: String, date: Date }],
  tags: { type: [], get: getTags, set: treatTags, index: true }
});

ArticleSchema.path('title').validate(function (title) {
  return title.length > 0
}, 'Article title cannot be blank')

ArticleSchema.path('body').validate(function (body) {
  return body.length > 0
}, 'Article body cannot be blank')

mongoose.model('Article', ArticleSchema);
