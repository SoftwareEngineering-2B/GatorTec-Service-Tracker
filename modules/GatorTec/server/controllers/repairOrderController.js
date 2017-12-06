const mongoose = require('mongoose');
const repairOrder = require('../models/repairOrder.js');
const user = require('../models/user.js');
const passport = require('passport');
const _ = require('lodash');

// Add repairOrders
exports.add = function(req, res, next){

  if(_.isNil(req.body) || _.isEmpty(req.body)){
    return res.status(400).send('Bad Request');
  }

  user.remove({ "userRole": "Customer" }, function(err){ // Removes all Customers
    if(err){
      return res.status(500).send('Internal Server Error');
    }

    repairOrder.remove({}, function(err){ // Removes all repairOrders
      if(err){
        return res.status(500).send('Internal Server Error');
      }

      let newRepairOrders = req.body;
      for(let i = 0; i<newRepairOrders.length; i++){ // Loops through the array of new repairOrders
        repairOrder.create(newRepairOrders[i], function(err, sro){ // Creates the new repairOrder

          if(err){
            return res.status(400).send('Bad Request');
          }

          user.findOne({ "username": newRepairOrders[i].customerEmail, "userRole": 'Customer' }, function(err, existingCustomer){ // Determines if customer exists
            if(!existingCustomer){ // If the customer exists, create them
              let newUser = new user();
              newUser.name = newRepairOrders[i].customerName;
              newUser.username = newRepairOrders[i].customerEmail;
              newUser.userRole = 'Customer';
              newUser.userPassword = passport.encryptPassword(newRepairOrders[i].customerPhoneNumber);

              user.create(newUser, function(err, newUser){
                // console.log(newUser);
                if(err){
                  return res.status(400).send('Bad Request');
                }

                return res.status(200).end();
              });
            }
            else{ // If the customer does exist, do not create them
              return res.status(200).end();
            }
          });

        });

      }

    });

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
