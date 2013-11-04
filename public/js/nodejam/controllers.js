NodeJam.AuthController = Ember.ObjectController.extend({
  isLoggedIn: (function() {
    return this.get('content') !== undefined
  }).property('@content')
})

NodeJam.ArticlesNewController = Ember.ArrayController.extend({

  actions: {
    create: function() {
      var router = this.get('target');
      var data = this.getProperties('title', 'body', 'tags', 'published')
      var post = this.get('model');

      $.post('/articles', { article: data }, function(results) {
        router.transitionTo('index');
      }).fail(function(jqxhr, textStatus, error ) {
        var errs = JSON.parse(jqxhr.responseText);
        post.set('errors', errs.errors);
      });
    }
  }

});