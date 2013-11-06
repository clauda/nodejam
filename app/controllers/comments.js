var mongoose = require('mongoose')
  , Article = mongoose.model('Article');

exports.create = function (request, response) {
  if (!request.body.comment.blah) return response.redirect('#/articles/'+ request.params.id)

  Article
    .findById(request.params.id)
    .exec(function(err, article){
      article.addComment(request.body.comment, function(err) {
        if (err) { console.log(err) }
        response.send(article)
      })
    });
}