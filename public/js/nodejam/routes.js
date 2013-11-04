NodeJam.Router.map(function() {
  this.route('login');
  this.route('register');
  this.resource('profile');
  this.resource('articles', function(){
    this.route('new');
    this.route('tagged', { path: '/tagged/:tag' });
    this.resource('article', { path: ':articleId' });
  });
});

NodeJam.IndexRoute = Ember.Route.extend({
  model: function() { return this.store.find('article', { published: true }) },
  renderTemplate: function() { this.render('index') }
});

NodeJam.ProfileRoute = Ember.Route.extend({
  model: function(){
    var that = this;
    return Ember.$.getJSON('/profile')
      .fail(function(){
        return that.transitionTo('login');
      });
  },
  renderTemplate: function() { this.render('profile') }
});

NodeJam.ArticleRoute = Ember.Route.extend({
  model: function(params) { return this.store.find('article', params.articleId) },
  renderTemplate: function() { this.render('articles.article') }
});

NodeJam.ArticlesTaggedRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('article', { published: true, tags: params.tag });
  }
});

NodeJam.ArticlesRoute = Ember.Route.extend();
NodeJam.ArticlesNewRoute = Ember.Route.extend();


