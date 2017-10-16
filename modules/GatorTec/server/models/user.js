const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Model for the user
let user = new Schema({

  userEmail: String,
  userPassword: String,
  userRole: String

});

module.exports = mongoose.model('user', user);
