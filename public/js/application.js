(function() {
  var NodeJam;

  Ember.Application.initializer({
    name: 'auth',
    initialize: function(container) {
      var controller, user_id;
      user_id = $('meta[name="current-user"]').attr('content');
      controller = container.lookup('controller:auth').set('content', user_id);
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

}).call(this);

(function() {
  Ember.Handlebars.helper('panic', function(text) {
    return new Handlebars.SafeString('<button class="pure-button pure-button-small pure-button-primary">' + text + '</button>');
  });

  Ember.Handlebars.helper('formatted', function(date) {
    return moment(Date.parse(date)).fromNow();
  });

  Ember.Handlebars.helper('truncate', function(text) {
    return new Handlebars.SafeString(text.substring(0, 250) + '...');
  });

  Ember.Handlebars.helper('guy', function(name) {
    if (!name) {
      return 'Anonimous';
    } else {
      return name;
    }
  });

}).call(this);

(function() {


}).call(this);

(function() {


}).call(this);

(function() {


}).call(this);

(function() {


}).call(this);
