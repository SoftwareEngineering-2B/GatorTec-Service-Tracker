const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Model for the user
let user = new Schema({

  name: { type: String, required: true },
  username: { type: String, required: true },
  userPassword: { type: String, required: true },
  userRole: { type: String, required: true }

});

module.exports = mongoose.model('user', user);
