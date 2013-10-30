var mongoose = require('mongoose')
  , Article = mongoose.model('Article');

exports.index = function(request, response){
  response.render('index', {
    title: 'Tagon8 Blog', user: request.user,
  });
};
