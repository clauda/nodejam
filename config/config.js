var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'nodejam'
    },
    port: 4000,
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
    app: {
      name: 'nodejam'
    },
    db: 'mongodb://$OPENSHIFT_MONGODB_DB_HOST:$OPENSHIFT_MONGODB_DB_PORT/'
  }
};

module.exports = config[env];
