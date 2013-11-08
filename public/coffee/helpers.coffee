Ember.Handlebars.helper 'panic', (text)->
  new Handlebars.SafeString('<button class="pure-button pure-button-small pure-button-primary">' + text + '</button>');

Ember.Handlebars.helper 'formatted', (date)->
  moment(Date.parse(date)).fromNow()

Ember.Handlebars.helper 'truncate', (text)->
  new Handlebars.SafeString(text.substring(0, 250) + '...')

Ember.Handlebars.helper 'guy', (name)->
  if !name then 'Anonimous' else name
