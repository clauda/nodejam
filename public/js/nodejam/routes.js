NodeJam.Router.map(function() {
  this.route('login');
  this.route('register');
  this.resource('profile');
  this.resource('articles', function(){
    this.route('new');
    this.route('tagged', { path: '/tagged/:tag' });
    this.route('edit', { path: ':articleId/edit' });
    this.resource('article', { path: ':articleId' }, function(){
      this.resource('article', { path: 'comments' });
    });
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
  afterModel: function(article) {
    if (typeof article.get('tags') === 'string'){
      article.set('tags', article.get('tags').split(','));
      return article;
    };
    if(!article.get('ordered')){ article.set('ordered', article.get('comments')) };
  },
  renderTemplate: function() { this.render('articles.article') }
});

NodeJam.ArticlesTaggedRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('article', { published: true, tags: params.tag });
  },
  setupController: function(controller, model) { 
    controller.set('model', model);
    controller.set('tag', model.query.tags);
  }
});

NodeJam.ArticlesRoute = Ember.Route.extend();
NodeJam.ArticlesNewRoute = Ember.Route.extend({
  beforeModel: function(){
    if (!this.controllerFor('auth').get('isLoggedIn')) { 
      return this.transitionTo('login'); 
    }
  }
});

NodeJam.ArticlesEditRoute = Ember.Route.extend({
  beforeModel: function(){
    if ( !this.controllerFor('auth').get('isLoggedIn') ) { 
      return this.transitionTo('login'); 
    }
  },
  model: function(params) { return this.store.find('article', params.articleId) },
  setupController: function(controller, model) { controller.set('model', model) },
  afterModel: function(article) {
    if (this.controllerFor('auth').get('currentUserId') != article.get('user')._id){
      return this.transitionTo('login'); 
    }
  }
});


