const repairOrder = require('../controllers/repairOrderController.js');
const express = require('express');
const router = express.Router();

// Defining routes for the different kinds of request made for a repairOrder
router.route('/add')            // Create middleware for getting largest sroID and incrementing then assign it to the new repair order
  .post(repairOrder.add);

router.route('/getAllRepairOrders')
  .get(repairOrder.getAllRepairOrders);

router.route('/getAllRepairOrdersByEmail')        // Get the GET request to accept parameters; Specifically username/email
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
