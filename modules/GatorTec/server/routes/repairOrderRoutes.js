const repairOrder = require('../controllers/repairOrderController.js');
const express = require('express');
const router = express.Router();

// Defining routes for the different kinds of request made for a repairOrder
router.route('/add')            // Create middleware for getting largest sroID and incrementing then assign it to the new repair order
  .post(repairOrder.add, repairOrder.createUserFromSRO);

router.route('/getAllRepairOrders')
  .get(repairOrder.getAllRepairOrders);

router.route('/getAllRepairOrdersByEmail')
  .get(repairOrder.getAllRepairOrdersByEmail);

  router.route('/blacklist')
  .put(repairOrder.blacklist);

  router.route('/unblacklist')
  .put(repairOrder.unblacklist);

// router.route('/edit')
//   .put(repairOrder.edit);

router.route('/delete')
  .delete(repairOrder.delete);

module.exports = router;
