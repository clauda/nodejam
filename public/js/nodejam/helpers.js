Ember.Handlebars.helper('panic', function(text) {
  return new Handlebars.SafeString('<button class="button small radius expand">' + text + '</button>');
});

Ember.Handlebars.helper('formatted', function(date) {
  return moment(Date.parse(date)).fromNow();
});