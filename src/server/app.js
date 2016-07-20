// *** main dependencies *** //
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
var passport = require('passport')
var cookieSession = require('cookie-session');
var knex = require('../../db/knex')


require('dotenv').load()

var indexRoutes = require('./routes/index.js');
var authRoutes = require('./routes/auth.js');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client')));
app.use(cookieSession({
  name: 'session',
  keys: [process.env.SESSION_KEY]
}));
app.use(passport.initialize());
app.use(passport.session());


passport.use(new LinkedInStrategy({
  clientID: process.env.LINKEDIN_CLIENT_ID,
  clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
  callbackURL: process.env.HOST + "/auth/linkedin/callback",
  scope: ['r_emailaddress', 'r_basicprofile'],
  state: true
}, function(accessToken, refreshToken, profile, done) {
  knex('users')
    .where({
      linkedin_id: profile.id
    })
    .orWhere({
      email: profile.emails[0].value
    })
    .first()
    .then(function(user) {
      if (!user) {
        return knex('users').insert({
          linkedin_id: profile.id,
          email: profile.emails[0].value,
          preferred_name: profile.name.givenName,
          last_name: profile.name.familyName,
          avatar_url: profile.photos[0].value
        }, '*').then(function(users) {
          return done(null, users[0]);
        });
      } else {
        return done(null, user);
      }
    });
}));


passport.serializeUser(function(user, done) {


  done(null, user.id);
});


passport.deserializeUser(function(id, done) {
  console.log('this is the user', id);
  if (id) {
    knex('users')
      .where({
        id: id
      })
      .first()
      .then(function(user) {
        (!user) ? done('ID  not found'): done(null, user);
      })
      .catch(function(err) {
        done(err, null);
      })
  } else {
    done('ID  not found');
  }
  //
});

app.use(function(req, res, next) {
  res.locals.user = req.user;
  console.log('the user is', req.user);
  next()
})

app.use('/auth', authRoutes);

app.use('/api', require('./api'))



app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    console.log(err.status)
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});


module.exports = app;
