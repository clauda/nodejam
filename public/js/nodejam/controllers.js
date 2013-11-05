NodeJam.AuthController = Ember.ObjectController.extend({
  currentUserId: (function(){ return this.get('content') }).property('@content'),
  isLoggedIn: (function() {
    return this.get('content') !== undefined
  }).property('@content')
})

NodeJam.ArticlesNewController = Ember.ArrayController.extend({

  actions: {
    create: function() {
      var router = this.get('target')
        , data = this.getProperties('title', 'body', 'tags', 'published')
        , post = this.get('model');

      $.post('/articles', { article: data }, function(results) {
        router.transitionTo('article', results._id);
      }).fail(function(jqxhr, textStatus, error ) {
        var errs = JSON.parse(jqxhr.responseText);
        post.set('errors', errs.errors);
      });
    }
  }

});

NodeJam.ArticlesEditController = Ember.ObjectController.extend({

  actions: {
    update: function(){
      var router = this.get('target')
        , attributes = this.getProperties('title', 'body', 'tags', 'published', 'id')
        , post = this.get('model')
        , store = this.store;

      if (typeof attributes.tags !== 'string'){ attributes.tags.join(',') }

      $.ajax({
        type: 'PUT', 
        url: '/articles',
        data: { article: attributes } 
      }).done(function(results) {
        console.log(results.tags);
        store.update('article', { id: results._id, tags: results.tags });
        console.log(store.find('article', results._id))
        router.transitionTo('article', results._id) 
      }).fail(function(jqxhr, textStatus, error) {
        console.log(jqxhr);
        console.log('error: '+ error);
      });
    }
  },

});