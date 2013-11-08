Ember.Application.initializer
  name: 'auth'

  initialize: (container)->
    user_id = $('meta[name="current-user"]').attr 'content'
    controller = container.lookup('controller:auth').set 'content', user_id
    container.typeInjection('controller', 'auth', 'controller:auth')

NodeJam = Ember.Application.create
  LOG_TRANSITIONS: true
  LOG_VIEW_LOOKUPS: true
  LOG_ACTIVE_GENERATION: true

NodeJam.ApplicationSerializer = DS.RESTSerializer.extend
  primaryKey: '_id'

  normalize: (type, hash)->
    hash.id = hash._id
    @_super(type, hash)
