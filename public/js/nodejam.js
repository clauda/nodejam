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