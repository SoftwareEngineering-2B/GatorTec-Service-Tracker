const mongoose = require('mongoose');
const user = require('../models/user.js');
// const passport = require('passport');

// Add an user
// exports.add = function(req, res){

// };

// Get all users
exports.getAllUsers = function(req, res){

  user.find({}, function(err, users){

    if(err){
      res.status(500).send('Internal Server Error');
    }
    res.json(users);
    res.status(200).send(users);
  });

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

// Delete an user by username/email
exports.delete = function(req, res){

  let username = req.body.username;

  user.findOneAndRemove({ username: username }, function(err, user){

    if(err){
      res.status(500).send('Internal Server Error');
    }

    res.status(200).send(user);
  });

};

exports.login = function(req, res){

  console.log(req.body);

};

// function isLoggedIn(req, res, next){
//   if(req.isAuthenticated()){
//     return next();
//   }
//
//   res.redirect('/loginView');
// };
