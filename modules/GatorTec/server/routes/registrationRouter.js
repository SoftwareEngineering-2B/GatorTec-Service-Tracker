const registration = require('../controllers/registrationController.js');
const express = require('express');
const router = express.Router();

// Defining routes for the different kinds of request made for a customer
router.route('/')
  .post(registration.register);

module.exports = router;
