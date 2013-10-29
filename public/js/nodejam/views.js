
NodeJam.LoginFormView = Ember.View.extend({
  login: null,
  password: null,
 
  signin: function() {
    var email = this.get('email')
      , password = this.get('password');
    console.log('Login: ' + email + ' Password: ' + password);
  }
});