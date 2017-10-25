const mongoose = require('mongoose');
const repairOrder = require('../models/repairOrder.js');

// Add a repairOrder
exports.add = function(req, res){

  let sro = req.body;

  repairOrder.create(sro, function(err, sro){

    if(err){
      res.status(403).send('Bad Request');
    }

    res.status(200).send(sro);
  });

};

// Get all repairOrders
exports.getAllRepairOrders = function(req, res){

  repairOrder.find({}, function(err, repairOrders){

    if(err){
      res.status(500).send('Internal Server Error');
    }

    res.status(200).send(repairOrders);
  });

};

// Get all repairOrders that are not blacklisted by username
exports.getAllRepairOrdersByEmail = function(req, res){

  let username = req.body.username;

  repairOrder.find({ customerEmail: username, blacklist: false }, function(err, repairOrders){

    if(err){
      res.status(500).send('Internal Server Error');
    }

    res.status(200).send(repairOrders);
  });

};

// BlackList a repairOrder by sroID
exports.blacklist = function(req, res){

  let sroID = req.body.sroID;

  repairOrder.findOneAndUpdate({ sroID: sroID }, { blacklist: true }, { new: true }, function(err, repairOrder){

    if(err){
      res.status(500).send('Internal Server Error');
    }

    res.status(200).send(repairOrder);
  });

};

// UnblackList a repairOrder by sroID
exports.unblacklist = function(req, res){

  let sroID = req.body.sroID;

  repairOrder.findOneAndUpdate({ sroID: sroID }, { blacklist: false }, { new: true }, function(err, repairOrder){

    if(err){
      res.status(500).send('Internal Server Error');
    }

    res.status(200).send(repairOrder);
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

  let sroID = req.body.sroID;

  repairOrder.findOneAndRemove({ sroID: sroID }, function(err, repairOrder){

    if(err){
      res.status(500).send('Internal Server Error');
    }

    res.status(200).send(repairOrder);
  });

};
