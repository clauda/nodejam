var home = require('../app/controllers/home')
  , users = require('../app/controllers/users')
  , articles = require('../app/controllers/articles')
  , comments = require('../app/controllers/comments')
  , auth = require('./middlewares/authorization')
  , articleAuth = [auth.requiresLogin, auth.article.hasAuthorization];

module.exports = function(app, passport){
	app.get('/', home.index);
  app.get('/logout', users.logout);
  app.get('/users', users.index);
  app.post('/users', users.create);
  app.post('/users/session',
    passport.authenticate('local', {
      failureRedirect: '/',
    }), users.session)
  app.get('/profile', auth.requiresLogin, users.profile);
  app.post('/users/edit', auth.requiresLogin, users.update);
  app.get('/articles', articles.index);
  app.post('/articles', auth.requiresLogin, articles.create);
  app.put('/articles', articleAuth, articles.update);
  app.del('/articles/:id', articleAuth, articles.destroy);
  app.get('/articles/:id', articles.show);
  app.post('/articles/:id/comments', comments.create);
};
