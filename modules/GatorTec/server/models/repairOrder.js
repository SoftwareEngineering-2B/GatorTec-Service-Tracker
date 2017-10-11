const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Model for the repairOrder
let repairOrder = new Schema ({

  customerName: String,
  customerEmail: String,
  customerPhoneNumber: String,

  sroNumber: String,
  repairStatus: String,
  dateCreated: String,
  technicianNotes: String,
  deviceID: String,
  deviceFamily: String,
  deviceDescription: String

});

module.exports = mongoose.model('repairOrder', repairOrder);
