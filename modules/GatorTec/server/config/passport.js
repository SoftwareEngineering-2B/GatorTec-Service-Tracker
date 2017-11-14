const user = require('../models/user.js');
const repairOrder = require('../models/repairOrder.js');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt-nodejs');
const validator = require('validator');
// const flash = require('connect-flash');

let passportLocal = function(passport){

  passport.serializeUser(function(user, done){
    let sessionUser = { _id: user._id, userRole: user.userRole, username: user.username };
    done(null, sessionUser);
  });

  passport.deserializeUser(function(sessionUser, done){
    // user.findById(id, function(err, user){
      done(null, sessionUser);
      // console.log('DESERIALIZING USER');
      // console.log(sessionUser);
    // });
  });

  // Registration endpoint for adding employees
  passport.use('local.register', new LocalStrategy({
    usernameField: "username",  // This field is an email address
    passwordField: "userPassword", // This field is a phone number
    passReqToCallback: true
  }, function(req, username, userPassword, done){

    user.findOne({ "username": username }, function(err, User){
      if(err){ return done(err); }
      if(User){ return done(null, false); }

      let newUser = new user();
      newUser.username = req.body.username;
      newUser.userRole = req.body.userRole;
      newUser.userPassword = passport.encryptPassword(req.body.userPassword);

      user.create(newUser, function(err, newUser){
        if(err){ return done(err); }
        return done(null, newUser);
      });
     });
    }));

  // Login endpoint for users
  passport.use('local.login', new LocalStrategy({
    usernameField: "username", // This field is an sroId  or an email
    passwordField: "userPassword", // This is a phone number
    passReqToCallback: true
  }, function(req, username, userPassword, done){

      if(validator.isEmail(username)){ // A technician or an admin is logging in
        user.findOne({ "username": username, "userRole": { $ne: 'customer' } }, function(err, user){
          if(err){ return done(err); }
          if(!user){ return done(null, false); }
          if(!passport.validPassword(req.body.userPassword, user.userPassword)){ return done(null, false); }
          return done(null, user);
        });
      }

      else{ // A customer is logging in
        // Finds repairOrder that customer put in
        repairOrder.findOne({ "sroID": username }, function(err, repairOrder){
          if(err){ return done(err); }
          if(!repairOrder){ return done(null, false); }

          // Finds user that the repairOrder belongs to
          user.findOne({ "username": repairOrder.customerEmail, "userRole": 'customer' }, function(err, user){
            if(err){ return done(err); }
            if(!user){ return done(null, false); }
            if(!passport.validPassword(req.body.userPassword, user.userPassword)){ return done(null, false); }
            return done(null, user);
          });
        });
      }

    }));
};

passport.encryptPassword = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

passport.validPassword = function(password, userPassword){
  return bcrypt.compareSync(password, userPassword);
};

module.exports = passportLocal;
