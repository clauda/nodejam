Ember.Handlebars.helper('panic', function(text) {
  return new Handlebars.SafeString('<button class="pure-button pure-button-primary">' + text + '</button>');
});

Ember.Handlebars.helper('formatted', function(date) {
  return moment(Date.parse(date)).fromNow();
});

Ember.Handlebars.helper('truncate', function(text) {
  return new Handlebars.SafeString(text.substring(0, 250) + '...');
});

Ember.Handlebars.helper('taggable', function(text) {
  var tags = [];
  if(typeof text === 'string'){ tags = text.split(',') }
});