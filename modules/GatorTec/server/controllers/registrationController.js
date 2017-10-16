const mongoose = require('mongoose');
const user = require('../models/user.js');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

// Adds user to database; specifies their username, password, and role
exports.register = function(req, res) {
    user.register(new user({ username : req.body.username, userRole: req.body.userRole }), req.body.userPassword, function(err, user) {
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
