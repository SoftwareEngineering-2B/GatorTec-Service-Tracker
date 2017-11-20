const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Model for the repairOrder
let repairOrder = new Schema ({

  sroID: { type: String, required: true },
  customerName: { type: String, required: true },
  customerPhoneNumber: String,
  customerEmail: { type: String, required: true },
  deviceType: { type: String, required: true },
  serialNumber: { type: String, required: true },
  warrantyStatus: String,
  status: { type: String, required: true },
  dateCreated: { type: String, required: true },
  dateModified: { type: String, required:true },
  problemDescription: String,
  workPerformed: String,
  blacklist: Boolean

});

module.exports = mongoose.model('repairOrder', repairOrder);
