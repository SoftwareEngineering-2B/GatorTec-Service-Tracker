const mongoose = require('mongoose');
const repairOrder = require('../models/repairOrder.js');

// Add a repairOrder
exports.add = function(req, res){

  let sro = req.body;

  repairOrder.create(sro, function(err, sro){
    if(err){
      console.log(err);
    }
    console.log(sro);
    res.status(200).send(sro);
  });

};

// Get all repairOrders by email
exports.getAllRepairOrders = function(req, res){

  let customerEmail = req.body.customerEmail;

  repairOrder.find({ customerEmail: customerEmail }, function(err, repairOrders){
    if(err){
      console.log(err);
    }
    console.log(repairOrders);
    res.status(200).send(repairOrders);
  });

};

// Edit a repairOrder by sro number
exports.edit = function(req, res){

  let sroNumber = req.body.sroNumber;

  repairOrder.findOneAndUpdate({ sroNumber: sroNumber }, { deviceID: "iphone" }, { new: true }, function(err, repairOrder){
    if(err){
      console.log(err);
    }
    console.log(repairOrder);
    res.status(200).send(repairOrder);
  });

};

// BlackList a repairOrder by sro number
exports.blacklist = function(req, res){

  let sroNumber = req.body.sroNumber;

  repairOrder.findOneAndUpdate({ sroNumber: sroNumber }, { repairStatus: "blacklisted" }, { new: true }, function(err, repairOrder){
    if(err){
      console.log(err);
    }
    console.log(repairOrder);
    res.status(200).send(repairOrder);
  });

};

// Delete an repairOrder by sro number
exports.delete = function(req, res){

  let sroNumber = req.body.sroNumber;

  repairOrder.findOneAndRemove({ sroNumber: sroNumber }, function(err, repairOrder){
    if(err){
      console.log(err);
    }
    console.log(repairOrder);
    res.status(200).send(repairOrder);
  });

};
