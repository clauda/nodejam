Ember.TEMPLATES["articles/_form"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"row\">\n  <div class=\"large-12 columns\">\n    <label>Título</label>\n    ");
  hashContexts = {'type': depth0,'value': depth0,'placeholder': depth0};
  hashTypes = {'type': "STRING",'value': "ID",'placeholder': "STRING"};
  options = {hash:{
    'type': ("text"),
    'value': ("title"),
    'placeholder': ("Untitled")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n  </div>\n\n  <div class=\"large-12 columns\">\n    <label>Texto</label>\n    ");
  hashContexts = {'value': depth0,'cols': depth0,'rows': depth0};
  hashTypes = {'value': "ID",'cols': "STRING",'rows': "STRING"};
  options = {hash:{
    'value': ("body"),
    'cols': ("80"),
    'rows': ("10")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.textarea || depth0.textarea),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n  </div>\n\n  <div class=\"large-12 columns\">\n    <label>Publicada?</label>\n    ");
  hashContexts = {'type': depth0,'name': depth0,'checked': depth0};
  hashTypes = {'type': "STRING",'name': "STRING",'checked': "ID"};
  options = {hash:{
    'type': ("checkbox"),
    'name': ("published"),
    'checked': ("published")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n  </div>\n\n  <div class=\"large-12 columns\">\n    <label>Tags (separadas por vírgula)</label>\n    ");
  hashContexts = {'type': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'value': ("tags")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n  </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["articles/new"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<div class=\"small-12 large-centered columns\">\n  <form ");
  hashContexts = {'on': depth0};
  hashTypes = {'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "create", {hash:{
    'on': ("submit")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n\n    <fieldset>\n      <legend>Novo Post</legend>\n\n      ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "articles/form", options) : helperMissing.call(depth0, "partial", "articles/form", options))));
  data.buffer.push("\n\n      <div class=\"row\">\n        <div class=\"large-12 columns\">\n          ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.panic || depth0.panic),stack1 ? stack1.call(depth0, "Salvar", options) : helperMissing.call(depth0, "panic", "Salvar", options))));
  data.buffer.push("\n        </div>\n      </div>\n\n    </fieldset>\n  </form>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n  \n    <article>\n      <h3><a href=\"#\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "article.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a></h3>\n      <h6>Written by ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "article.user.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" on ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.formatted || depth0.formatted),stack1 ? stack1.call(depth0, "article.created_at", options) : helperMissing.call(depth0, "formatted", "article.created_at", options))));
  data.buffer.push("</h6>\n      ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "article.body", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </article>\n    <hr />\n\n  ");
  return buffer;
  }

  data.buffer.push("<div class=\"large-9 columns\" role=\"content\">\n  \n  ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "article", "in", "model", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["login"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"small-6 large-centered columns\" role=\"content\">\n  <form id='signin' action='/users/session' method='POST'>\n    <fieldset>\n      <legend>Login</legend>\n\n      <div class=\"row\">\n        <div class=\"large-12 columns\">\n          ");
  hashContexts = {'type': depth0,'name': depth0,'placeholder': depth0,'required': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'name': "STRING",'placeholder': "STRING",'required': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("email"),
    'name': ("email"),
    'placeholder': ("Email"),
    'required': ("required"),
    'value': ("email")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        </div>\n        <div class=\"large-12 columns\">\n          ");
  hashContexts = {'type': depth0,'placeholder': depth0,'name': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'placeholder': "STRING",'name': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("password"),
    'placeholder': ("Senha"),
    'name': ("password"),
    'value': ("password")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"large-12 columns\">\n          ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.panic || depth0.panic),stack1 ? stack1.call(depth0, "Entrar", options) : helperMissing.call(depth0, "panic", "Entrar", options))));
  data.buffer.push("\n        </div>\n      </div>\n\n    </fieldset>\n  </form>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["profile"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<div class=\"small-6 large-centered columns\" role=\"content\">\n\n  <div class='panel'>\n    <h5>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h5>\n    <h6>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.email", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h6>\n  </div>\n\n  <form id='change_password' action='/users/edit' method='POST'>\n    <fieldset>\n      <legend>Alterar Senha</legend>\n\n      <div class=\"row\">\n        <div class=\"large-12 columns\">\n          ");
  hashContexts = {'type': depth0,'placeholder': depth0,'name': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'placeholder': "STRING",'name': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("password"),
    'placeholder': ("Nova Senha"),
    'name': ("password"),
    'value': ("password")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"large-12 columns\">\n          ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.panic || depth0.panic),stack1 ? stack1.call(depth0, "Salvar", options) : helperMissing.call(depth0, "panic", "Salvar", options))));
  data.buffer.push("\n        </div>\n      </div>\n\n    </fieldset>\n  </form>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["register"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"small-6 large-centered columns\" role=\"content\">\n  <form id='signup' action='/users' method='POST'>\n    <fieldset>\n      <legend>Cadastro</legend>\n\n      <div class=\"row\">\n        <div class=\"large-12 columns\">\n          ");
  hashContexts = {'type': depth0,'name': depth0,'placeholder': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'name': "STRING",'placeholder': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'name': ("name"),
    'placeholder': ("Nome"),
    'value': ("name")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        </div>\n        <div class=\"large-12 columns\">\n          ");
  hashContexts = {'type': depth0,'placeholder': depth0,'name': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'placeholder': "STRING",'name': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("email"),
    'placeholder': ("Email"),
    'name': ("email"),
    'value': ("email")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        </div>\n        <div class=\"large-12 columns\">\n          ");
  hashContexts = {'type': depth0,'placeholder': depth0,'name': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'placeholder': "STRING",'name': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("password"),
    'placeholder': ("Senha"),
    'name': ("password"),
    'value': ("password")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"large-12 columns\">\n          ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.panic || depth0.panic),stack1 ? stack1.call(depth0, "Entrar", options) : helperMissing.call(depth0, "panic", "Entrar", options))));
  data.buffer.push("\n        </div>\n      </div>\n\n    </fieldset>\n  </form>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["sidebar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n    <li>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "article.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</li>\n    ");
  return buffer;
  }

  data.buffer.push("<aside class=\"large-3 columns\">\n  <h5>Posts</h5>\n  <ul class=\"side-nav\">\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "article", "in", "model", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </ul>\n</aside>");
  return buffer;
  
});