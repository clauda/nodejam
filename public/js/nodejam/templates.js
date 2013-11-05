Ember.TEMPLATES["_posts"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n  <section class=\"post\">\n    <header class=\"post-header\">\n      <h2 class=\"post-title\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "article", "article.id", options) : helperMissing.call(depth0, "link-to", "article", "article.id", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</h2>\n\n      <p class=\"post-meta\">\n        By ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "article.user.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("  on ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.formatted || depth0.formatted),stack1 ? stack1.call(depth0, "article.created_at", options) : helperMissing.call(depth0, "formatted", "article.created_at", options))));
  data.buffer.push("\n\n        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "tag", "in", "article.tags", {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      </p>\n    </header>\n\n    <div class=\"post-description\">\n      <p>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.truncate || depth0.truncate),stack1 ? stack1.call(depth0, "article.body", options) : helperMissing.call(depth0, "truncate", "article.body", options))));
  data.buffer.push("</p>\n    </div>\n  </section>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "article.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n          ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("post-category post-category-design")
  },inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "articles.tagged", "tag", options) : helperMissing.call(depth0, "link-to", "articles.tagged", "tag", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program5(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "tag", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "article", "in", "model", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["articles/_form"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"pure-control-group\">\n  <label>Título</label>\n  ");
  hashContexts = {'type': depth0,'value': depth0,'placeholder': depth0,'class': depth0};
  hashTypes = {'type': "STRING",'value': "ID",'placeholder': "STRING",'class': "STRING"};
  options = {hash:{
    'type': ("text"),
    'value': ("title"),
    'placeholder': ("Untitled"),
    'class': ("pure-input-2-3")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n</div>\n\n<div class=\"pure-control-group\">\n  <label>Texto</label>\n  ");
  hashContexts = {'value': depth0,'cols': depth0,'rows': depth0,'class': depth0};
  hashTypes = {'value': "ID",'cols': "STRING",'rows': "STRING",'class': "STRING"};
  options = {hash:{
    'value': ("body"),
    'cols': ("80"),
    'rows': ("20"),
    'class': ("pure-input-2-3")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.textarea || depth0.textarea),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n</div>\n\n<div class=\"pure-control-group\">\n  <label class=\"pure-checkbox\">Publicada?\n    ");
  hashContexts = {'type': depth0,'name': depth0,'checked': depth0};
  hashTypes = {'type': "STRING",'name': "STRING",'checked': "ID"};
  options = {hash:{
    'type': ("checkbox"),
    'name': ("published"),
    'checked': ("published")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n  </label>\n</div>\n\n<div class=\"pure-control-group\">\n  <label>Tags (separadas por vírgula)</label>\n  ");
  hashContexts = {'type': depth0,'value': depth0,'class': depth0};
  hashTypes = {'type': "STRING",'value': "ID",'class': "STRING"};
  options = {hash:{
    'type': ("text"),
    'value': ("tags"),
    'class': ("pure-input-2-3")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["articles/article"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n          ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("post-category post-category-design")
  },inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "articles.tagged", "tag", options) : helperMissing.call(depth0, "link-to", "articles.tagged", "tag", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program4(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "tag", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

  data.buffer.push("<div class=\"pure-u-1\">\n  <div class=\"content\">\n    <section class=\"post\">\n      <header class=\"post-header\">\n        <h2 class='post-title'>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "article", "model.id", options) : helperMissing.call(depth0, "link-to", "article", "model.id", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</h2>\n\n        <p class='post-meta'>\n         By ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.user.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" on ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.formatted || depth0.formatted),stack1 ? stack1.call(depth0, "model.created_at", options) : helperMissing.call(depth0, "formatted", "model.created_at", options))));
  data.buffer.push("\n\n        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "tag", "in", "model.tags", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      </header>\n         \n      <div class=\"post-description\">\n        <p>");
  hashContexts = {'unescaped': depth0};
  hashTypes = {'unescaped': "STRING"};
  stack2 = helpers._triageMustache.call(depth0, "model.body", {hash:{
    'unescaped': ("true")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</p>\n      </div>\n    </section>\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["articles/edit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<div class=\"pure-u-1\">\n  <div class=\"content\">\n    <form class='pure-form pure-form-aligned' ");
  hashContexts = {'on': depth0};
  hashTypes = {'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "update", {hash:{
    'on': ("submit")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n      ");
  hashContexts = {'type': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("hidden"),
    'value': ("id")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n\n      <fieldset>\n        <legend>Edit Post</legend>\n\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "articles/form", options) : helperMissing.call(depth0, "partial", "articles/form", options))));
  data.buffer.push("\n\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.panic || depth0.panic),stack1 ? stack1.call(depth0, "Salvar", options) : helperMissing.call(depth0, "panic", "Salvar", options))));
  data.buffer.push("\n      </fieldset>\n    </form>\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["articles/new"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<div class=\"pure-u-1\">\n  <div class=\"content\">\n    <form class='pure-form pure-form-aligned' ");
  hashContexts = {'on': depth0};
  hashTypes = {'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "create", {hash:{
    'on': ("submit")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n\n      <fieldset>\n        <legend>New Post</legend>\n\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "articles/form", options) : helperMissing.call(depth0, "partial", "articles/form", options))));
  data.buffer.push("\n\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.panic || depth0.panic),stack1 ? stack1.call(depth0, "Salvar", options) : helperMissing.call(depth0, "panic", "Salvar", options))));
  data.buffer.push("\n      </fieldset>\n    </form>\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["articles/tagged"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<div class=\"pure-u-1\">\n  <div class=\"content\">\n    <div class=\"posts\">\n      <h1 class=\"content-subhead\">Posts tagged with ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "tag", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h1>\n      ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "posts", options) : helperMissing.call(depth0, "partial", "posts", options))));
  data.buffer.push("\n    </div>\n  </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"pure-u-1\">\n  <div class=\"content\">\n    <div class=\"posts\">\n      <h1 class=\"content-subhead\">Lastest Posts</h1>\n      ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "posts", options) : helperMissing.call(depth0, "partial", "posts", options))));
  data.buffer.push("\n    </div>\n  </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["login"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"pure-u-1\"> \n  <div class=\"content\"> \n    <form class=\"pure-form\" id='signin' action='/users/session' method='POST'>\n      <fieldset class='pure-group'>\n        <legend>Login</legend>\n\n        ");
  hashContexts = {'type': depth0,'name': depth0,'placeholder': depth0,'class': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'name': "STRING",'placeholder': "STRING",'class': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("email"),
    'name': ("email"),
    'placeholder': ("Email"),
    'class': ("pure-input-1-2"),
    'value': ("email")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        ");
  hashContexts = {'type': depth0,'placeholder': depth0,'class': depth0,'name': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'placeholder': "STRING",'class': "STRING",'name': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("password"),
    'placeholder': ("Senha"),
    'class': ("pure-input-1-2"),
    'name': ("password"),
    'value': ("password")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.panic || depth0.panic),stack1 ? stack1.call(depth0, "Entrar", options) : helperMissing.call(depth0, "panic", "Entrar", options))));
  data.buffer.push("\n      </fieldset>\n    </form>\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["profile"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n        <section class=\"post\">\n          <header class=\"post-header\">\n            <h2 class=\"post-title\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "article", "article._id", options) : helperMissing.call(depth0, "link-to", "article", "article._id", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</h2>\n\n            <p class=\"post-meta\">\n              By ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "article.user.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("  on ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.formatted || depth0.formatted),stack1 ? stack1.call(depth0, "article.created_at", options) : helperMissing.call(depth0, "formatted", "article.created_at", options))));
  data.buffer.push("\n\n              ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "tag", "in", "article.tags", {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n              ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.unless.call(depth0, "article.published", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n            </p>\n          </header>\n\n          <div class=\"post-description\">\n            <p>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.truncate || depth0.truncate),stack1 ? stack1.call(depth0, "article.body", options) : helperMissing.call(depth0, "truncate", "article.body", options))));
  data.buffer.push("</p>\n          </div>\n\n          <div class='actions'>\n            ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("pure-button pure-button-small pure-button-primary")
  },inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "articles.edit", "article._id", options) : helperMissing.call(depth0, "link-to", "articles.edit", "article._id", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n            <a class=\"pure-button pure-button-small pure-button-error\" href=\"#\">Remove</a>\n          </div>\n        </section>\n      ");
  return buffer;
  }
function program2(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "article.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n                ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("post-category post-category-design")
  },inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "articles.tagged", "tag", options) : helperMissing.call(depth0, "link-to", "articles.tagged", "tag", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n              ");
  return buffer;
  }
function program5(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "tag", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n                <span class='post-category fright'>Draft</span>\n              ");
  }

function program9(depth0,data) {
  
  
  data.buffer.push(" Edit ");
  }

  data.buffer.push("<div class=\"pure-u-1\">\n\n  <div class=\"u-header\">\n    <h1>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h1>\n    <h2>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.email", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h2>\n  </div>\n\n  <div class=\"content\">\n    <form class='pure-form pure-form-aligned' id='change_password' action='/users/edit' method='POST'>\n      <fieldset>\n        <legend>Alterar Senha</legend>\n        <div class=\"pure-control-group\">\n          <label>Nova Senha</label>\n          ");
  hashContexts = {'type': depth0,'placeholder': depth0,'name': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'placeholder': "STRING",'name': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("password"),
    'placeholder': ("Nova Senha"),
    'name': ("password"),
    'value': ("password")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n          ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.panic || depth0.panic),stack1 ? stack1.call(depth0, "Salvar", options) : helperMissing.call(depth0, "panic", "Salvar", options))));
  data.buffer.push("\n        </div>\n\n      </fieldset>\n    </form>\n  </div>\n</div>\n\n<div class=\"pure-u-1\">\n  <div class=\"content\">\n    <div class=\"posts\">\n      <h1 class=\"content-subhead\">Your Posts [");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.articles.length", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("]</h1>\n      \n      ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "article", "in", "model.articles", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n    </div>\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["register"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"pure-u-1\">\n  <div class=\"content\">\n    <form class='pure-form' id='signup' action='/users' method='POST'>\n      <fieldset class='pure-group'>\n        <legend>Cadastro</legend>\n\n        ");
  hashContexts = {'type': depth0,'name': depth0,'placeholder': depth0,'value': depth0,'class': depth0};
  hashTypes = {'type': "STRING",'name': "STRING",'placeholder': "STRING",'value': "ID",'class': "STRING"};
  options = {hash:{
    'type': ("text"),
    'name': ("name"),
    'placeholder': ("Nome"),
    'value': ("name"),
    'class': ("pure-input-1-2")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        ");
  hashContexts = {'type': depth0,'placeholder': depth0,'name': depth0,'value': depth0,'class': depth0};
  hashTypes = {'type': "STRING",'placeholder': "STRING",'name': "STRING",'value': "ID",'class': "STRING"};
  options = {hash:{
    'type': ("email"),
    'placeholder': ("Email"),
    'name': ("email"),
    'value': ("email"),
    'class': ("pure-input-1-2")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        ");
  hashContexts = {'type': depth0,'placeholder': depth0,'name': depth0,'value': depth0,'class': depth0};
  hashTypes = {'type': "STRING",'placeholder': "STRING",'name': "STRING",'value': "ID",'class': "STRING"};
  options = {hash:{
    'type': ("password"),
    'placeholder': ("Senha"),
    'name': ("password"),
    'value': ("password"),
    'class': ("pure-input-1-2")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.panic || depth0.panic),stack1 ? stack1.call(depth0, "Entrar", options) : helperMissing.call(depth0, "panic", "Entrar", options))));
  data.buffer.push("\n\n      </fieldset>\n    </form>\n  </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["sidebar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n      <li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "article", "article.id", options) : helperMissing.call(depth0, "link-to", "article", "article.id", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n      ");
  return buffer;
  }
function program2(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "article.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

  data.buffer.push("<div id='menu'>\n  <div class='pure-menu pure-menu-open'>\n    <ul>\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "article", "in", "model", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </ul>\n  </div>\n</div>");
  return buffer;
  
});