Ember.Application.initializer({
  name: 'auth',

  initialize: function(container) {
    var user_id = $('meta[name="current-user"]').attr('content')
      , controller = container.lookup('controller:auth').set('content', user_id);
    return container.typeInjection('controller', 'auth', 'controller:auth');
  }
});

NodeJam = Ember.Application.create({ 
  LOG_TRANSITIONS: true,
  LOG_VIEW_LOOKUPS: true,
  LOG_ACTIVE_GENERATION: true
});

NodeJam.ApplicationSerializer = DS.RESTSerializer.extend({
  primaryKey: '_id',

  normalize: function(type, hash) {
    hash.id = hash._id;
    return this._super(type, hash); 
  }
});