const user = require('../controllers/userController.js');
const express = require('express');
const router = express.Router();
const passport = require('passport');

// Defining routes for the different kinds of request made for a user
router.route('/add')
  .post(passport.authenticate('local.register', {}));

router.route('/getAllusers')
  .get(user.getAllUsers);

// router.route('/edit')
//   .put(user.edit);

router.route('/delete')
  .delete(user.delete);

router.route('/login')
  .post(passport.authenticate('local.login', {}), user.login);

module.exports = router;
