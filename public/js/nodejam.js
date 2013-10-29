NodeJam = Ember.Application.create({ 
  LOG_TRANSITIONS: true,
  LOG_VIEW_LOOKUPS: true,
  LOG_ACTIVE_GENERATION: true
});

NodeJam.Router.map(function() {
  this.route('login');
  this.route('register');
  this.resource('profile');
});

NodeJam.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['News', 'Code', 'Design', 'Fun'];
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
