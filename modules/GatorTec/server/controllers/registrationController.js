const mongoose = require('mongoose');
const account = require('../models/account.js');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

exports.register = function(req, res) {
    account.register(new account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
          console.log('error');
          console.log(err);
            return res.render("../../client/views/index.html", {info: "Sorry. That username already exists. Try again."})
        }

        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
};
