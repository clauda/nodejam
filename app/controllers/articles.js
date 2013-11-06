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
  response.setHeader("Content-Type", "application/json");
  var post = new Article(request.body.article);
  var user = request.user;
  post.user = user._id;
  post.save(function (err) {
    user.articles.push(post);
    user.save();

    if (err) {
      return response.render('index', {
        errors: err.errors
      })
    }
    response.send(post);
  })
}

exports.update = function (request, response) {
  response.setHeader("Content-Type", "application/json")

  Article
    .findByIdAndUpdate(request.body.article.id, request.body.article)
    .exec(function(err, article){
      if (err) { console.log('errors: '+ err.errors) }
        else {
          article.tags = request.body.article.tags;
          article.save()
          response.send(article);
        }
    })
}

exports.show = function (request, response) {
  response.setHeader("Content-Type", "application/json");
  Article
    .findById(request.params.id)
    .populate('user')
    .exec(function(err, data){
      response.send({ article:  data.toJSON({ virtuals: true }) });
    });
}

exports.destroy = function(request, response){
  Article
    .findById(request.params.id)
    .exec(function(err, article){
      article.remove();
      response.send();
    });
}