const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Model for the repairOrder
let repairOrder = new Schema ({

  sroID: String,
  customerName: String,
  customerPhoneNumber: String,
  customerEmail: String,
  deviceType: String,
  serialNumber: String,
  status: String,
  dateCreated: String,
  dateModified: String,
  problemDescription: String,
  workPerformed: String,
  blacklist: Boolean

});

module.exports = mongoose.model('repairOrder', repairOrder);
