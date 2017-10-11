const repairOrder = require('../controllers/repairOrderController.js');
const express = require('express');
const router = express.Router();

// Defining routes for the different kinds of request made for a repairOrder
router.route('/add')
  .post(repairOrder.add);

router.route('/getAllRepairOrders')
  .get(repairOrder.getAllRepairOrders);

router.route('/edit')
  .put(repairOrder.edit);

router.route('/blacklist')
  .put(repairOrder.blacklist);

router.route('/delete')
  .delete(repairOrder.delete);

module.exports = router;
