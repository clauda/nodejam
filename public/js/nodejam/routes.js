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
    return this.store.find('article', { published: true });
  },

  renderTemplate: function() {
    this.render('index');
    // this.render('sidebar', { outlet: 'sidebar' });
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

NodeJam.ArticleRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('article', params.articleId); 
  },
  renderTemplate: function() {
    this.render('articles.article');
  }
});

NodeJam.ArticlesRoute = Ember.Route.extend();
NodeJam.ArticlesNewRoute = Ember.Route.extend();


