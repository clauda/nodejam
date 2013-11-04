var mongoose = require('mongoose')
  , Article = mongoose.model('Article');

exports.index = function(request, response){
  response.setHeader("Content-Type", "application/json");
  var query = request.query;
  if (request.query.tags){ query = { published: true, tags: { $in: [request.query.tags] } } };

  Article
    .find(query)
    .sort('-created_at')
    .populate('user')
    .exec(function(err, data) {
      response.send({ articles: data });
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

exports.show = function (request, response) {
  response.setHeader("Content-Type", "application/json");
  Article
    .findById(request.params.article_id)
    .populate('user')
    .exec(function(err, data){
      response.send({ article: data });
    });
}