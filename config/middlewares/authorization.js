var mongoose = require('mongoose')
  , Article = mongoose.model('Article');

exports.requiresLogin = function (request, response, next) {
  if (!request.isAuthenticated()) {
    request.session.returnTo = request.originalUrl
    return response.redirect('#/login')
  }
  next()
}

exports.article = {
  hasAuthorization : function (request, response, next) {
    var id = request.params.id || request.body.article.id;
    Article.findById(id).populate('user').exec(function(err, post){
      if (post.user._id != request.user.id) {
        return response.redirect('#/login')
      }
      next()
    });
  }
}