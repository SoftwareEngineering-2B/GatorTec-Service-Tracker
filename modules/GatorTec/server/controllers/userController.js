const mongoose = require('mongoose');
const user = require('../models/user.js');
const passport = require('passport');
const _ = require('lodash');
// Add a user
exports.add = function(req, res){
  
  if(_.isNil(req.body) || _.isEmpty(req.body) || !req.body.name || !req.body.username || !req.body.userPassword || !req.body.userRole){
    return res.status(400).send('Bad Request');
  }

  user.findOne({ "username": req.body.username }, function(err, User){

    if(err){
      return res.status(500).send('Internal Server Error');
    }

    if(User){
      return res.status(409).send('Conflict');
    }

    let newUser = new user();
    newUser.name = req.body.name;
    newUser.username = req.body.username;
    newUser.userRole = req.body.userRole;
    newUser.userPassword = passport.encryptPassword(req.body.userPassword);

    user.create(newUser, function(err, newUser){

      if(err){
        return res.status(400).send('Bad Request');
      }

      return res.status(200).send(newUser);
    });
   });
};

// Get all users
exports.getAllUsers = function(req, res){
  
  user.find({"userRole": { $ne: 'Customer' }}, function(err, users){

    if(err){
      return res.status(500).send('Internal Server Error');
    }

    return res.status(200).send(users);
  });

};


// Delete an user by username/email
exports.delete = function(req, res){
  
  if(_.isNil(req.body) || _.isEmpty(req.body)){
    return res.status(400).send('Bad Request');
  }

  let username = req.body.username;

  user.findOneAndRemove({ username: username }, function(err, user){

    if(err){
      return res.status(500).send('Internal Server Error');
    }
    else if (_.isNil(user) || _.isEmpty(user)) {
      return res.status(404).send("Resource Not Found")
    }

    return res.status(200).end();
  });

};

exports.login = function(req, res){
  let user = {
    id: req['user']._id,
    userId: req['user'].username,
    userRole: req['user'].userRole
  }
  return res.status(200).send(user);
};

exports.logout = function(req, res){
  req.logout();
  res.redirect('/login');
};

// Edit an user by username/email
// exports.edit = function(req, res){
//
//   let username = req.body.username;
//   let userRole = req.body.userRole;
//
//   user.findOneAndUpdate({ username: username }, { userRole: userRole }, { new: true }, function(err, user){
//     if(err){
//       res.status(403).send('Bad Request');
//     }
//
//     res.status(200).send(user);
//   });
//
// };
