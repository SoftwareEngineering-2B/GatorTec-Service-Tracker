const mongoose = require('mongoose');
const repairOrder = require('../models/repairOrder.js');
const user = require('../models/user.js');
const passport = require('passport');
const _ = require('lodash');

// Add a repairOrder
exports.add = function(req, res, next){

  if(_.isNil(req.body) || _.isEmpty(req.body)){
    return res.status(400).send('Bad Request');
  }

  repairOrder.findOne({ "sroID": req.body.sroID }, function(err, existingRepairOrder){
    if(!existingRepairOrder){
      let sro = req.body;

      repairOrder.create(sro, function(err, sro){

        if(err){
          return res.status(400).send('Bad Request');
        }

        next();
      });
    }
    else{
      next();
    }
  });

};

exports.createUserFromSRO = function(req, res){

  user.findOne({ "username": req.body.customerEmail, "userRole": 'Customer' }, function(err, existingUser){
    if(!existingUser){
      let newUser = new user();
      newUser.name = req.body.customerName;
      newUser.username = req.body.customerEmail;
      newUser.userRole = 'Customer';
      newUser.userPassword = passport.encryptPassword(req.body.customerPhoneNumber);

      user.create(newUser, function(err, newUser){

        if(err){
          return res.status(400).send('Bad Request');
        }

        return res.status(200).end();
      });
    }
    else{
      return res.status(200).end();
    }
  });

};

// Get all repairOrders
exports.getAllRepairOrders = function(req, res){

  repairOrder.find({}, function(err, repairOrders){

    if(err){
      return res.status(500).send('Internal Server Error');
    }

    return res.status(200).send(repairOrders);
  });

};

// Get all repairOrders that are not blacklisted by username
exports.getAllRepairOrdersByEmail = function(req, res){

  let username = req['user'].username;

  repairOrder.find({ customerEmail: username, blacklist: false }, function(err, repairOrders){

    if(err){
      return res.status(500).send('Internal Server Error');
    }

    return res.status(200).send(repairOrders);
  });

};

// BlackList a repairOrder by sroID
exports.blacklist = function(req, res){

  if(_.isNil(req.body) || _.isEmpty(req.body)){
    return res.status(400).send('Bad Request');
  }

  let sroID = req.body.sroID;

  repairOrder.findOneAndUpdate({ sroID: sroID, blacklist: false }, { blacklist: true }, { new: true }, function(err, repairOrder){

    if(err){
      res.status(500).send('Internal Server Error');
    }
    else if(_.isNil(repairOrder) || _.isEmpty(repairOrder)){
      return res.status(404).send('Resource Not Found');
    }
    res.status(200).send(repairOrder.blacklist);
  });

};

// UnblackList a repairOrder by sroID
exports.unblacklist = function(req, res){

  if(_.isNil(req.body) || _.isEmpty(req.body)){
    return res.status(400).send('Bad Request');
  }

  let sroID = req.body.sroID;

  repairOrder.findOneAndUpdate({ sroID: sroID, blacklist: true}, { blacklist: false }, { new: true }, function(err, repairOrder){

    if(err){
      res.status(500).send('Internal Server Error');
    }
    else if(_.isNil(repairOrder) || _.isEmpty(repairOrder)){
      return res.status(404).send('Resource Not Found');
    }
    res.status(200).send(repairOrder.blacklist);
  });

};

// Edit a repairOrder by sro number
// exports.edit = function(req, res){
//
//   let sroID = req.body.sroID;
//
//   repairOrder.findOneAndUpdate({ sroID: sroID }, { deviceType: "iphone" }, { new: true }, function(err, repairOrder){
//     if(err){
//       res.status(403).send('Bad Request');
//     }
//
//     res.status(200).send(repairOrder);
//   });
//
// };

// Delete an repairOrder by sroID
exports.delete = function(req, res){

  if(_.isNil(req.body) || _.isEmpty(req.body)){
    return res.status(400).send('Bad Request');
  }

  let sroID = req.body.sroID;

  repairOrder.findOneAndRemove({ sroID: sroID }, function(err, repairOrder){

    if(err){
      res.status(500).send('Internal Server Error');
    }
    else if(_.isNil(repairOrder) || _.isEmpty(repairOrder)){
      return res.status(404).send('Resource Not Found');
    }

    res.status(200).end();
  });

};
