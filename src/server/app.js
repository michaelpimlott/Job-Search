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
// var db  = require('db/db');
var knex = require('../../db/knex')


require('dotenv').load()

var indexRoutes = require('./routes/index.js');
var authRoutes = require('./routes/auth.js');

// *** express instance *** //
var app = express();


// *** config middleware *** //
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client')));
app.use(cookieSession({
  name: 'session',
  keys: [process.env.SESSION_KEY]
}));
app.use(passport.initialize());
app.use(passport.session());





// http://localhost:3000/auth/linkedIn/callback

passport.use(new LinkedInStrategy({
  clientID: process.env.LINKEDIN_CLIENT_ID,
  clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
  callbackURL:  process.env.HOST + "/auth/linkedin/callback",
  scope: ['r_emailaddress', 'r_basicprofile'],
   state: true
}, function(accessToken, refreshToken, profile, done) {
  knex('users')
      .where({ linkedin_id: profile.id })
      .orWhere({ email: profile.emails[0].value })
      .first()
      .then(function (user) {
        if ( !user ) {
          return knex('users').insert({
            linkedin_id: profile.id,
            email: profile.emails[0].value,
            preferred_name: profile.name.givenName,
            last_name: profile.name.familyName,
            avatar_url: profile.photos[0].value
          }, 'id').then(function (id) {
            return done(null, id[0]);
          });
        } else {
          return done(null, user.id);
        }
      });
    }));


    passport.serializeUser(function(user, done) {
  // later this will be where you selectively send to the browser
  // an identifier for your user, like their primary key from the
  // database, or their ID from linkedin

  done(null, user);
});

  //     });
  // }));

  // done(null, {id: profile.id, displayName: profile.displayName})
  // process.nextTick(function () {
    // To keep the example simple, the user's LinkedIn profile is returned to
    // represent the logged-in user. In a typical application, you would want
    // to associate the LinkedIn account with a user record in your database,
    // and return that user instead.
      // return done(null, profile);

app.get('/auth/linkedin',
  passport.authenticate('linkedin',
  function(req, res){

  }));
  app.get('/auth/linkedin/callback', passport.authenticate('linkedin', {
  successRedirect: '/',
  failureRedirect: '/login'
}));


passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user)
});

app.use(function (req, res, next) {
  res.locals.user = req.user
  next()
})

app.use('/api', require('./api'))





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});




// development error handler
// will print stacktrace
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

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});


module.exports = app;
