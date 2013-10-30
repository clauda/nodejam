NodeJam.Router.map(function() {
  this.route('login');
  this.route('register');
  this.resource('profile');
  this.resource('articles', function(){
    this.route('new');
    this.resource('article', { path: ':articleId' });
  });
});

NodeJam.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('article'); 
  },

  renderTemplate: function() {
    this.render('index');
    this.render('sidebar', { outlet: 'sidebar' });
  }
});

NodeJam.ProfileRoute = Ember.Route.extend({
  model: function(){
    return Ember.$.getJSON('/profile')
      .fail(function(){
        return this.transitionTo('login');
      });
  },

  renderTemplate: function() {
    this.render('profile');
  }
});

NodeJam.ArticleRoute = Ember.Route.extend();
NodeJam.ArticlesRoute = Ember.Route.extend();
NodeJam.ArticlesNewRoute = Ember.Route.extend();


