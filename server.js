var express = require('express')
  , mongoose = require('mongoose')
  , fs = require('fs')
  , passport = require('passport')
  , host  = process.env.OPENSHIFT_NODEJS_IP || 'localhost'
  , config = require('./config/config');

mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', function (err) {
  console.log(err);
  throw new Error('unable to connect to database at ' + config.db);
});

var modelsPath = __dirname + '/app/models';
fs.readdirSync(modelsPath).forEach(function (file) {
  if (file.indexOf('.js') >= 0) {
    require(modelsPath + '/' + file);
  }
});

require('./config/auth')(passport, config)

var app = express();

require('./config/express')(app, config, passport)
require('./config/routes')(app, passport);

app.listen(config.port, host, function(){ console.log('Paaaarla!') });

exports = module.exports = app
