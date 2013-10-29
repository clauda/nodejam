
NodeJam.ApplicationController = Ember.Controller.extend({
  isLoggedIn: false,

  // when a user enters the app unauthenticated, the transition
  // to where they are going is saved off so it can be retried
  // when they have logged in.
  savedTransition: null,

  login: function() {
    this.setProperties({ savedTransition: null, isLoggedIn: true });
  },
  
  logout: function() {
    this.set('isLoggedIn', true);
  }
});

NodeJam.UserController = Ember.ObjectController.extend({
  signin: function() {
    var email = this.get('email')
      , password = this.get('password');
    console.log('Login: ' + email + ' Password: ' + password);
  }
});