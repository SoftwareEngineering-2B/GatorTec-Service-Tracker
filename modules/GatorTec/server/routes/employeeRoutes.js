const employee = require('../controllers/employeeController.js');
const express = require('express');
const router = express.Router();

// Defining routes for the different kinds of request made for a customer
router.route('/add')
  .post(employee.add);

router.route('/getAllEmployees')
  .get(employee.getAllEmployees);

router.route('/edit')
  .put(employee.edit);

router.route('/delete')
  .delete(employee.delete);

module.exports = router;
