Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"large-9 columns\" role=\"content\">\n\n  <article>\n\n    <h3><a href=\"#\">Blog Post Title</a></h3>\n    <h6>Written by <a href=\"#\">John Smith</a> on August 12, 2012.</h6>\n\n    <div class=\"row\">\n      <div class=\"large-6 columns\">\n        <p>Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit, dolore aliqua non est magna in labore pig pork biltong. Eiusmod swine spare ribs reprehenderit culpa.</p>\n        <p>Boudin aliqua adipisicing rump corned beef. Nulla corned beef sunt ball tip, qui bresaola enim jowl. Capicola short ribs minim salami nulla nostrud pastrami.</p>\n      </div>\n      <div class=\"large-6 columns\">\n        <img src=\"http://placehold.it/400x240&text=[img]\" />\n      </div>\n    </div>\n\n    <p>Pork drumstick turkey fugiat. Tri-tip elit turducken pork chop in. Swine short ribs meatball irure bacon nulla pork belly cupidatat meatloaf cow. Nulla corned beef sunt ball tip, qui bresaola enim jowl. Capicola short ribs minim salami nulla nostrud pastrami. Nulla corned beef sunt ball tip, qui bresaola enim jowl. Capicola short ribs minim salami nulla nostrud pastrami.</p>\n\n    <p>Pork drumstick turkey fugiat. Tri-tip elit turducken pork chop in. Swine short ribs meatball irure bacon nulla pork belly cupidatat meatloaf cow. Nulla corned beef sunt ball tip, qui bresaola enim jowl. Capicola short ribs minim salami nulla nostrud pastrami.</p>\n\n  </article>\n\n  <hr />\n\n\n</div>");
  
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
  data.buffer.push("\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"large-12 columns\">\n          <button class=\"button small radius expand\">Entrar</button>\n        </div>\n      </div>\n\n    </fieldset>\n  </form>\n</div>\n");
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
  data.buffer.push("</h6>\n  </div>\n\n  <form id='signin' action='/users/edit' method='POST'>\n    <fieldset>\n      <legend>Alterar Senha</legend>\n\n      <div class=\"row\">\n        <div class=\"large-12 columns\">\n          ");
  hashContexts = {'type': depth0,'placeholder': depth0,'name': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'placeholder': "STRING",'name': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("password"),
    'placeholder': ("Nova Senha"),
    'name': ("password"),
    'value': ("password")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"large-12 columns\">\n          <button class=\"button small radius expand\">Salvar</button>\n        </div>\n      </div>\n\n    </fieldset>\n  </form>\n</div>\n");
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
  data.buffer.push("\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"large-12 columns\">\n          <button class=\"button small radius expand\">Sign Up</button>\n        </div>\n      </div>\n\n    </fieldset>\n  </form>\n</div>");
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
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "item", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</li>\n    ");
  return buffer;
  }

  data.buffer.push("<aside class=\"large-3 columns\">\n  <h5>Posts</h5>\n  <ul class=\"side-nav\">\n    <li><a href=\"#\">Teste</a></li>\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "item", "in", "model", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </ul>\n</aside>");
  return buffer;
  
});