NodeJam.User = DS.Model.extend({
  name: DS.attr(),
  email: DS.attr()
});

NodeJam.Article = DS.Model.extend({
  comments: DS.attr(),
  ordered: DS.attr(),
  title: DS.attr(),
  body: DS.attr(),
  published: DS.attr(),
  tags: DS.attr(),
  created_at: DS.attr()
});
