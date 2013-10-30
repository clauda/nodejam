var mongoose = require('mongoose')
  , Article = mongoose.model('Article');

exports.index = function(request, response){
  response.setHeader("Content-Type", "application/json");

  Article
    .find()
    .sort('-created_at')
    .exec(function(err, data) {
      response.send({articles: data});
    });
}

exports.create = function (request, response) {
  var post = new Article(request.body.article)
  post.user = request.user;
  post.save(function (err) {
    if (err) {
      return response.render('index', {
        errors: err.errors
      })
    }
    response.redirect('/');
  })
}