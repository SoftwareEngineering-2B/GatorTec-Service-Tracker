const user = require('../models/user.js');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt-nodejs');

let passportLocal = function(passport){

  passport.serializeUser(function(user, done){
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done){
    user.findById(id, function(err, user){
      done(err, user);
    });
  });

  // Registration endpoint for adding employees
  passport.use('local.register', new LocalStrategy({
    usernameField: "username",
    passwordField: "userPassword",
    passReqToCallback: true
  }, function(req, username, userPassword, done){

    user.findOne({ "username": username }, function(err, User){
      if(err){
        return done(err);
      }
      if(User){
        return done(null, false);
      }

      let newUser = new user();
      newUser.username = req.body.username;
      newUser.userRole = req.body.userRole;
      newUser.userPassword = encryptPassword(req.body.userPassword);

      user.create(newUser, function(err, newUser){
        if(err){
          return done(err);
        }

        return done(null, newUser);
      });

    });
  }));

  // Login endpoint for users
  passport.use('local.login', new LocalStrategy({
    usernameField: "username",
    passwordField: "userPassword",
    passReqToCallback: true
  }, function(req, username, userPassword, done){
    // console.log(req.body);
    user.findOne({ "username": username }, function(err, user){
      if(err){
        return done(err);
      }
      if(!user){
        return done(null, false);
      }
      if(!validPassword(req.body.userPassword, user.userPassword)){
        return done(null, false);
      }

      return done(null, user);
    });
  }));

};

let encryptPassword = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

let validPassword = function(password, userPassword){
  return bcrypt.compareSync(password, userPassword);
};

module.exports = passportLocal;
