var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'nodejam'
    },
    port: 3000,
    db: 'mongodb://localhost/nodejam-dev'
  },

  test: {
    root: rootPath,
    app: {
      name: 'nodejam'
    },
    port: 3000,
    db: 'mongodb://localhost/nodejam-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'nodejam'
    },
    port: 3000,
    db: 'mongodb://localhost/nodejam'
  }
};

module.exports = config[env];
