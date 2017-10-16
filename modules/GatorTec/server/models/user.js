const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

// Model for the user
let user = new Schema({

  username: String,
  userPassword: String,
  userRole: String

});

user.plugin(passportLocalMongoose);

module.exports = mongoose.model('user', user);
