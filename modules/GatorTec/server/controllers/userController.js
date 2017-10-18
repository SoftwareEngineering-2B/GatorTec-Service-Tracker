const mongoose = require('mongoose');
const user = require('../models/user.js');

// Add an user
exports.add = function(req, res){

  let user = req.body;

  user.create(user, function(err, user){
    if(err){
      res.status(403).send('Bad Request');
    }

    res.status(200).send(user);
  });

};

// Get all users
exports.getAllUsers = function(req, res){

  user.find({}, function(err, users){
    if(err){
      res.status(500).send('Internal Server Error');
    }

    res.status(200).send(users);
  });

};

// Edit an user by email
exports.edit = function(req, res){

  let userEmail = req.body.userEmail;

  user.findOneAndUpdate({ userEmail: userEmail }, { userType: "admin" }, { new: true }, function(err, user){
    if(err){
      res.status(403).send('Bad Request');
    }

    res.status(200).send(user);
  });

};

// Delete an user by email
exports.delete = function(req, res){

  let userEmail = req.body.userEmail;

  user.findOneAndRemove({ userEmail: userEmail }, function(err, user){
    if(err){
      res.status(500).send('Internal Server Error');
    }

    res.status(200).send(user);
  });

};
