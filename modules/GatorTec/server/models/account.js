const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

// Model for the account
let account = new Schema({

  username: String,
  password: String

});

account.plugin(passportLocalMongoose);

module.exports = mongoose.model('account', account);
