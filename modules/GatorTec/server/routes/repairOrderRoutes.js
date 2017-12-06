const repairOrder = require('../controllers/repairOrderController.js');
const express = require('express');
const router = express.Router();
const authenticate = require('../config/authenticate.js');

// Defining routes for the different kinds of request made for a repairOrder
router.route('/add')
  .post(authenticate.isAdmin, repairOrder.add);

router.route('/getAllRepairOrders')
  .get(authenticate.isTechnicianOrAdmin, repairOrder.getAllRepairOrders);

router.route('/getAllRepairOrdersByEmail')
  .get(authenticate.isCustomer, repairOrder.getAllRepairOrdersByEmail);

router.route('/blacklist')
  .put(authenticate.isTechnicianOrAdmin, repairOrder.blacklist);

router.route('/unblacklist')
  .put(authenticate.isTechnicianOrAdmin, repairOrder.unblacklist);

router.route('/delete')
  .delete(authenticate.isAdmin, repairOrder.delete);

module.exports = router;
