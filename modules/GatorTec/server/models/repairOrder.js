const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Model for the repairOrder
let repairOrder = new Schema ({

  sroID: { type: String, required: true },
  customerName: { type: String, required: true },
  customerPhoneNumber: { type: String, required: true },
  customerEmail: { type: String, required: true },
  deviceType: String,
  serialNumber: String,
  warrantyStatus: String,
  status: { type: String, required: true },
  dateCreated: { type: String, required: true },
  dateModified: { type: String, required:true },
  problemDescription: String,
  workPerformed: String,
  blacklist: { type: Boolean, required: true }

});

module.exports = mongoose.model('repairOrder', repairOrder);
