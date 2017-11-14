const user = require('../controllers/userController.js');
const express = require('express');
const router = express.Router();
const passport = require('passport');
const authenticate = require('../config/authenticate.js');

// Defining routes for the different kinds of request made for a user
router.route('/add')
  .post(authenticate.isAdmin, passport.authenticate('local.register', {}));

router.route('/getAllusers')
  .get(authenticate.isAdmin, user.getAllUsers);

router.route('/delete')
  .delete(authenticate.isAdmin, user.delete);

router.route('/login')
  .post(passport.authenticate('local.login', {}), user.login);

router.route('/logout')
  .get(user.logout);

module.exports = router;
