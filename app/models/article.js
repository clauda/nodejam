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
  comments: [{
    blah: { type: String, default : '' },
    author: { type: String },
    created_at: { type : Date, default : Date.now }
  }],
  tags: { type: [], get: getTags, set: treatTags, index: true }
});

// workaround
ArticleSchema
  .virtual('ordered')
  .get(function() {
    return this.comments.sortBy('created_at', true);
  })

ArticleSchema.set('toObject', { virtuals: true });

ArticleSchema.path('title').validate(function (title) {
  return title.length > 0
}, 'Article title cannot be blank')

ArticleSchema.path('body').validate(function (body) {
  return body.length > 0
}, 'Article body cannot be blank')

ArticleSchema.methods = {
  addComment: function(comment, callback) {
    this.comments.push({ author: comment.author, blah: comment.blah });
    this.save(callback);
  }
}

mongoose.model('Article', ArticleSchema);
