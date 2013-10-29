NodeJam = Ember.Application.create({ 
  LOG_TRANSITIONS: true,
  LOG_VIEW_LOOKUPS: true,
  LOG_ACTIVE_GENERATION: true
});

NodeJam.Router.map(function() {
  // put your routes here
  // this.resource('sidebar', { path: "/" });
});

NodeJam.IndexRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render('index', { outlet: 'sidebar' });
  },
  model: function() {
    return ['News', 'Code', 'Design', 'Fun'];
  }
});

// NodeJam.SidebarRoute = Ember.Route.extend({
//   model: function(){
//     return ['News', 'Code', 'Design', 'Fun'];
//   }
// });