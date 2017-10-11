const mongoose = require('mongoose');
const employee = require('../models/employee.js');

// Add an employee
exports.add = function(req, res){

  let employee = req.body;
  
  employee.create(employee, function(err, employee){
    if(err){
      console.log(err);
    }
    console.log(employee);
    res.status(200).send(employee);
  });

};

// Get all employees
exports.getAllEmployees = function(req, res){

  employee.find({}, function(err, employees){
    if(err){
      console.log(err);
    }
    console.log(employees);
    res.status(200).send(employees);
  });

};

// Edit an employee by email
exports.edit = function(req, res){

  let employeeEmail = req.body.employeeEmail;

  employee.findOneAndUpdate({ employeeEmail: employeeEmail }, { employeeType: "admin" }, { new: true }, function(err, employee){
    if(err){
      console.log(err);
    }
    console.log(employee);
    res.status(200).send(employee);
  });

};

// Delete an employee by email
exports.delete = function(req, res){

  let employeeEmail = req.body.employeeEmail;

  employee.findOneAndRemove({ employeeEmail: employeeEmail }, function(err, employee){
    if(err){
      console.log(err);
    }
    console.log(employee);
    res.status(200).send(employee);
  });

};
