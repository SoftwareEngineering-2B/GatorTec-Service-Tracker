const user = require('../controllers/userController.js');
const express = require('express');
const router = express.Router();

// Defining routes for the different kinds of request made for a user
router.route('/add')              // Create middleware that will check that the username/email is not already taken
  .post(user.add);

router.route('/getAllusers')
  .get(user.getAllUsers);

// router.route('/edit')
//   .put(user.edit);

router.route('/delete')
  .delete(user.delete);

module.exports = router;
