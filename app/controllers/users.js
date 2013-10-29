var mongoose = require('mongoose')
  , User = mongoose.model('User');

var login = function (request, response) {
  if (request.session.returnTo) {
    response.redirect(request.session.returnTo)
    delete request.session.returnTo
    return
  }
  response.redirect('/')
}

exports.signin = function (request, response) {}

exports.authCallback = login;

exports.login = function (request, response) {
  response.render('users/login', {
    title: 'Login',
    message: 'Error'
  })
}

exports.signup = function (request, response) {
  response.render('users/signup', {
    title: 'Sign up',
    user: new User()
  })
}

exports.logout = function (request, response) {
  request.logout()
  response.redirect('/login')
}

exports.session = login;

exports.create = function (request, response) {
  var user = new User(request.body)
  user.save(function (err) {
    if (err) {
      return response.render('users/signup', {
        errors: err.errors,
        user: user,
        title: 'Sign up'
      })
    }

    request.logIn(user, function(err) {
      if (err) return next(err)
      return response.redirect('/')
    })
  })
}

exports.show = function (request, response) {
  var user = request.profile
  response.render('users/show', {
    title: user.name,
    user: user
  })
}

exports.user = function (request, response, next, id) {
  User.findOne({ _id : id })
    .exec(function (err, user) {
      if (err) return next(err)
      if (!user) return next(new Error('Failed to load User ' + id))
      request.profile = user
      next()
    })
}