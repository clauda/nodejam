NodeJam = Ember.Application.create({ 
  LOG_TRANSITIONS: true,
  LOG_VIEW_LOOKUPS: true,
  LOG_ACTIVE_GENERATION: true
});

NodeJam.Router.map(function() {
  this.route('login');
  this.route('register');
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
