const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Model for the employee
let employee = new Schema({

  employeeName: String,
  employeeEmail: String,
  employeePassword: String,
  employeeType: String

});

module.exports = mongoose.model('employee', employee);
