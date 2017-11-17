const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Model for the user
let user = new Schema({

  employeeName: String,
  username: String,
  userPassword: String,
  userRole: String

});

module.exports = mongoose.model('user', user);
