var mongoose = require('mongoose')
  , Article = mongoose.model('Article');

exports.index = function(request, response){
  Article.find(function(err, articles){
    if(err) throw new Error(err);
    response.render('index', {
      title: 'Tagon8 Blog',
      user: request.user,
      articles: articles
    });
  });
};
