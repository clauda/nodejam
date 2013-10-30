var home = require('../app/controllers/home')
  , users = require('../app/controllers/users')
  , auth = require('./middlewares/authorization');

module.exports = function(app, passport){
	app.get('/', home.index);
  app.get('/logout', users.logout);
  app.post('/users', users.create);
  app.post('/users/session',
    passport.authenticate('local', {
      failureRedirect: '/',
    }), users.session)
  app.get('/profile', auth.requiresLogin, users.profile);
  app.post('/users/edit', auth.requiresLogin, users.update);
};
