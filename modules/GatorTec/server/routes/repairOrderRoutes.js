const repairOrder = require('../controllers/repairOrderController.js');
const express = require('express');
const router = express.Router();
const authenticate = require('../config/authenticate.js');

// Defining routes for the different kinds of request made for a repairOrder
router.route('/add')            // Create middleware for getting largest sroID and incrementing then assign it to the new repair order
  .post(/*authenticate.isAdmin,*/ repairOrder.add, repairOrder.createUserFromSRO);

router.route('/getAllRepairOrders')
  .get(/*authenticate.isTechnicianOrAdmin,*/ repairOrder.getAllRepairOrders);

router.route('/getAllRepairOrdersByEmail')
  .get(/*authenticate.isCustomer,*/ repairOrder.getAllRepairOrdersByEmail);

router.route('/blacklist')
  .put(/*authenticate.isTechnicianOrAdmin,*/ repairOrder.blacklist);

router.route('/unblacklist')
  .put(/*authenticate.isTechnicianOrAdmin,*/ repairOrder.unblacklist);

router.route('/delete')
  .delete(/*authenticate.isAdmin,*/ repairOrder.delete);

module.exports = router;
